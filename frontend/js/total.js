$(document).ready(function() {
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
			//累积确诊
			document.getElementById("all-dia-num").innerHTML = data[0].diagnosed;
			document.getElementById("all-dead-num").innerHTML = data[0].death;
			document.getElementById("all-cure-num").innerHTML = data[0].cured;
			document.getElementById("new-time").innerHTML += data[0].date;
		}
	}
	xmlhttp.open("GET", "http://www.dzyong.top:3005/yiqing/total", true);
	xmlhttp.send();
})
