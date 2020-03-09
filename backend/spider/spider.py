import requests
import json
def get_city_date(word=None):
    url = 'https://huiyan.baidu.com/openapi/v1/migration/rank?type=move&ak=kgD2HiDnLdUhwzd3CLuG5AWNfX3fhLYe&adminType=country&name=%E5%85%A8%E5%9B%BD'
    form_data={}
    response = requests.post(url,data=form_data)
    #将Json格式字符串转字典
    content = json.loads(response.text)
    print(content)
get_city_date()