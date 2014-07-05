var geturl=window.location.toString();
var ConUrl="http://yasushi.me/ayabeta/conquest.html"
var monsterDetail = [];
var flag = 0;
setTimeout(function(){
	if (geturl==ConUrl){
		searchenemybyspirit();
	}
	else{
		console.log("HHH")
	}
},2000);
//////////////////////////////function//////////////////////
function searchenemybyspirit(){
	i=1
	monsterDetail.push($("div.ctlt").next().children().children(".iad").text())
	monsterDetail.push($("div.ctlt").next().children().children(".ia").text())
	monsterDetail.push($("div.ctlt").next().children().children(".id").text())
	monsterDetail.push($("div.ctlt").next().children().children(".ic").text())
	console.log(monsterDetail)
	$("div#ctlm").children().each(function(){
		if (i<10){
			monsterDetail.push($(this).children().children(".iad").text())
			monsterDetail.push($(this).children().children(".ia").text())
			monsterDetail.push($(this).children().children(".id").text())
			monsterDetail.push($(this).children().children(".ic").text())
			i+=1
		}
	})
	console.log(monsterDetail);
	chrome.runtime.sendMessage({type:"SEBS",data:monsterDetail});
};