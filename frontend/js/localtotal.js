$(document).ready(function() {
	urlinfo = window.location.href; //获取当前页面的url
	len = urlinfo.length; //获取url的长度
	offset = urlinfo.indexOf("?"); //设置参数字符串开始的位置
	newsidinfo = urlinfo.substr(offset, len) //取出参数字符串 这里会获得类似“id=1”这样的字符串
	newsids = newsidinfo.split("="); //对获得的参数字符串按照“=”进行分割
	newsid = decodeURIComponent(newsids[1]); //得到参数并解码
	
	var xmlhttp;
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject();
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var json = JSON.parse(xmlhttp.responseText);
			var data = json.data;
			
			var total={};
			for(var i = 0; i < data.length; i++) {
				if(data[i].provinceName == newsid)
				{
					total = data[i];
					break;
				}
			}
			
			//累积确诊
			document.getElementById("province-all-dia-num").innerHTML = total.confirmedNum;
			document.getElementById("province-all-cure-num").innerHTML = total.curesNum;
			document.getElementById("province-all-dead-num").innerHTML = total.deathsNum;
		}
	}
	xmlhttp.open("GET", "http://www.dzyong.top:3005/yiqing/province", true);
	xmlhttp.send();
})
