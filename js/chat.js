//記錄chat表的四個值，第五個值紀錄username
var nowdata = new Array(5);

const question = ['我總是害怕自己輸給別人，讓我壓力很大，好累...',
	'每次老師點到我，我都回答不出問題，其他同學都會，我好爛...',
	'我明明每天都熬夜讀書了，還是考得好差，我是不是真的沒有天分?',
	'我發現我對現在學的東西真的完全沒興趣，唸得好痛苦...',
	'爸媽又開始在親戚面前誇獎姊姊了，但說到我就開始搖頭，唉...',
	'為什麼明明是弟弟搶我東西，我還要被罵，是不是因為我是女生?',
	'我真的好累，每天都要半工半讀，好想辭職，但家裡沒有我這份薪水又過不下去...',
	'每天都聽到爸媽在房間吵架，壓力真的好大...',
	'從小我父母就離婚了，每次看到同學一家人出遊，都好希望爸媽同時在我身邊...',
	'我弟今天偷拿我的錢，被我發現居然還反過來罵我!一氣之下，我就動手打了他...',
	'每天去醫院看我奶奶的時候都覺得好難受，但又沒辦法做甚麼，真的好無力...',
	'我真的好喜歡他，好想跟他告白，但又怕被拒絕，怎麼辦?',
	'每次都因為一點小事就跟我男/女朋友吵起來，他也不願意跟我溝通，好煩...',
	'我們都在一起那麼久了，他居然在情人節跟我提分手，他怎麼能這麼狠心!',
	'我爸媽很不喜歡我男/女朋友，叫我跟他快點分開，我該怎麼辦?',
	'好想我男/女朋友，下次見面要再三個月後了，他能每天在我身邊該有多好',
	'我發現我男/女朋友背叛我，我親眼看到他在街上跟別人牽手擁抱!',
	'我好喜歡他，可是他已經有男/女朋友了，我該怎麼處理這段感情...',
	'每次我報告時，主管總是故意挑我毛病，對我百般挑剔，我真的快受不了了!',
	'公司的同事都是為了利益在交朋友，讓我感覺壓力好大，跟他們的關係也不和睦...',
	'我的業績總是達不到公司標準，就算再怎麼努力都沒用...',
	'不管我怎麼修改，客戶都一直不滿意我的提案，到底想要我怎麼樣?',
	'受到疫情的影響，我投資的餐廳都倒閉了，損失了好幾百萬，唉...',
	'我好想離職，但又找不到更滿意的工作...可能是我能力不足吧',
	'前幾天不幸被裁員了，但我真的很需要這份工作，怎麼辦...?',
	'每次跟朋友吵架，他都不願意聽我意見，我真的不知道怎麼跟他說了',
	'我只把他當朋友，他卻跟我告白，好尷尬...我們的友誼還可以繼續嗎?',
	'我把他當成最好的朋友，他卻在別人面前誣賴我，我真的好失望好難過...',
	'最近不知道為什麼朋友突然不理我了，我到底做錯什麼...?',
	'我突然發現我最好的朋友居然和我喜歡同一個人，我該如何是好?',
	'最近事情好多、壓力好大，連想休息的時候都睡不著，只能靠安眠藥才勉強入睡...',
	'我總是覺得自己比不上別人，可能我一輩子就這樣了吧...',
	'我還這麼年輕，為什麼會罹患癌症，老天爺怎麼可以這樣對我...',
	'好羨慕別人都有健康的身體，為甚麼人生這麼不公平，就我天生有殘缺...',
	'最近我常常莫名其妙就好想哭，做什麼事都提不起勁，好痛苦...'
];
const reply = ['原來你是這樣想的~','我也是這樣想的!','對對對!!沒錯','確實這樣會比較好',
	'我們想法真像','我也希望朋友這樣對我說','真希望你是我的朋友','如果有你這種朋友 我一定會收到滿滿安慰的','你的安慰肯定會成為他人極大的力量',
	'我難過時 你也可以這樣對我說嗎?','謝謝你','聽你說這些我好多了','真的謝謝你跟我說這些','有你真好','雖然不認識你 但我覺得很窩心',
	'聽你說完 心情好多了!','我覺得我能重新振作起來 面對這個世界了!','謝謝你 你需要的時候我也在喔','文字帶來的力量 遠比你想像的還大',
	'你的安慰 我收到了!','我不要再胡思亂想了','我決定相信自己 ','一切都會好起來的 對吧?','你人真好..','我決定不哭了','無論遇到甚麼困難 生活還是得過的吧?',
	'可以再聽聽我其他煩惱嗎?','我也想成為像你這樣會安慰人的朋友','真的非常感謝你'
];

var count = 0;

var test=function(nowdata){
    var url = window.location.search
    var username = url.split("?username=")[1]
    nowdata[4] = username;
    // console.log(username);
}(nowdata)


var nowQuest = [];

