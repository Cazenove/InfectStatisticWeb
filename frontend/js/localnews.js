$(document).ready(function() {
	urlinfo = window.location.href; //获取当前页面的url
	len = urlinfo.length; //获取url的长度
	offset = urlinfo.indexOf("?"); //设置参数字符串开始的位置
	newsidinfo = urlinfo.substr(offset, len) //取出参数字符串 这里会获得类似“id=1”这样的字符串
	newsids = newsidinfo.split("="); //对获得的参数字符串按照“=”进行分割
	newsid = decodeURIComponent(newsids[1]); //得到参数并解码
	
	src="https://voice.baidu.com/act/newpneumonia/newpneumonia/?from=osari_pc_3&city="+ newsid +"-"+ newsid +"#tab3";
	
	document.getElementById("localnews").src = src;
	console.log(src);
	
})
