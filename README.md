# InfectStatisticWeb
## 作业链接
https://edu.cnblogs.com/campus/fzu/2020SPRINGS/homework/10460

## 结对学号
221701210 & 221701224

## 项目介绍
疫情统计可视化的实现，采用了前后端分离的架构，后端已经部署到服务器。本项目以实现为主，数据来源有后端爬虫的数据，也有网络上的接口，部分数据来源无法获取，所以只是记录了某一天的记录，总体而言并不具有参考价值！

## 构建和运行
本项目分为三个部分：
### 1.爬虫部分
需要将backend/spider/spider.py中的数据库连接修改为自己的实际情况。
需要使用pymysql, requests, json库,如果环境中没有请使用pip install进行安装。
```
conn = pymysql.connect(host="localhost", user="root", password="xxxxxx", database="chinamap", charset="utf8")
```

### 2.后端部分
后段部分已经部署到了服务器，目前开放了以下接口
GET接口
http://106.12.47.24:8081/area
http://106.12.47.24:8081/province/省份
POST接口
http://106.12.47.24:8081/provinces
要部署到本地的话需要修改application.yml文件中的数据库配置

### 3.前端部分
直接运行index.html即可