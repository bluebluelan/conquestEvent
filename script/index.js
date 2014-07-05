var multipleMonsterDef = 1.05
var multipleMonsterAttack = 1.1
var multipleHP = 0 
var multipleAttack = 0	
var attackSpirit= 0 
var defenseSpirit = 0 
var monsterlevel = 1
var spiritTotal = 0 
var atkRatio = 0 
var defRatio = 0 
var monsterhplist = [2000, 2200, 2400, 2700, 3000, 4450, 5900, 7350, 8800, 10250, 11700, 13150, 14600, 16050, 17500, 18950, 20400, 21850, 23300, 24750, 26200, 27650, 29100, 30550, 32000, 30150, 30800, 31450, 32100, 40000, 41000, 42000, 43000, 44000, 45000, 46000, 47000, 48000, 49000, 50000, 51000, 52000, 53000, 54000, 55000, 56000, 57000, 58000, 59000, 60000, 61300, 62600, 63900, 65200, 66500, 67800, 69100, 70400, 71700, 73000, 74300, 75600, 76900, 78200, 79500, 87000, 94500, 102000, 109500, 117000, 124500, 132000, 139500, 147000, 154500, 162000, 169500, 177000, 184500, 250000, 193700, 194900, 196100, 197300, 198500, 199700, 200900, 202100, 203300, 204500, 205700, 206900, 208100, 209300, 210500, 211700, 212900, 214100, 250000, 600000, 300000, 320000, 340000, 360000, 380000, 400000, 420000, 440000, 460000, 480000, 500000, 520000, 540000, 560000, 580000,600000, 610000, 620000, 630000, 640000, 650000, 660000, 670000, 680000, 800000, 500000, 520000, 540000, 560000, 580000, 600000, 620000, 640000, 660000, 680000, 700000, 710000, 720000, 730000, 740000, 750000, 760000, 770000, 780000, 790000, 800000, 810000, 820000, 830000, 850000, 580000, 600000, 620000, 640000, 660000, 680000, 700000, 720000, 740000, 760000, 780000, 800000, 810000, 820000, 830000, 840000, 850000, 860000, 870000, 880000, 890000, 900000, 905000, 910000, 915000, 920000, 925000, 930000, 935000, 940000, 945000, 950000, 952000, 954000, 956000, 958000, 960000, 962000, 964000, 966000, 968000, 970000, 972000, 974000, 976000, 978000, 980000, 982000, 984000, 1000000]
var monsterAttacklist = [1500, 1900, 2300, 2700, 3100, 3500, 3900, 4300, 4700, 5100, 5500, 5900, 6300, 6700, 6700, 6950, 7200, 7450, 7700, 7950, 8200, 8450, 8700, 8950, 9200, 9450, 9700, 9950,10200, 11250, 11840, 12430, 13020, 13610, 14200, 14790, 15380, 15970, 16560, 17150, 17765, 18380, 18995, 19610, 20225, 20840, 21455, 22070, 22685, 23300, 23915, 24530, 25145, 25760, 26375, 26990, 27605, 28220, 28835, 29485, 32735, 35985, 39235, 42485, 45735, 48985, 52235, 55485, 58735, 61985, 65235, 68485, 71735, 74985, 78235, 81485, 84735, 87985, 91235, 94985, 95235, 95485, 95735, 95985, 96235, 96485, 96735, 96985, 97235, 97485, 97735, 97985, 98235, 98485, 98735, 98985, 99235, 99485, 99735, 100000, 100398, 100795, 101191, 101586, 101980, 102373, 102765, 103156, 103546, 103935, 104323, 104710, 105096, 105481, 105865, 106248, 106630, 107011, 107391, 107770, 108148, 108525, 108901, 109276, 125000, 125373, 125745, 126116, 126486, 126855, 127223, 127590, 127956, 128321, 128685, 129048, 129410, 129771, 130131, 130490, 130848, 131205, 131561, 131916, 132270, 132623, 132975, 133326, 133676, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 150000, 175000]
var monsterDefenselist =[250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 2500, 2930, 3360, 3790, 4210, 4640, 5060, 5470, 5890, 6300, 6710, 7120, 7520, 7930, 8330, 8720, 9120, 9510, 9900, 10290, 10670, 11060, 11440, 11810, 12190, 12500, 12820, 13140, 13450, 13760, 14070, 14380, 14690, 14990, 15290, 15590, 15880, 16170, 16460, 16750, 17040, 17320, 17600, 17880, 18150, 18420, 18690, 18960, 19230, 19490, 20000, 20210, 20410, 20610, 20810, 21010, 21210, 21400, 21590, 21780, 21960, 22140, 22320, 22500, 22680, 22850, 23020, 23190, 23350, 23510, 23670, 23830, 23990, 24140, 24290, 27500, 27600, 27690, 27780, 27870, 27950, 28030, 28110, 28190, 28265, 28340, 28415, 28475, 28540, 28600, 28660, 28720, 28770, 28830, 28885, 28940, 28975, 29015, 29055, 29095, 28755, 28960, 29130, 29300, 29470, 29640, 29810, 29970, 30130, 30280, 30430, 30580, 30730, 30880, 31030, 31180, 31330, 31480, 31630, 31790, 31950, 32060, 32190, 32310, 32440, 30000, 30240, 30480, 30720,30960, 31190, 31420, 31650, 31880, 32100, 32320, 32540, 32760, 32980, 33190, 33400, 33610, 33820, 34020, 34220, 34420, 34620, 34810, 35000, 35190, 32500, 32680, 32860, 33040, 33220, 33390, 33560, 33730, 33890, 34050, 34210, 34370, 34520, 34670, 34820, 34970, 35110, 35250, 35390, 35530, 35670, 35800, 35930, 36060, 36190, 37500]
var monsterBattleTime = [180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 180, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 120, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
var cardSetWithAD = []
var ultimateSpiritAmount = []
var timeAmount = []
var spiritWaterTotal = []
var data=[]
//////////////////////
var monDamage = []
var cardDamage = []
var yourhp= []
var attackAmount
var defenseAmount = 0
var spiritAmount = 0
var DamageAmount = []	
var spiritConsumption = []
var spiritWater = 0
/////////////////////
$(function(){
	data = chrome.extension.getBackgroundPage().monsterData;
});
$(function(){
	$("#Refresh").click(function(){
		console.log(data);
	});
	$("#printAD").click(function(){
		attackSpirit= parseInt($("#AS").val());
		//attackSpirit=200;
		defenseSpirit= parseInt($("#DS").val());
		//defenseSpirit=400;
		monsterlevelhigh=$("input#tLevel").val();
		//monsterlevelhigh=100;
		spiritTotal = attackSpirit+defenseSpirit
		atkRatio = attackSpirit/spiritTotal
		defRatio = defenseSpirit/spiritTotal
		multipleHP=parseInt($("select#HP :selected").prop("value"))/100;
		multipleAttack=parseInt($("select#attack :selected").prop("value"))/100;
		monsterlevel= parseInt(monsterlevelhigh);
//		for(var monsterlevel=1;monsterlevel<=monsterlevelhigh;monsterlevel++){
			monDamage = []
			cardDamage = []
			yourhp= []
			attackAmount = 0
			defenseAmount = 0
			spiritAmount = 0
			DamageAmount = []	
			spiritConsumption = []
			spiritWater = 0
			for (var daemonSet=0;daemonSet<37;daemonSet+=4){
				attackAmount+=parseInt(data[daemonSet+1])
				defenseAmount+=parseInt(data[daemonSet+2])
				spiritAmount+=parseInt(data[daemonSet+3])
				//monsterDamage = monsterAttacklist[monsterlevel-1]*multipleMonsterAttack*53/50-defenseAmount*53/200
				monsterDamage = Math.max((monsterAttacklist[monsterlevel-1]*multipleMonsterAttack-defenseAmount/4),100)
				cDamage = (attackAmount/25)*(13+7*multipleAttack)-monsterDefenselist[monsterlevel-1]*multipleMonsterDef*12/125*(1+daemonSet/4)
				monDamage.push(parseInt(monsterDamage))
				cardDamage.push(parseInt(cDamage))
				spiritConsumption.push(spiritAmount/2)
				yourhp.push((attackAmount/2+defenseAmount)*(1+parseInt(multipleHP)))
			}
			console.log("Monster damage as below")
			console.log(monDamage)
			console.log("Your HP as below")
			console.log(yourhp)
			for(i=4;i<10;i++){
				cardDamage[i]=cardDamage[i]+(1+Math.floor(i/7))*cardDamage[0]
			}
			for(i=9;i>6;i--){
				cardDamage[i]=cardDamage[i]-cardDamage[6]
			}
			for(i=6;i>3;i--){
				cardDamage[i]=cardDamage[i]-cardDamage[3]
			}
			DamageAmount=cardDamage.slice(0)
			for(index=0;index<4;index++){
				DamageAmount[index]=cardDamage[index]*(1+Math.floor(Math.abs(yourhp[index]/monDamage[index])))
			}
			for(index=4;index<7;index++){
				attacktimes=Math.ceil(yourhp[index]/monDamage[index])
				card4=Math.ceil(attacktimes/2)
				DamageAmount[index]=cardDamage[3]*card4+cardDamage[index]*(attacktimes-card4)
			}
			for(index=7;index<10;index++){
				attacktimes=Math.ceil(yourhp[index]/monDamage[index])
				card4=Math.ceil(attacktimes/3)
				card7=Math.ceil(attacktimes/4)
				DamageAmount[index]=cardDamage[3]*card4+cardDamage[6]*card7+cardDamage[index]*(attacktimes-card4-card7)
			}
			console.log("Daemons' damage as below")
			console.log(DamageAmount)
			monsterTempHp=parseInt(monsterhplist[monsterlevel-1])
			oneSpiritDamage=0
			cardsqeunce = []
			remainSpirit=spiritTotal
			//Calculate full spirit Damage
			for(;remainSpirit >= spiritConsumption[9]*2;){
				remainSpirit -= spiritConsumption[9]
				oneSpiritDamage+=DamageAmount[9]
				cardsqeunce.push(10)
			}
			for(;spiritConsumption[0]*2<=remainSpirit;){
				for(i=8;0<=i;i--){
					if(remainSpirit>=spiritConsumption[i]*2){
						oneSpiritDamage+=DamageAmount[i]
						remainSpirit/=2
						cardsqeunce.push(i+1)
					}
				}
			}
			console.log("One spirit water may deal "+oneSpiritDamage+" damages")
			i=0
			totalcost=0
			tenCardNumber=0
			attackTotalcost=0
			defenseTotalcost=0
			spiritWater=Math.max(Math.floor(monsterTempHp/oneSpiritDamage),0)
			monsterTempHp=monsterTempHp-oneSpiritDamage*spiritWater
			totalcost=spiritWater*spiritTotal
			console.log("After drink "+spiritWater+" spirit water, it remains "+monsterTempHp+" HP")
			for(i=0;i < 10;i++){
				//Calculate TenCards Time++
				if (DamageAmount[9]<monsterTempHp){
					tenCardtimes=Math.floor(monsterTempHp/DamageAmount[9])
					tenCardNumber+=tenCardtimes
					totalcost+=spiritConsumption[9]*tenCardtimes
					attackTotalcost+=Math.floor(spiritConsumption[9]*(atkRatio)*tenCardtimes)
					defenseTotalcost+=Math.floor(spiritConsumption[9]*(defRatio)*tenCardtimes)
					monsterTempHp=monsterTempHp-DamageAmount[9]*tenCardtimes
					i=0
				}
				//Calculate TenCards Time--
				else if (DamageAmount[i]>=monsterTempHp){
					totalcost+=spiritConsumption[i]
					console.log("QQQQ "+(i+1))
					attackTotalcost+=Math.floor(spiritConsumption[i]*(atkRatio))
					defenseTotalcost+=Math.floor(spiritConsumption[i]*(defRatio))
					spiritWaterTotal.push(Math.max(parseInt(spiritWater),0))
					attackRecoverTime = ((spiritWater-Math.max(parseInt(spiritWater),0))*spiritTotal+attackTotalcost+defenseTotalcost)*atkRatio
					defenseRecoverTime = ((spiritWater-Math.max(parseInt(spiritWater),0))*spiritTotal+attackTotalcost+defenseTotalcost)*defRatio
					timeAmount.push(Math.max(attackRecoverTime,defenseRecoverTime/2))
					ultimateSpiritAmount.push(parseInt((spiritWater-Math.max(parseInt(spiritWater),0))*spiritTotal+attackTotalcost+defenseTotalcost))
					break
				}
			}
			if (spiritWater>0){
				if(tenCardNumber>0){
					alert("Your need "+spiritWater+" spirit water, "+tenCardNumber+" x 10 cards and 1 x "+(i+1)+" cards to defeat level "+monsterlevel+" monster")
				}
				else{
					alert("Your need "+spiritWater+" spirit water and 1 x "+(i+1)+" cards to defeat level "+monsterlevel+" monster")
				}
			}
			else {
				if(tenCardNumber>0){
					alert("Your need "+tenCardNumber+" x 10 cards and 1 x "+(i+1)+" cards to defeat level "+monsterlevel+" monster")
				}
				else{
					alert("Your need 1 x "+(i+1)+" cards to defeat level "+monsterlevel+" monster")
				}
			}
			console.log("Your need to drink "+spiritWater+" spirit water")
			//console.log("ultimateSpiritAmount"+ultimateSpiritAmount)
			//console.log(spiritWaterTotal)
	});
});