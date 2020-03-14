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
			var moveInList = json.result.moveInList;
			var tb = "";
			for (var i = 0; i < 30; i++) {
				tb += "<tr><td>" + (i+1) + "</td>" +
					"<td>" + moveInList[i].city_name + "</td>" +
					"<td>" + moveInList[i].value + "</td>" +
					"</tr>";
			}
			document.getElementById("move-in-table").innerHTML += tb;
			
			var moveOutList = json.result.moveOutList;
			tb="";
			for (var i = 0; i < 30; i++) {
				tb += "<tr><td>" + (i+1) + "</td>" +
					"<td>" + moveOutList[i].city_name + "</td>" +
					"<td>" + moveOutList[i].value + "</td>" +
					"</tr>";
			}
			document.getElementById("move-out-table").innerHTML += tb;
		}
	}
	xmlhttp.open("GET", "https://huiyan.baidu.com/openapi/v1/migration/rank?type=move&ak=kgD2HiDnLdUhwzd3CLuG5AWNfX3fhLYe&adminType=country&name=%E5%85%A8%E5%9B%BD", true);
	xmlhttp.send();
})
