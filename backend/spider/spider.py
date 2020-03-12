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

# 循环raw_comments的长度 (这里长度是34) 所以循环之后用i来存储，然后定义aa 来进行拼接就可以获取想要的json内容
for i in range(len(raw_comments)):
    each_raw = raw_comments[i]['children']

    for j in each_raw:
        area = j['parentAreaName']
        city = j['name']
        confirm = j['sure']
        suspect = j['suspected']
        dead = j['dead']
        heal = j['recovered']
        time = j['formattedModifiedDate']

        # 连接数据库
        conn = pymysql.connect(host="localhost", user="root", password="", database="chinamap", charset="utf8")
        cursor = conn.cursor()

        #构建一条数据
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

        sql = "insert into province(area,city,confirm,suspect,dead,heal,time) value('{}','{}',{},{},{},{},'{}')".format(
            film_dict['area'], film_dict['city'], film_dict['confirm'], film_dict['suspect'], film_dict['dead'],
            film_dict['heal'], film_dict['time'])
        cursor.execute(sql)
        conn.commit()

cursor.close()
conn.close()