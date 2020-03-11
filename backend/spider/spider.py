import requests
import json
def get_city_date(word=None):
    url = 'https://huiyan.baidu.com/openapi/v1/migration/rank?type=move&ak=kgD2HiDnLdUhwzd3CLuG5AWNfX3fhLYe&adminType=country&name=%E5%85%A8%E5%9B%BD'
    form_data={}
    response = requests.post(url,data=form_data)
    #将Json格式字符串转字典
    content = json.loads(response.text)
    result = content['result']
    print(content)
    move_in_list = result['moveInList']
    move_out_list = result['moveOutList']
    print("迁入城市")
    for i in move_in_list:
        city_name = i['city_name']
        province_name = i['province_name']
        city_code = i['city_code']
        print(city_name+" "+province_name+" "+city_code)
    print("迁出城市")
    for i in move_out_list:
        city_name = i['city_name']
        province_name = i['province_name']
        city_code = i['city_code']
        print(city_name+" "+province_name+" "+city_code)
get_city_date()