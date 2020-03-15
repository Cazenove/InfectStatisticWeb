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
			document.getElementById("province-name").innerHTML = newsid;
			document.getElementById("line-chart-name").innerHTML = newsid + "城市疫情表";

			var json = JSON.parse(xmlhttp.responseText).data;
			var tb = "";
			for (var i = 0; i < json.length; i++) {
				tb += "<tr><td>" + json[i].cityName + "</td>" +
					"<td>" + json[i].confirmedCount + "</td>" +
					"<td>" + json[i].suspectedCount + "</td>" +
					"<td>" + json[i].curedCount + "</td>" +
					"<td>" + json[i].deadCount + "</td>" +
					"</tr>";
			}
			document.getElementById("localtable").innerHTML += tb;
		}
	}

	var url = "http://www.dzyong.top:3005/yiqing/area?area=" + newsid;
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
})
