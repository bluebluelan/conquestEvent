var ZG_UA='Mozilla/5.0 (Linux; U; Android 2.3.4; zh-cn; GT-I9100 Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1 ZyngaBundleIdentifier/com.zynga.zjayakashi ZyngaBundleVersion/1.7.0';
var ziddata = {};
var itemidlist = [];
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
		if(request.type=="SEBS"){
			qq=0;
			itemidlist = [2,3,4];
			AutoAttack(request.data);
		}
		else if(request.type=="poke"){
			AutoPoke(request.data);
		}
		else if(request.type=="goTodeposit"){
			setTimeout(function(){
				chrome.tabs.update({
						url:"http://zc2.ayakashi.zynga.com/app.php?_c=campaign_reward&action=present_All&code=2014_06_03_19_11_13&pagename=information"
				});
			},1000);
			setTimeout(function(){
				chrome.tabs.update({
					url:"http://zc2.ayakashi.zynga.com/app.php?_c=deposit&action=receive&key="+request.data+"&is_json=true"+$.now()
				});
			},6000);
			setTimeout(function(){
				chrome.tabs.update({
					url:"http://zc2.ayakashi.zynga.com/app.php?_c=item&action=use&item_id=20&options={}"
				});
			},7500);
		}
		else if(request.type=="ExtraEventBoss"){
			AutoPopUp(request.data);
		}
		else if(request.type=="deposit"){
			chrome.tabs.create({
				url:"http://zc2.ayakashi.zynga.com/app.php?_c=deposit&action=receive&key="+request.data+"&is_json=true"+$.now()
			});
			setTimeout(function(){
				chrome.tabs.create({
					url:"http://zc2.ayakashi.zynga.com/app.php?_c=item&action=use&item_id=20&options={}"
				});
			},1000);
		}
		else if(request.type=="FriendAccept"){
			qq=0;
			AutoAccept(request.data);
		}
	}
)
/////////////////////////////////function//////////////////////////////
function AutoPopUp(fileArr){
	chrome.tabs.create({
		url:"http://zc2.ayakashi.zynga.com/app.php?battle_id="+fileArr+"&encounter_battle_mode=1&evid=54&_c=extra_quest_event_npc_battle&action=confirm"
	});
};
function AutoAccept(fileArr){
	var ziddata=fileArr[qq];
	if(qq>=fileArr.length){
		qq=0;
		return;
	}
	console.log(fileArr[qq])
	chrome.tabs.create({
		url:"http://zc2.ayakashi.zynga.com/app.php?_c=ZJWebMessageCenter&action=syncAcceptEvent&event_id="+fileArr[qq]+"&action_key=onNeighborAccepted&is_json=true&_="+$.now()
	});
	qq=qq+1;
	setTimeout(function(){
		AutoAccept(fileArr);
	},1000);
};
function AutoAttack(fileArr){
	if(qq>itemidlist.length-1){
		qq=0;
		return;
	}
	chrome.tabs.create({
		url:"http://zc2.ayakashi.zynga.com/app.php?_c=parts_pvp_event&action=exec_battle&target_user_id="+fileArr+"&target_item_id="+itemidlist[qq]+"&evid=56"
	})
	qq=qq+1;
	setTimeout(function(){
		AutoAttack(fileArr);
	},2000);
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