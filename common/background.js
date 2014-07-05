var monsterData;
var monsterName;
var tempData;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendRequest){
		if(request.type=="SEBS"){
			monsterData=request.data;
			monsterName=request.name;
			alert(monsterName);
		}
	}
)