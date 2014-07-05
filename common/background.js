var monsterData;
chrome.runtime.onMessage.addListener(
	function(request, sender, sendRequest){
		if(request.type=="SEBS"){
			monsterData=request.data;
			alert(monsterData)
		}
	}
)