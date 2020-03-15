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
			var tb = "";
			for (var i = 0; i < data.length; i++) {
				tb += "<tr><td>" + data[i].provinceName + "</td>" +
					"<td>" + data[i].confirmedNum + "</td>" +
					"<td>" + data[i].curesNum + "</td>" +
					"<td>" + data[i].deathsNum + "</td>" +
					"</tr>";
			}
			document.getElementById("maintable").innerHTML += tb;
		}
	}
	xmlhttp.open("GET", "http://www.dzyong.top:3005/yiqing/province", true);
	xmlhttp.send();
})
