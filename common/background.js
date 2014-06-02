var ZG_UA='Mozilla/5.0 (Linux; U; Android 2.3.4; zh-cn; GT-I9100 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 ZyngaBundleIdentifier/com.zynga.zjayakashi ZyngaBundleVersion/1.7.0';
var ziddata = {};
var qq=0;
chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    for (var i = 0; i < details.requestHeaders.length; ++i) {
      if (details.requestHeaders[i].name === 'User-Agent') {
        details.requestHeaders[i].value=ZG_UA;
        break;
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: [
    "http://zc2.ayakashi.zynga.com/*"]},
  ["blocking", "requestHeaders"]);
  
chrome.runtime.onMessage.addListener(
	function(request, sender, sendRequest){
		ziddata=request;
		if(request.type=="SEBS"){
			AutoAttack(request.data/*,request.item*/);
		}
		else if(request.type=="poke"){
			AutoPoke(request.data);
		}
		else if(request.type=="ExtraEventBoss"){
			AutoPopUp(request.data);
		}
	//	AutoPoke(ziddata);
	//	AutoAttack(ziddata);
	//	AutoAccept(ziddata);
	}
)
/////////////////////////////////function//////////////////////////////
function AutoPopUp(fileArr){
	chrome.tabs.create({
		url:"http://zc2.ayakashi.zynga.com/app.php?battle_id="+fileArr+"&encounter_battle_mode=1&evid=54&_c=extra_quest_event_npc_battle&action=confirm"
	});
};
function AutoAccept(fileArr){
	chrome.tabs.create({
		//	 http://zc2.ayakashi.zynga.com/app.php?_c=ZJWebMessageCenter&action=syncAcceptEvent&event_id=8818253845374204ee922e&action_key=onNeighborAccepted&is_json=true&_=1400244636820
		url:"http://zc2.ayakashi.zynga.com/app.php?_c=ZJWebMessageCenter&action=syncAcceptEvent&event_id="+fileArr+"&action_key=onNeighborAccepted&is_json=true&_="+$.now()
	});
};
function AutoAttack(fileArr/*,itemid*/){
	//alert(fileArr);
	chrome.tabs.update({
		url:"http://zc2.ayakashi.zynga.com/app.php?_c=pvp_event&action=exec_battle&target_user_id="+fileArr+"&target_item_id=53&evid=53"
//		url:"http://zc2.ayakashi.zynga.com/app.php?_c=parts_pvp_event&action=exec_battle&target_user_id="+fileArr+"&target_item_id="+itemid+"&evid=52"
	})
};
function AutoPoke(fileArr){
	var ziddata=fileArr[qq];
	if(qq>=fileArr.length){
		qq=0;
		return;
	}
	chrome.tabs.update({
		url:"http://zc2.ayakashi.zynga.com/app.php?_c=friend&action=touch&zid="+ziddata+"&is_json=true&_="+$.now()
	});
	qq=qq+1;
	setTimeout(function(){
		AutoPoke(fileArr);
	},1000);
};