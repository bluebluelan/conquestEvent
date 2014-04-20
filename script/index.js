var ZDurl="http://zc2.ayakashi.zynga.com/app.php";
var main_memu=[
	{id:"battle",url:ZDurl+"?_c=battle"},
	{id:"parts",url:ZDurl+"?_c=parts"},
	{id:"monster",url:ZDurl+"?_c=monster&action=list"},
	{id:"album",url:ZDurl+"?_c=album"},
	{id:"shop",url:ZDurl+"?_c=item&action=list&tab=tab-shop-list"},
	{id:"setting",url:ZDurl+"?_c=settings"},
	{id:"info",url:ZDurl+"?_c=information"},
	{id:"friend",url:ZDurl+"?_c=friend"},
	{id:"exchg",url:ZDurl+"?_c=gacha&action=exchangeList"},
	{id:"box",url:ZDurl+"?_c=webMessageCenter"},
	{id:"mypage",url:ZDurl+"?_c=entry&action=mypage"},
	{id:"quest",url:ZDurl+"?_c=adventure"},
	{id:"merge",url:ZDurl+"?_c=merge"},
	{id:"gacha",url:ZDurl+"?_c=gacha"}
];

document.addEventListener(function () {
	var data = chrome.extension.getBackgroundPage().ziddata;
	alert(ziddata);
	chrome.tabs.create({
				//		url:"http://zc2.ayakashi.zynga.com/app.php?_c=player&action=visit&zid="+data
					})
});
$(function(){
	$("#AutoFriend").click(function(){
    chrome.tabs.create({
				url:"http://zc2.ayakashi.zynga.com/app.php?_c=WebNeighbor&action=SearchUser"
			})
	});
});
$(function(){
	var a=$("#select_file").get(0);//get http request;
	$("#select_file").click(function(){
		$("#file").click()
	});
	$("#file").change(function(c){
		alert(c.target.files.length);//num of zynga.properties
		var d=c.target.files[0];//load zynga.properties 
		var b=new FileReader();
		b.readAsText(d);
		b.onload=function(f){
			textList=ZDdecode(f.target.result);
			uuid=textList[0];
			udid=textList[1];
			$.ZDpost(uuid,udid)
			alert("Loading");
			chrome.tabs.update({
				url:http://zc2.ayakashi.zynga.com/app.php?_c=WebNeighbor&action=sendNeighborRequest&user_id=33570018637&is_json=true
			})
		}
	});
	$(".main_memu").load("../view/memu.html",function(){
		$.each(main_memu,function(b,d){
			var c=$("#"+d.id);
			c.live("click",function(){
				if(d.id==this.id){
					chrome.tabs.update({
						url:d.url
					})
				}
			})
		})
	});
});

$.ZDpost=function(c,d){
	var b="http://zc2.ayakashi.zynga.com/zj_game.json?authentication=none&manager=shared";
	var a=ZDurl+"?_c=ZJLogin&action=GetCookie&next=Entry.start&ZJSESSIONID=";
	var g="Mozilla/5.0 ZMTransaction/1.0";
	var e={
		headers:{
			device_model:"GT-I9100",
			device_family:"Android",
			batch_format_version:"1",
			bundle_version:"1.7.0",
			device_name:"Android",
			userKey:c,
			device_type:"4",
			locale:"zh_CN",
			bundle_identifier:"com.zynga.zjayakashi",
			udid:d,
			batch_sequence:0,
			os_version:"2.3.4"
		},
		transactions:{
			"0":{
				authHash:"3de557906c1b3ea4bdc6cb906ad1fb21",
				functionName:"MobileUserController.initUser",
				sequence:"0",
				params:{
					sessionId:null
				}
			}
		},
		signedParams:{
			zySig:"0",
			zySnid:"0",
			zySNuid:"0",
			zyUid:"0"
		}
	};
	var f=JSON.stringify(e);
	$.ajax({
		url:b,
		data:f,
		type:"POST",
		dataType:"json",
		headers:{
			"X-User-Key":c,
			"X-UDID":d,
			"X-Has-Persistent-Storage":"true",
			"User-Agent":g
		},
		contentType:"application/json",
		
		success:function(i){
			var h=i.responses[0];
			ZJSESSIONID=h.ZJSESSIONID;
			chrome.tabs.create({
				url:a+ZJSESSIONID
			})
		},
		error:function(){
			alert("登录失败")
		}
	})
};
function ZDdecode(d){
	var b=atob(d);
	var e=CryptoJS.enc.Hex.parse("0bf116e3b67f80a8b00b6489b416343cb8647ef1adc17516245967325cd41d2b");
	var c=CryptoJS.enc.Utf8.parse("zynga.properties");
	var a=CryptoJS.AES.decrypt({ciphertext:CryptoJS.enc.Latin1.parse(b)},e,{keySize:256/8,iv:c,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7});
	var f=a.toString(CryptoJS.enc.Utf8);
	var g=f.split(",");
	return g
};