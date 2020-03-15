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
			var li = "";
			for (var i = 0; i < 5; i++) {
				li += "<li><p>" + data[i].title + "</p>" +
				"<p>" + data[i].summary + "</p>" +
				"<p>" + data[i].pubDate + "</p>" +
				"</li>";
			}
			document.getElementById("newslist").innerHTML += li;
		}
	}
	xmlhttp.open("GET", "http://www.dzyong.top:3005/yiqing/news", true);
	xmlhttp.send();
})
