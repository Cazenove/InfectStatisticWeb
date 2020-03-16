import json
import pymysql
import requests

# 获取json数据源
url = 'https://ichoice.myweimai.com/activitycenter/api/epidemic/area/list?useJvmCache=true'

data = requests.get(url=url)

# 读取json数据
raw_info = json.loads(data.text)

# 从json数据中获取想要的内容
raw_comments = raw_info['data']['areaInfoVOS']

# 循环raw_comments的长度 (这里长度是34) 所以循环之后用i来存储，然后定义each_raw 来进行拼接就可以获取想要的json内容
for i in range(len(raw_comments)):
    each_raw = raw_comments[i]['children']

    sum=0
    sum_confirm = 0
    sum_suspect = 0
    sum_dead = 0
    sum_heal = 0

    for j in each_raw:
        area = j['parentAreaName']
        city = j['name']
        confirm = j['sure']
        suspect = j['suspected']
        dead = j['dead']
        heal = j['recovered']
        time = j['formattedModifiedDate']

        sum += 1
        sum_confirm += int(confirm)
        sum_suspect += int(suspect)
        sum_dead += int(dead)
        sum_heal += int(heal)

        # 连接数据库
        conn = pymysql.connect(host="localhost", user="root", password="qwQW12!@", database="chinamap", charset="utf8")
        cursor = conn.cursor()

        #构建一条城市数据
        film_dict = {}
        film = []

        film_dict['area'] = area
        film_dict['city'] = city
        film_dict['confirm'] = (int)(confirm)
        film_dict['suspect'] = (int)(suspect)
        film_dict['dead'] = (int)(dead)
        film_dict['heal'] = (int)(heal)
        film_dict['time'] = time
        film.append(film_dict)

        #插入城市统计表
        sql = "insert into province(area,city,confirm,suspect,dead,heal,time) value('{}','{}',{},{},{},{},'{}') " \
              "on duplicate key update confirm={},suspect={},dead={},heal={},time='{}'".format(
            film_dict['area'], film_dict['city'], film_dict['confirm'], film_dict['suspect'], film_dict['dead'],
            film_dict['heal'], film_dict['time'], film_dict['confirm'], film_dict['suspect'], film_dict['dead'],
            film_dict['heal'], film_dict['time'])
        cursor.execute(sql)
        conn.commit()
        print(sql)

    if sum > 0:
        # 构建一条省份数据
        film_dict = {}
        film = []
        film_dict['area'] = area
        film_dict['confirm'] = sum_confirm
        film_dict['suspect'] = sum_suspect
        film_dict['dead'] = sum_dead
        film_dict['heal'] = sum_heal
        film_dict['time'] = time
        film.append(film_dict)

        # 插入地区统计表
        sql = "insert into area(area,confirm,suspect,dead,heal,time) value('{}',{},{},{},{},'{}') " \
              "on duplicate key update confirm={},suspect={},dead={},heal={},time='{}'".format(
            film_dict['area'], film_dict['confirm'], film_dict['suspect'], film_dict['dead'],film_dict['heal'],
            film_dict['time'], film_dict['confirm'], film_dict['suspect'], film_dict['dead'],film_dict['heal'], film_dict['time'])
        cursor.execute(sql)
        conn.commit()
        print(sql)

cursor.close()
conn.close()
print("获取完成")
