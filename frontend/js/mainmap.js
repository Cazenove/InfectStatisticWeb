$(document).ready(function() {
	var xmlhttp;

	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject();
	}
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myChart = echarts.init(document.getElementById('echarts1'));
			var myChart1 = echarts.init(document.getElementById('echarts2'));
			var json = JSON.parse(xmlhttp.responseText);
			var data = json.data;
			
			var aa = [];
			var li = {};
			for(var i = 0; i < data.length; i++) {
				li = {
					"name":data[i].provinceName,
					"value":data[i].confirmedNum
				};
				aa[i] = li;
			}
			
			window.dataList = aa;
			option = {
				tooltip: {
					enterable: true,
					triggerOn: "click",
					formatter: function(e, t, n) {
						var url = "./province.html?=" + e.name;
						return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value + "<br />" +
							"<a href=\"" + url + "\">详情</a>"
					}
				},
				visualMap: {
					min: 0,
					max: 1000,
					left: 26,
					bottom: 40,
					showLabel: !0,
					text: ["高", "低"],
					pieces: [{
						gte: 10000,
						label: "> 10000 人",
						color: "#550000"
					}, {
						gt: 1000,
						lt: 9999,
						label: "1000 - 9999 人",
						color: "#7f1100"
					}, {
						gt: 100,
						lt: 999,
						label: "10 - 99 人",
						color: "#ff5428"
					}, {
						gt: 10,
						lt: 99,
						label: "10 - 99 人",
						color: "#ff8c71"
					}, {
						gte: 1,
						lt: 9,
						label: "1 - 9 人",
						color: "#ffd768"
					}, {
						value: 0,
						color: "#ffffff"
					}],
					show: !0
				},
				geo: {
					map: "china",
					roam: !1,
					scaleLimit: {
						min: 1,
						max: 2
					},
					zoom: 1.23,
					top: 120,
					label: {
						normal: {
							show: !0,
							fontSize: "14",
							color: "rgba(0,0,0,0.7)"
						}
					},
					itemStyle: {
						normal: {
							shadowBlur: 50,
							shadowColor: 'rgba(0, 0, 0, 0.2)',
							borderColor: "rgba(0, 0, 0, 0.2)"
						},
						emphasis: {
							areaColor: "#f2d5ad",
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							borderWidth: 0
						}
					}
				},
				series: [{
					name: "确诊病例",
					type: "map",
					map: "china",
					geoIndex: 0,
					data: window.dataList
				}]
			};
			myChart.setOption(option);
			
			
			var aa = [];
			var li = {};
			for(var i = 0; i < data.length; i++) {
				li = {
					"name":data[i].provinceName,
					"value":data[i].deathsNum
				};
				aa[i] = li;
			}
			
			window.dataList = aa;
			option = {
				tooltip: {
					enterable: true,
					triggerOn: "click",
					formatter: function(e, t, n) {
						var url = "./province.html?=" + e.name;
						return .5 == e.value ? e.name + "：有疑似病例" : e.seriesName + "<br />" + e.name + "：" + e.value + "<br />" +
							"<a href=\"" + url + "\">详情</a>"
					}
				},
				visualMap: {
					min: 0,
					max: 1000,
					left: 26,
					bottom: 40,
					showLabel: !0,
					text: ["高", "低"],
					pieces: [{
						gte: 10000,
						label: "> 10000 人",
						color: "#550000"
					}, {
						gt: 1000,
						lt: 9999,
						label: "1000 - 9999 人",
						color: "#7f1100"
					}, {
						gt: 100,
						lt: 999,
						label: "10 - 99 人",
						color: "#ff5428"
					}, {
						gt: 10,
						lt: 99,
						label: "10 - 99 人",
						color: "#ff8c71"
					}, {
						gte: 1,
						lt: 9,
						label: "1 - 9 人",
						color: "#ffd768"
					}, {
						value: 0,
						color: "#ffffff"
					}],
					show: !0
				},
				geo: {
					map: "china",
					roam: !1,
					scaleLimit: {
						min: 1,
						max: 2
					},
					zoom: 1.23,
					top: 120,
					label: {
						normal: {
							show: !0,
							fontSize: "14",
							color: "rgba(0,0,0,0.7)"
						}
					},
					itemStyle: {
						normal: {
							shadowBlur: 50,
							shadowColor: 'rgba(0, 0, 0, 0.2)',
							borderColor: "rgba(0, 0, 0, 0.2)"
						},
						emphasis: {
							areaColor: "#f2d5ad",
							shadowOffsetX: 0,
							shadowOffsetY: 0,
							borderWidth: 0
						}
					}
				},
				series: [{
					name: "确诊病例",
					type: "map",
					map: "china",
					geoIndex: 0,
					data: window.dataList
				}]
			};
			myChart1.setOption(option);
		}
	}
	xmlhttp.open("GET", "http://www.dzyong.top:3005/yiqing/province", true);
	xmlhttp.send();
})