function chat(){
	count = count + 1;
    //隨機reply
	var ranN = Math.floor(Math.random() * 29);
	var ranQ = Math.floor(Math.random() * 34) + 1;

	//showUserInput存要顯示在html的東西
	var showUserInput = "";

	//取得使用者出入的文字內容
	var userInput = document.getElementById('userInput').value;
	
	var time = new Date();
	var year = time.getFullYear();
	var month = time.getMonth()+1;
	var day = time.getDate();
	var h = time.getHours();
	var m = time.getMinutes();
	var s = time.getSeconds();
	nowdata[0] = userInput;
	nowdata[1] = year+"-"+month+"-"+day+" "+h+":"+m+":"+s;
	nowdata[3] = year+"-"+month+"-"+day+" "+h+":"+m+":"+s;

	//建立使用者輸入的div
    var newli = document.createElement('li');
    newli.className = "mar-btm";
    var newdiv = document.createElement('div');
    newdiv.className = "media-body pad-hor speech-right";
    var newdiv2 = document.createElement('div');
    newdiv2.className = "speech";
    var newP = document.createElement('p');
    newP.innerHTML = userInput;

    newdiv2.appendChild(newP);
    newdiv.appendChild(newdiv2);
    newli.appendChild(newdiv);

    //放到正確的位子上
	//找到html裡面最後一條robot訊息的位置
    var last_li = document.getElementsByClassName('list-unstyled media-block');
    last_li[0].appendChild(newli);
    console.log(last_li);

	if(count == 35){
		//建立robot-reply輸入的div
	    var newli2 = document.createElement('li');
	    newli2.className = "mar-btm";
	    var newdiv3 = document.createElement('div');
	    newdiv3.className = "media-left";
	    var newdiv4 = document.createElement('div');
	    newdiv4.className = "speech";
	    var img = document.createElement('img');
	    img.src = "./img/cat.png";
	    img.className = "img-circle img-sm";
	    img.alt = "Profile Picture";
	    var newdiv5 = document.createElement('div');
	    newdiv5.className = "media-body pad-hor";
    	var RobotP = document.createElement('p');

    	RobotP.innerHTML = "謝謝以上的回覆，這對我們專題幫助極大ヾ(*´∀ ˋ*)ﾉ";

	    newdiv4.appendChild(RobotP);
	    newdiv5.appendChild(newdiv4);
	    newdiv3.appendChild(img);
	    newli2.appendChild(newdiv3);
	    newli2.appendChild(newdiv5);
	    last_li[0].appendChild(newli2);
	    console.log(newli2);
	}
	else{
    	console.log(count);
		//第一題問題
		if (count == 1){
			nowdata[2] = "我已經很努力讀書了，但還是達不到爸媽的期望，怎麼辦...";

			//建立robot-reply輸入的div
		    var newli2 = document.createElement('li');
		    newli2.className = "mar-btm";
		    var newdiv3 = document.createElement('div');
		    newdiv3.className = "media-left";
		    var newdiv4 = document.createElement('div');
		    newdiv4.className = "speech";
		    var img = document.createElement('img');
		    img.src = "./img/cat.png";
		    img.className = "img-circle img-sm";
		    img.alt = "Profile Picture";
		    var newdiv5 = document.createElement('div');
		    newdiv5.className = "media-body pad-hor";
		    var RobotReply = document.createElement('p');
		    //RobotP先寫死
		    RobotReply.innerHTML = reply[ranN];

		    newdiv4.appendChild(RobotReply);
		    newdiv5.appendChild(newdiv4);
		    newdiv3.appendChild(img);
		    newli2.appendChild(newdiv3);
		    newli2.appendChild(newdiv5);
		    last_li[0].appendChild(newli2);
		    //console.log(newli2);

	    	var RobotP = document.createElement('p');
     		RobotP.innerHTML = question[ranQ];
			nowQuest.push(ranQ);

	    	newdiv4.appendChild(RobotP);
		    newdiv5.appendChild(newdiv4);
		    newdiv3.appendChild(img);
		    newli2.appendChild(newdiv3);
		    newli2.appendChild(newdiv5);
		    last_li[0].appendChild(newli2);
		}
		else{
			do{
				var ranQ = Math.floor(Math.random() * 34) + 1;
			}
			while(nowQuest.indexOf(ranQ)!=-1){
				//建立robot-reply輸入的div
			    var newli2 = document.createElement('li');
			    newli2.className = "mar-btm";
			    var newdiv3 = document.createElement('div');
			    newdiv3.className = "media-left";
			    var newdiv4 = document.createElement('div');
			    newdiv4.className = "speech";
			    var img = document.createElement('img');
			    img.src = "./img/cat.png";
			    img.className = "img-circle img-sm";
			    img.alt = "Profile Picture";
			    var newdiv5 = document.createElement('div');
			    newdiv5.className = "media-body pad-hor";
			    var RobotReply = document.createElement('p');
			    //RobotP先寫死
			    RobotReply.innerHTML = reply[ranN];

			    newdiv4.appendChild(RobotReply);
			    newdiv5.appendChild(newdiv4);
			    newdiv3.appendChild(img);
			    newli2.appendChild(newdiv3);
			    newli2.appendChild(newdiv5);
			    last_li[0].appendChild(newli2);
			    //console.log(newli2);

		    	var RobotP = document.createElement('p');

			    newdiv4.appendChild(RobotP);
			    newdiv5.appendChild(newdiv4);
			    newdiv3.appendChild(img);
			    newli2.appendChild(newdiv3);
			    newli2.appendChild(newdiv5);
			    last_li[0].appendChild(newli2);

				RobotP.innerHTML = question[ranQ];
				nowQuest.push(ranQ);
			}
		}
	}

	//將nowdata存入資料庫
	$.ajax({
		type:"POST",
		url:"php/savechat.php",
		data:{"nowdata":nowdata},
		success:function(){
			// alert("儲存成功");
		},
		error:function(){
			// alert("發生錯誤 狀態:"+jqXHR.readyState+"  "+jqXHR.status);
		},
	});

	//清空使用者textinput
	document.getElementById('userInput').value = ""
	
	//滾輪保持在最底端
    var div = document.getElementById('scrolldIV');
    div.scrollTop = 1000000000;

	nowdata[2] = question[ranQ];
}