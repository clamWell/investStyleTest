$(function(){
	var ieTest = false,
		screenWidth = $(window).width(),
		screenHeight = $(window).height(),
		imgURL = "http://img.khan.co.kr/spko/storytelling/2020/massmedia/",
		isMobile = screenWidth <= 800 && true || false,
		isNotebook = (screenWidth <= 1300 && screenHeight < 750) && true || false,
		isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
	var randomRange = function(n1, n2) {
		return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
	};
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		checkIfProgressOverflow(screenWidth);
    });


	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})

	function checkIfProgressOverflow(sw){
		if(sw<1200){
			$(".fixed-navi").stop().animate({"opacity":"0.2", "z-index":"-1"}, 300);

		}else{
			$(".fixed-navi").stop().animate({"opacity":"1","z-index":"1"}, 300);
		}
	}

    var ieUnder = false;
    function checkIe(){ 
        var word; 
        if (navigator.userAgent.indexOf("MSIE") >= 0) {
            console.log("ieUNDER 10");
            ieUnder = true;
            return true;
        }else {
            return false;
        }
    } 
    checkIe();


	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/

	/*
	$(".aniOb").css({"opacity":0});
	$(".line").animate({"opacity":1, "width":"80%"}, 1200, "easeInOutCubic");
	$(".building").delay(300).animate({"opacity":1, "bottom":"0"}, 1200, "easeInOutCubic");
	$(".chart").delay(600).animate({"opacity":1}, 1200, "easeInOutCubic");
	$(".coin").delay(900).animate({"opacity":1, "right":"-100px"}, 1200, "easeInOutCubic");
	$(".person").delay(1200).animate({"opacity":1, "bottom":"0"}, 1200, "easeInOutCubic");
	$(".money--1").delay(1500).animate({"opacity":1, "left":"35%"}, 1200, "easeOutElastic");
	$(".money--2").delay(1800).animate({"opacity":1, "left":"60%"}, 1200, "easeOutElastic");
	$(".money--3").delay(2100).animate({"opacity":1, "left":"35%"}, 1200, "easeOutElastic");
	$(".money--4").delay(2400).animate({"opacity":1, "left":"30%"}, 1200, "easeOutElastic")*/
	
	$(".aniOb").find("img").css({"opacity":0});
	$(".ant--01").find("img").animate({"opacity":1, "top":"0px"}, 800, "easeInOutCubic");
	$(".ant--02").find("img").delay(200).animate({"opacity":1, "top":"0px"}, 1200, "easeInOutCubic");
	$(".ant--03").find("img").delay(400).animate({"opacity":1, "top":"0px"}, 1200, "easeInOutCubic");
	$(".ant--04").find("img").delay(800).animate({"opacity":1, "top":"0px"}, 1200, "easeInOutCubic");
	$(".ant--05").find("img").delay(1000).animate({"opacity":1, "top":"0px"}, 1200, "easeInOutCubic");

	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/


	/*								*/
	/*------  MAKE QUERY	    -----*/
	/*								*/
	var queData = [
	  {
		"que": "‘원금 보장’이 되는 예적금을 선호한다.",
		"type": "t1",
		"qi": "1",
		"name": "돼지저금통형"
	  },
	  {
		"que": "주식 투자는 ‘원금 손실 가능성’이 있어 선호하지 않는다.",
		"type": "t1",
		"qi": "2",
		"name": "돼지저금통형"
	  },
	  {
		"que": "주식하는 사람들 보면 ‘저러다 망하지 않을까’ 걱정된다.",
		"type": "t1",
		"qi": "3",
		"name": "돼지저금통형"
	  },
	  {
		"que": "수익율이 아주 낮더라도 ‘안전한’ 금융 상품이 좋다.",
		"type": "t1",
		"qi": "4",
		"name": "돼지저금통형"
	  },
	  {
		"que": "‘주변’에서 흔히 말하는 요즘 ‘핫한 주식’을 선호한다.",
		"type": "t2",
		"qi": "1",
		"name": "친구따라테슬라형"
	  },
	  {
		"que": "직접 기업의 재무제표나 산업 조사를 하지 않고 ‘지인의 추천’을 따른다.",
		"type": "t2",
		"qi": "2",
		"name": "친구따라테슬라형"
	  },
	  {
		"que": "주식을 잘 아는 ‘지인’이나 주변인에게 조언을 자주 구한다.",
		"type": "t2",
		"qi": "3",
		"name": "친구따라테슬라형"
	  },
	  {
		"que": "남들이 좋다는 주식에 쉽게 솔깃한다.",
		"type": "t2",
		"qi": "4",
		"name": "친구따라테슬라형"
	  },
	  {
		"que": "회사의 재무제표, 산업 동향 등을 ‘철저히 분석해’ 종목을 고르는 편이다.",
		"type": "t3",
		"qi": "1",
		"name": "존리주의자형"
	  },
	  {
		"que": "누구나 아는 우량주보다 아직 알려지지 않은 ‘저평가된 주식을 발굴’하는 것이 좋다.",
		"type": "t3",
		"qi": "2",
		"name": "존리주의자형"
	  },
	  {
		"que": "가치주에 장기투자하는 것을 선호한다.",
		"type": "t3",
		"qi": "3",
		"name": "존리주의자형"
	  },
	  {
		"que": "일시적으로 주가가 떨어지는 것 같아도 내가 산 종목에 확신이 있기에 쉽게 흔들리지 않는다.",
		"type": "t3",
		"qi": "4",
		"name": "존리주의자형"
	  },
	  {
		"que": "기업 분석 결과보다는 차트의 ‘모양’을 보고 투자하는 것을 선호한다.",
		"type": "t4",
		"qi": "1",
		"name": "차트읽는화가형"
	  },
	  {
		"que": "장기투자보다 차트 상의 단기저점과 고점을 보고 매도매수시점을 정하는 편이다.",
		"type": "t4",
		"qi": "2",
		"name": "차트읽는화가형"
	  },
	  {
		"que": "차트의 모양을 보면 언제 매도매수를 해야 할지 감이 온다.",
		"type": "t4",
		"qi": "3",
		"name": "차트읽는화가형"
	  },
	  {
		"que": "기업의 장기 비전, 가치를 보고 투자하기보단 지금 돈이 모이는 곳에 투자하는 편이다.",
		"type": "t4",
		"qi": "4",
		"name": "차트읽는화가형"
	  },
	  {
		"que": "인간의 판단은 믿을 수 없다. 오로지 계량화된 숫자(데이터)를 믿는다.",
		"type": "t5",
		"qi": "1",
		"name": "인간불신수학자형"
	  },
	  {
		"que": "다년간의 수익률 등 데이터를 기반으로 ˙백테스팅˙을 거쳐 종목을 선정한다. <span class='des'>*백테스팅: 자신이 만든 투자전략의 과거 성과가 어땠는지를 확인하는 작업</span>",
		"type": "t5",
		"qi": "2",
		"name": "인간불신수학자형"
	  },
	  {
		"que": "수학과 통계를 바탕으로 매매 전략, 알고리즘을 만들고 이를 기반으로 투자한다.",
		"type": "t5",
		"qi": "3",
		"name": "인간불신수학자형"
	  },
	  {
		"que": "나의 감이 외쳐도 데이터로 검증되지 않으면 매도, 매수하지 않는다.",
		"type": "t5",
		"qi": "4",
		"name": "인간불신수학자형"
	  },
	  {
		"que": "삼성전자, 네이버, 카카오 등 잘 알려진 우량 기업 위주로 투자한다.",
		"type": "t6",
		"qi": "1",
		"name": "삼성전자믿어요형"
	  },
	  {
		"que": "주식 장이 폭락해도 누구나 알만한 대기업에 투자하면 손해는 안 볼 것이라 생각한다.",
		"type": "t6",
		"qi": "2",
		"name": "삼성전자믿어요형"
	  },
	  {
		"que": "개별 종목에 투자하기보다, ETF나 인덱스펀드에 투자해 리스크를 줄이는 것이 낫다.",
		"type": "t6",
		"qi": "3",
		"name": "삼성전자믿어요형"
	  },
	  {
		"que": "저금리 시대엔 예금보다는 주식이 낫지만, 그래도 안전한 우량주 등에 투자하는 걸 선호한다.",
		"type": "t6",
		"qi": "4",
		"name": "삼성전자믿어요형"
	  },
	  {
		"que": "하루, 이틀 이내의 초단기 매매로 차익을 보는 것을 선호한다.",
		"type": "t7",
		"qi": "1",
		"name": "하루살이5%족형"
	  },
	  {
		"que": "하루에 단돈 몇 만원만 벌어도 목표 수익률만 달성하면 곧바로 매도한다.",
		"type": "t7",
		"qi": "2",
		"name": "하루살이5%족형"
	  },
	  {
		"que": "어제보다 오늘, 아침보다 오후에 주가가 올랐다면 팔아서 수익을 내야 한다 생각한다.",
		"type": "t7",
		"qi": "3",
		"name": "하루살이5%족형"
	  },
	  {
		"que": "박리다매 정신으로 하루의 1%씩 수익을 내도, 자주 내는 것이 낫다고 생각한다.",
		"type": "t7",
		"qi": "4",
		"name": "하루살이5%족형"
	  }
	];
	
	function shuffle(a) { 
		var j, x, i; 
		for (i = a.length; i; i -= 1) { 
			j = Math.floor(Math.random() * i);
			x = a[i - 1];
			a[i - 1] = a[j];
			a[j] = x; 
		} 
	
	}
	shuffle(queData);

	function makeQueList(){
		var $queListBody = $("#TEST_QUE_LIST");
		$queListBody.html("");
		var data = queData;
		for(d=0;d<data.length;d++){
			var i = d+1; 
			var queString = "que_"+i;
			var template = "<li data-que-type='"+data[d].type+"' data-que-typeIndex='"+data[d].qi+"'><p class='each-que-lead'><span class='numbering'>"+i+"</span><span class='que'>"+data[d].que+"</span></p><div class='radioBtn-holder'><ul class='anw-holder'><li class='each-scale scale-1'><input type='radio' id='"+queString+"_answer_1' class='radio-hidden' name='"+queString+"_answer' value='1'><label class='anw-button' for='"+queString+"_answer_1'></label><span class='text-label'>매우 그렇지 않다</span></li><li class='each-scale scale-2'><input type='radio' id='"+queString+"_answer_2' class='radio-hidden' name='"+queString+"_answer' value='2'><label class='anw-button' for='"+queString+"_answer_2'></label><span class='text-label'>그렇지 않다</span></li><li class='each-scale scale-4'><input type='radio' id='"+queString+"_answer_4' class='radio-hidden' name='"+queString+"_answer' value='4'><label class='anw-button' for='"+queString+"_answer_4'></label><span class='text-label'>그렇다</span></li><li class='each-scale scale-5'><input type='radio' id='"+queString+"_answer_5' class='radio-hidden' name='"+queString+"_answer' value='5'><label class='anw-button' for='"+queString+"_answer_5'></label><span class='text-label'>매우 그렇다</span></li></ul></div></li>";
			
			$queListBody.append(template);
		}

	};
	makeQueList();



	/*								*/
	/*------  MAKE QUERY	    -----*/
	/*								*/

	
	function dataRevising(){
		investStyleData.map(function(v,i,a){
			if( a[i].type !== "average"){
				var desc2AsArray = a[i]["desc2"].split("-");
				if (desc2AsArray[0]==""){ desc2AsArray.shift(); }
				a[i].desc2Arr = desc2AsArray;

				var desc1AsArray = a[i]["desc"].split("-");
				if (desc1AsArray[0]==""){ desc1AsArray.shift(); }
				a[i].desc1Arr = desc1AsArray;

				var descMindAsArray = a[i]["descMind"].split("-");
				if (descMindAsArray[0]==""){ descMindAsArray.shift(); }
				a[i].descMindArr = descMindAsArray;
			}
			
		});

		//console.log(investStyleData);
	}
	dataRevising();


	/*								*/
	/*------    QUERY CLICK     -----*/
	/*								*/

	var clickedQueIndex = null; //사용자가 클릭한 질문의 인덱스
	var totalClickCount = 0;
	var userQueryChoiceArray;
    var typeNameArr = ["돼지저금통형", "친구따라테슬라형", "존리주의자형", "차트읽는화가형", "인간불신수학자형", "삼성전자믿어요형", "하루살이5%족형"];
	userStyleChoiceArray = {
		"t1": [0,0,0,0],
		"t2": [0,0,0,0], 
		"t3": [0,0,0,0],
		"t4": [0,0,0,0],
		"t5": [0,0,0,0],
		"t6": [0,0,0,0],
		"t7": [0,0,0,0]	
	};
	var userTypeGlobal;
	var totalQueLength = 28;
	function pushUserChoice(queStyleType, queStyleTypeIndex, clickedValue){
		var qt = String(queStyleType);
		var qti = queStyleTypeIndex*1-1
		if(userStyleChoiceArray[qt][qti] == 0){
			totalClickCount++;
			adjustBottomProgress(totalClickCount);
			if(totalClickCount == totalQueLength){
				//showTestPlusDescBtn();
				showEndTestBtn();
			}

		}
		userStyleChoiceArray[qt][qti] = clickedValue;
		//console.log(userStyleChoiceArray);
	}
    
    function checkUserScore(){
        var userTypeScore = [];
        for (var key in userStyleChoiceArray) {
            if (userStyleChoiceArray.hasOwnProperty(key)) {
                var q1 = userStyleChoiceArray[key][0];
                var q2 = userStyleChoiceArray[key][1];
				var q3 = userStyleChoiceArray[key][2];
				var q4 = userStyleChoiceArray[key][3];
                var tempObj = {};
                tempObj.type = key;
                tempObj.score = (q1*1+q2*1+q3*1+q4*1);
                userTypeScore.push(tempObj)
            }
        }
        var userType = checkTypeByScore(userTypeScore);
        //console.log(userTypeScore);
        if(userType.length == 1){ //한가지타입만 나온 것
            showResult(userType);
        }else{ //여러가지 타입이 나옴
			makeUserSelectCard(userType);
		}
    }


    function checkTypeByScore(arr){
        var maxScore = Math.max.apply(Math, arr.map(function(o) { return o.score; }));
        console.log("최대점수는 "+ maxScore)
        var userType = [];
        for (u=0;u<arr.length;u++){
            if(arr[u].score == maxScore){
                userType.push(arr[u].type)
            }
        }
        //console.log(userType);
        return userType;
    }


	function adjustBottomProgress(count){
		$(".bottom-fixed-bar .progress-bar .progress-text p .done").html( count );
		$(".bottom-fixed-bar .progress-bar .progress-body").animate({"width":100/totalQueLength*count+ "%"}, 400, "swing");
	};

	
	function showTestPlusDescBtn(){
		$(".plus-desc").removeClass("plus-desc-block");
	};

	function showEndTestBtn(){
		$("#BT_STEP_03").removeClass("btn-holder-block");
	}

	$(".test-form-invest-style .each-scale .anw-button").on("click", function(e){
		var $clickedQue = $(this).parent(".each-scale").parent(".anw-holder").parent(".radioBtn-holder").parent("li");	
		
		//사용자 입력값 반영하기
		var queStyleType = $clickedQue.attr("data-que-type");
		var queStyleTypeIndex = $clickedQue.attr("data-que-typeIndex");
		//var isQueIndexOdd = ( $clickedQue.index()%2 == 0 )? 0 : 1;
		var clickedValue = $(this).siblings(".radio-hidden").attr("value");
		pushUserChoice(queStyleType, queStyleTypeIndex, clickedValue);
		//사용자 입력값 반영하기

		// 자동 스크롤 조정
		var quePos = $clickedQue.position().top;
		var clickDir;
		if( clickedQueIndex == null){ //first click
			clickedQueIndex = $clickedQue.index();
		}else if(clickedQueIndex == $clickedQue.index()){ //click same
			clickDir = "same";
			console.log(clickDir);
		}else if(clickedQueIndex !== $clickedQue.index()){
			if( clickedQueIndex < $clickedQue.index()){
				clickDir = "down";
			}else{
				clickDir = "up";
			}
			queryScrollAuto(clickDir, quePos);
			clickedQueIndex = $clickedQue.index();
		}
		// 자동 스크롤 조정

	});

	
	function queryScrollAuto(dir, quePos){
		if(dir=="down"){
			$("html, body").animate({scrollTop: quePos }, 500, "swing");
		}else{
			$("html, body").animate({scrollTop: quePos - ( $("#TEST_QUE_LIST li").height())}, 500, "swing");
		}
	};

	/*								*/
	/*------    QUERY CLICK     -----*/
	/*								*/


	/*								*/
	/*------  STEP FUNCTION	 ------*/
	/*								*/
	
	var userTestAttend = false;
	var userCheckFinance = false; 
	var userSkipTest = false; 

	function startTest(){
		userTestAttend = true;
		$("#BT_STEP_01").slideUp();
		$(".test--afterIntro").slideDown(1000);
		var movePos = $(".test--afterIntro").offset().top-250;
		$("html, body").animate({scrollTop: movePos}, 1000, "easeInOutCubic");
	}	
	
	function openCheckFinanceBox(){
		userCheckFinance = true;
		$("#BT_STEP_02").slideUp();
		$(".plus-desc").addClass("plus-desc-off");
		$(".check-finance-info").slideDown(1000);
		var movePos = $(".check-finance-info").offset().top-150;
		$("html, body").animate({scrollTop: movePos}, 1000, "easeInOutCubic");
	}


	function endTest(){
		if( userCheckFinance == true){
			console.log("금융정보입력함")
		}else{
			console.log("금융정보입력안함")
		}
		console.log("테스트를 마침");
        checkUserScore();
	};

	function makeUserSelectCard(userType){
		console.log(userType);

		var userTypeLength = userType.length;
		if(userTypeLength<=2){
			$(".user-select-card-list ul").addClass("col-2");
		}else if(userTypeLength>2&&userTypeLength<=4){
			$(".user-select-card-list ul").addClass("col-4");
		}else if(userTypeLength>4&&userTypeLength<=6){
			$(".user-select-card-list ul").addClass("col-6");
		}else if(userTypeLength>6){
			$(".user-select-card-list ul").addClass("col-7");
		}

		$(".user-select-card-list ul").html("");
		for(u=0;u<userType.length;u++){
			var userTypeNumber = (userType[u].replace("t", ""))*1;
			var typeName = typeNameArr[userTypeNumber-1];
			$(".user-select-card-list ul").append("<li data-invest-type='"+userTypeNumber+"'><div class='select-card'><div class='thumb'><img src='img/type-thumb-"+userTypeNumber+".png' alt=''></div><p class='type-name'>" + typeName + "</p></div></li>");
		}
		showUserSelect();
	};	

	function showUserSelect(){
		$(".test--afterIntro").fadeOut(1000, function(){
			$("#INVEST_STYLE_RESULT").fadeIn(1000);
			$(".user-result-select").show();
			var movePos = $("#INVEST_STYLE_RESULT").offset().top;
			$("html, body").animate({scrollTop: movePos}, 1000, "easeInOutCubic", function(){
				
			});
		});
	};


	function fillResult(data){
		var data = data; 
		console.log(data);
		userTypeGlobal = data["type"];

		$(".test-result .type-name").html( data["name"]);
		$(".test-result .ment-strong").html( data["descStrong"]);

		/*
		$(".test-result .style-desc").find("p").html( data["desc"]);
        if(data["desc2"] !== null){
            $(".test-result .style-desc-2").show();
            $(".test-result .style-desc-2").find("p").html( data["desc2"] );
        }else{
            $(".test-result .style-desc-2").hide();
            $(".test-result .style-desc-2").find("p").html("");
        }*/

		$(".desc-type-1").find(".style-desc").html("");
		data["descMindArr"].map(function(v,i,a){
			$(".desc-type-1").find(".style-desc").append("<p>"+ a[i]+"</p>");
		});

		
		$(".interview-desc").find(".word").html( data["interview"]);
		$(".interview-desc").find(".interviewee").html( data["interviewee"]);

		$(".desc-type-3").find(".style-desc-2").html("");
		data["desc2Arr"].map(function(v,i,a){
			$(".desc-type-3").find(".style-desc-2").append("<p>"+ a[i]+"</p>");
		});

        var userTypeNumber = data["type"].replace("t", "");

		$(".test-result .totlaRatio").find(".value").html( data["totalRatio"]+"%");
         $(".test-result .type-thumb").find("img").attr("src", "img/type-thumb-"+userTypeNumber+".png"); //추후 변경해야함
 
		
		$(".test-result .gender-desc").find(".male").html(data["male"]+"%");
		$(".test-result .gender-desc").find(".female").html(data["female"]+"%");
		$("#POLE_GENDER .stack-male").find(".value").html(data["male"]);
		$("#POLE_GENDER .stack-female").find(".value").html(data["female"]);
		$("#POLE_GENDER .stack-male").css({"width":data["male"]+"%"});
		$("#POLE_GENDER .stack-female").css({"width":data["female"]+"%"});

		$(".test-result .house-desc").find(".nohouse").html(data["noHouse"]+"%");
		$(".test-result .house-desc").find(".hashouse").html(data["hasHouse"]+"%");
		$("#POLE_HOUSE .stack-nohouse").find(".value").html(data["noHouse"]);
		$("#POLE_HOUSE .stack-hashouse").find(".value").html(data["hasHouse"]);
		$("#POLE_HOUSE .stack-nohouse").css({"width":data["noHouse"]+"%"});
		$("#POLE_HOUSE .stack-hashouse").css({"width":data["hasHouse"]+"%"});
		drawPoleGraph("wage", data);
		drawPoleGraph("asset", data);

		$(".test-result .savingInvest-desc").find(".saving.value").html(data["avrSaving"]+"%");
		$(".test-result .savingInvest-desc").find(".invest.value").html(data["avrInvest"]+"%");
		//drawLineChartDiv("invest", data["name"], data["avrInvest"]);
		//drawLineChartDiv("saving", data["name"], data["avrSaving"]);
		$("#LINE_CHART_SAVING_INVEST").find(".el--saving").css({"width":data["avrSaving"]+"%"});
		$("#LINE_CHART_SAVING_INVEST").find(".el--invest").css({"width":data["avrInvest"]+"%"});
		$("#LINE_CHART_SAVING_INVEST").find(".el--saving").find(".value").html(data["avrSaving"]+"%");
		$("#LINE_CHART_SAVING_INVEST").find(".el--invest").find(".value").html(data["avrInvest"]+"%");

		$(".test-result .que1-desc").find(".value").html(data["que1"]+"%");
		$(".test-result .que2-desc").find(".value").html(data["que2"]+"%");
		$(".test-result .que3-desc").find(".value").html(data["que3"]+"%");
		if(data["que1"]*1 < 42.8){
			$(".test-result .que1-desc").find(".islow").html("낮습니다.");
		}else{
			$(".test-result .que1-desc").find(".islow").html("높습니다.");
		}

		if(data["que2"]*1 < 34.5){
			$(".test-result .que2-desc").find(".islow").html("낮습니다.");
		}else{
			$(".test-result .que2-desc").find(".islow").html("높습니다.");
		}

		if(data["que3"]*1 < 22.2){
			$(".test-result .que3-desc").find(".islow").html("낮습니다.");
		}else{
			$(".test-result .que3-desc").find(".islow").html("높습니다.");
		}
	}

	function showResult(userType, onlyResult){
		var onlyResult = onlyResult || false;
		var userTypeNumber = (userType[0].replace("t", ""))*1;
		var userTypeData = investStyleData[userTypeNumber-1];
		fillResult(userTypeData);
		sendUserSelectToCount(userTypeData);
		if(onlyResult==true){
			$("#INVEST_STYLE_RESULT").show();
			printResultArea();
		}else{
			$(".test--afterIntro").fadeOut(1000, function(){
				$("#INVEST_STYLE_RESULT").show();
				printResultArea();
			});
		}
		
	}

	function printResultArea(){
		$(".test-result").show();
		var movePos = $("#INVEST_STYLE_RESULT").offset().top;
		$("html, body").animate({scrollTop: movePos}, 800, "easeInOutCubic", function(){
			$(".type-name").removeClass("type-name-zoom");
            Slider.setSlider();
			$("#TEST_PAGE_SPLIT_VER .art-banner").show();
			$(".all-type-list").css({"opacity":"1"});
		});
	}

	function SkipAllTest(){
		userSkipTest = true;
		//$("#MILL_COGNI_RESULT").slideDown(1000);
		var movePos = $("#MILL_COGNI_RESULT").offset().top;
		$("html, body").animate({scrollTop: movePos}, 1000, "easeInOutCubic");

	}

	function backToInteractiveMain(){
		parent.location.href = "http://news.khan.co.kr/kh_storytelling/2020/2030-invest-report/";
	}
	function goToTestPage(){
		parent.location.href = "http://news.khan.co.kr/kh_storytelling/2020/2030-invest-report/test.html";
	}
	
	$("#GO_TEST_BTN").on("click", function(){ //투자유형테스트로이동
		//startTest();
		//goToTestPage();
	});

	$("#PUT_FINANCE_INFO").on("click", function(){ //사용자금융현황입력로 이동
		openCheckFinanceBox();
	});

	$("#END_TEST_BTN").on("click", function(){ //결과 바로가기
		endTest();
	});

	$("#END_TEST_BTN_RANDOM").on("click", function(){ //개발용 결과 바로가기
		var rn = randomRange(1,7);
		var randomtype = "t"+rn;
		var userType = [];
		userType.push(randomtype);
		showResult(userType);
	});

	$("#SKIP_FINANCE_BTN").on("click", function(){ //금융현황입력하지않고 결과로 바로가기
		endTest();
	});

	$("#SKIP_TEST_BTN").on("click", function(){ //투자유형테스트 건너뜀
		SkipAllTest();
	});
	$("#BACK_TO_INT_MAIN, #BACK_TO_INT_MAIN_FOOTER").on("click", function(){ //투자유형테스트 건너뜀
		//backToInteractiveMain();
	});

	$("#RE_TEST_BTN").on("click", function(){ //투자유형테스트 건너뜀
		goToTestPage();
	});


	$(".user-select-card-list ul").on("click", "li", function(){ //여러 유형 결과 중 하나 선택
		var userSelectInvestType =  $(this).attr("data-invest-type");
		var userTypeData = investStyleData[userSelectInvestType-1];
		$(".user-result-select").hide();
		fillResult(userTypeData);
		sendUserSelectToCount(userTypeData);
		printResultArea();
	});




	$(".link-copy-btn").on("click", function(e){ // 링크 복사
		e.preventDefault();
		var userTypeGlobalN =userTypeGlobal.replace("t", "");
		var url = "http://news.khan.co.kr/kh_storytelling/2020/2030-invest-report/result.html?type=" + userTypeGlobalN + "&fbrefresh=NOT_SEEN_BEFORE"

		var tempElem = document.createElement('textarea');
		tempElem.value = url;
		document.body.appendChild(tempElem);
		tempElem.select();
		tempElem.setSelectionRange(0, 99999);
		document.execCommand("copy");
		document.body.removeChild(tempElem);

		alert("링크를 클립보드에 복사했습니다.");

	});
	/*								*/
	/*------  STEP FUNCTION	 ------*/
	/*								*/



	/*								*/
	/*       ALL TYPE SLIDER        */
	/*								*/

	var Slider = {},
		baseWidth = null,
		$Base = $(".slider-body ul li");
    Slider.itemNumb = $Base.length;
    Slider.setSlider = function(){
		if(isMobile==true){
			$(".gallery-slider .slider-wrapper").css({"height": (screenWidth*3/4)+"px"});
			$Base.css({"width": $(".slider-body").width(), "height": (screenWidth*3/4)+"px"});
			baseWidth = $(".slider-body").width();
		}else{
			baseWidth = $Base.width();
		}	
		$(".slider-body ul").css({"width":Slider.itemNumb*baseWidth });
		$Base.eq(0).addClass("slider-item-on");
	};

	Slider.index = 0;
	Slider.moveSlide = function(drct){
		if(drct=="prev"){ // 이전
			if(Slider.index==0){}
			else if(Slider.index>0){
				Slider.index -=1;
				var moving = baseWidth*Slider.index;
				$(".slider-body ul").stop().animate({"left":-moving}, 500,"easeOutCubic");
				$Base.removeClass("slider-item-on");
				$Base.eq(Slider.index).addClass("slider-item-on");
			}

		}else if(drct=="next"){ // 다음
			if(Slider.index==Slider.itemNumb-1 ){}
			else if(Slider.index<Slider.itemNumb-1 ){
				Slider.index +=1;
				var moving = baseWidth*Slider.index;
				$(".slider-body ul").stop().animate({"left":-moving}, 500,"easeOutCubic");
				$Base.removeClass("slider-item-on");
				$Base.eq(Slider.index).addClass("slider-item-on");
			}

		}
		$(".arrow").removeClass("arrow-block");
	}

	$(".arrow").on("click", function(e){
		$(".arrow").addClass("arrow-block");
		e.preventDefault();
		var drct = $(this).attr("id");
		Slider.moveSlide(drct);
	});
	/*								*/
	/*       ALL TYPE SLIDER        */
	/*								*/

	

	/*								*/
	/*       D3 CHART FUNCTION      */
	/*								*/

	var greenColorRange = ["#00813f", "#029449", "#2ea066", "#4d7e65","#6c9982","#81ae97","#91bfa8"];

	/***  PIE CHART ***/
	var data_per_each_type = [{"name":"돼지저금통형", "per":50.9},{"name":"친구따라테슬라형", "per":17.3},{"name":"존리주의자형", "per":30.7},{"name":"차트읽는화가형", "per":26.1},{"name":"인간불신수학자형", "per":33},{"name":"삼성전자믿어요형", "per":43.8},{"name":"하루살이5%족형", "per":26.4}]; 
	var arc;
	function drawPieChart(){
		var data = data_per_each_type;
		var width = (isMobile==true)? (screenWidth-60): 350;
		var height = width;
		var svgBody = d3.select("#PIE_EACH_TYPE")
			.attr("width", width)
			.attr("height", height)
		var pieChartHolder = svgBody.append("g")
			.attr("class", "pie-chart")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		var color = d3.scaleOrdinal(greenColorRange);
		var radius = Math.min(width, height) * 0.5;
		var pie = d3.pie()
			.sort(null)
			.value(function(d) {return d.per;});
	
		var path = d3.arc()
			.outerRadius(radius - 10)
			.innerRadius(50)
			.cornerRadius(0);

		var label = d3.arc()
			.outerRadius(radius - 40)
			.innerRadius(radius - 40);

		arc = pieChartHolder.selectAll(".arc")
			.data(pie(data))
			.enter().append("g")
			.attr("class", "arc");
		arc.style("opacity","0");

		var pathArea = arc.append("path")
			.attr("class","arc-path")
			.attr("d", path)
			.attr("id", function(d, i) {
				return "arc-"+i;
			})
			.style("fill-opacity", "0.8")
			.style("fill", function(d) {return color(d.data["name"]);})
			.attr("data", function(d) {
				d.data["percentage"] = ((d.endAngle - d.startAngle) / (2 * Math.PI) * 100).toFixed(1);
				return JSON.stringify(d.data);
			});
		pathArea.on("mouseenter", function(d) {
			d3.selectAll(".arc-path")
				.style("fill-opacity", "0.7");
			d3.selectAll(".arc-label")
				.style("fill-opacity", "0.5");
			d3.select(this)
				.style("fill-opacity", "1")
				.style("stroke","#111")
				.style("stroke-width","2")
				.style("stroke-dasharray","3")
				.style("stroke-opacity","0.8")
			d3.select(this.parentNode).selectAll(".arc-label")
				.style("fill-opacity", "1");
		}).on("mouseleave", function(d){
			d3.selectAll(".arc-path")
				.style("fill-opacity", null)
				.style("stroke",null)
				.style("stroke-width",null)
				.style("stroke-dasharray",null)
				.style("stroke-opacity",null)
			d3.selectAll(".arc-label")
				.style("fill-opacity",null)
		});
		arc.append("text")
			.attr("transform", function(d) {return "translate(" + label.centroid(d) + ")";})
			.attr("dy", "-0.5em")
			.style("fill-opacity","0.7")
			.attr("class","arc-label")
			.text(function(d) { return d.data.name + " "+d.data.per+"%"; });
	};



	/***  POLE CHART - 소득, 자산 ***/
	/*
	var data_wage_each_type = [{"name":"돼지저금통형", "value":274},{"name":"친구따라테슬라형", "value":288},{"name":"존리주의자형", "value":321},{"name":"차트읽는화가형", "value":235},{"name":"인간불신수학자형", "value":331},{"name":"삼성전자믿어요형", "value":210},{"name":"하루살이5%족형", "value":292}]; 
	var user_data_wage = {"name":"나", "value": 424}; // 사용자의 데이터 값은 나중에 입력되야함 

	var data_asset_each_type = [{"name":"돼지저금통형", "value":3552},{"name":"친구따라테슬라형", "value":6741},{"name":"존리주의자형", "value":5680},{"name":"차트읽는화가형", "value":5871},{"name":"인간불신수학자형", "value":10231},{"name":"삼성전자믿어요형", "value":3910},{"name":"하루살이5%족형", "value":7629}]; 
	var user_data_asset = {"name":"나", "value": 8700};

	data_wage_each_type.unshift(user_data_wage);
	data_asset_each_type.unshift(user_data_asset);*/
	
	var wageKeyGroup = ["200만원 미만", "200~300만원 미만", "300~400만원 미만", "400~500만원 미만", "500~600만원 미만", "600~700만원 미만", "700만원 이상", "없음"];
	var assetKeyGroup = ["없음", "1000만원 미만", "1000만~5000만원 미만", "5000만~1억원 미만", "1억~2억원 미만", "2억~3억원 미만", "3억~5억원 미만", "5억원 이상"];

	function drawPoleGraph(graphType, userData){
		var data = [];
		if(graphType == "wage"){
			var dataArr = userData["avrWage"].split(",");
			dataArr.map(function(v,i,a){
				var tempObj = {};
				tempObj.name = wageKeyGroup[i];
				tempObj.value = (a[i].replace(" ",""))*1;
				data.push(tempObj);
			})

		}else if(graphType == "asset"){
			var dataArr = userData["avrAsset"].split(",");
			dataArr.map(function(v,i,a){
				var tempObj = {};
				tempObj.name = assetKeyGroup[i];
				tempObj.value = (a[i].replace(" ",""))*1;
				data.push(tempObj);
			})
		}
		//console.log(data);

		var width =  (isMobile==true)? (screenWidth-160) : 600; 
		var barHeight = 25;
		var barMargin = 5;
		var height = ((barHeight+ barMargin)*data.length);
		var Values = data.map(function(d) {
		  return d.value;
		});
		var maxValue = d3.max(Values);
		
		var maxValueKey;   /// 설명문에 반영해줄 것
        for (m=0;m<data.length;m++){
            if(data[m].value == maxValue){
                maxValueKey = data[m].name;
            }
        }
		$("."+graphType+"-desc").find(".value").html(maxValueKey);/// 설명문에 반영?

		var color = d3.scaleOrdinal(greenColorRange);
 		var multipleKey =  width / maxValue;
		var labelWidth = (isMobile==true)? 8:15;
		var svgBody;
		if(graphType == "wage"){
			svgBody = d3.select("#POLE_EACH_TYPE_1");
		}else if(graphType == "asset"){
			svgBody = d3.select("#POLE_EACH_TYPE_2");
		}

		svgBody.attr("width", width)
			.attr("height", height)
			//.attr("transform", "translate("+ ( (isMobile==true)? 40 : 0) +", 0)");

		var poleHolder = svgBody.append("g")
			.attr("class", "pole-graph");
	
		var GraphBarHolder = poleHolder.selectAll("g")
				.data(data)
				.enter().append("g")
				.attr("transform", function(d, i) { 
					return "translate(0," + i * (barHeight + barMargin) + ")";
				});

		GraphBarHolder.append("rect")
				.attr("fill", function(d) {
					if(d.name=="나"){
						return "#00bb5b";
					}else{
						return color(d.name);
					}
					
				})
				.attr("height", barHeight)
				.attr("class", function(d){
					if(d.name=="나"){
						return "pole pole-user";
					}else{
						return "pole";
					}
				})
				.attr("width", function(d) {
				  return d.value * multipleKey;
				});

		GraphBarHolder.append("text")
			.attr("class","pole-label")
			.text(function(d) { return d.value+"%"; })
			.attr("transform", function(d, i) { 
				return "translate("+ ( d.value * multipleKey +5) +"," + 17 + ")";
			});

		var labelHolder = svgBody.append("g")
			.attr("class","pole-label-holder")
			.attr("transform", "translate(" + (-labelWidth) + ","+ (barHeight-barMargin) +")")

		var Xaxis = labelHolder.selectAll("text")
			.data(data)
			.enter()
			.append("text")
			.attr("width", "50")
			.attr("transform", function(d, i) {
			  return "translate(0, " + (i * (barHeight + barMargin)) + ")";
			})
			.attr("class", "graph-Xaxis")
			.attr("text-anchor", "end")
			.text(function(d) {
			  return d.name;
			});

		var yScale = d3.scaleLinear()
			.range([0, width])
			.domain([0, maxValue]);

		var yAxis = svgBody.append("g")
			.attr("class", "graph-Yaxis")
			.attr("transform", "translate(0,-10)")
			.call(d3.axisTop(yScale).ticks((isMobile==true)?3:5).tickFormat(d3.format("d")));

	};	


	/***  LINE CHART - 금융자산, 예적금자산 비중 ***/
	var data_invest_each_type = [{"name":"돼지저금통형", "value":14},{"name":"친구따라테슬라형", "value":21},{"name":"존리주의자형", "value":45},{"name":"차트읽는화가형", "value":25},{"name":"인간불신수학자형", "value":56},{"name":"삼성전자믿어요형", "value":44},{"name":"하루살이5%족형", "value":23}]; 
	var user_data_invest = {"name":"나", "value": 35}; // 사용자의 데이터 값은 나중에 입력되야함 
	data_invest_each_type.unshift(user_data_invest);


	var data_saving_each_type = [{"name":"돼지저금통형", "value":21},{"name":"친구따라테슬라형", "value":14},{"name":"존리주의자형", "value":88},{"name":"차트읽는화가형", "value":38},{"name":"인간불신수학자형", "value":16},{"name":"삼성전자믿어요형", "value":44},{"name":"하루살이5%족형", "value":44}]; 
	var user_data_saving = {"name":"나", "value": 55}; // 사용자의 데이터 값은 나중에 입력되야함 
	data_saving_each_type.unshift(user_data_saving);

	function drawLineChartDiv(chartType, name, percent){
		var data;
		if(chartType=="invest"){
			//data = data_invest_each_type;
			data = [{"name": name, "value":percent}]
		}else if(chartType=="saving"){
			//data = data_saving_each_type;
			data = [{"name": name, "value":percent}]
		}
		
		var graphHolder;
		var elHolder;
		if(chartType=="invest"){
			graphHolder = $("#LINE_CHART_INVEST");
		}else if(chartType=="saving"){
			graphHolder = $("#LINE_CHART_SAVING");

		}
		elHolder = graphHolder.find(".per-el");
		elHolder.html("");
		// el append
		for(d=0; d<data.length;d++){
			/*
			var classStr;
			if(data[d].name == "나"){
				classStr = "el el--user"
			}else{
				classStr = "el el--other"
			}	
			elHolder.append("<div class='"+classStr+"'><p class='label'>"+ data[d].name +"</p></div>");

			var el  = elHolder.find(".el").eq(d);
			if(data[d].name =="나"){
				el.css({"width": data[d].value+"%"});
				el.css({"left": "0"});
			}else{
				el.css({"left": data[d].value+"%"});
			}*/
			elHolder.append("<div class='el el--user'><p class='label'>"+ data[d].name +"</p></div>");
			var el  = elHolder.find(".el").eq(d);
			el.css({"width": data[d].value+"%"});
			el.css({"left": "0"});

		};
	
	}
	/***  LINE CHART - 금융자산, 예적금자산 비중 ***/

	/*								*/
	/*       D3 CHART FUNCTION      */
	/*								*/



	function drawD3chart(){
		drawPieChart();
		drawPoleGraph("wage");
		drawPoleGraph("asset");
		drawLineChartDiv("saving");
		drawLineChartDiv("invest");
	};

	function init(){
		 //drawD3chart();
		 routingResultPage();
	}


	function get_query(){
		var url = document.location.href;
		var qs = url.substring(url.indexOf("?") + 1).split("&");
		for(var i = 0, result = {}; i < qs.length; i++){
			qs[i] = qs[i].split("=");
			result[qs[i][0]] = decodeURIComponent(qs[i][1]);
		}
		return result;
	}

	function checkURLQuery(){
		var urlQuery = get_query();
		var type_number = urlQuery["type"]
		//var type_number = <?php echo  $_GET['type']; ?>;
		//console.log(type_number);
		return type_number;
	}

	function checkResultPage(){
		//console.log($("body").hasClass("only-result"));
		return $("body").hasClass("only-result");
	}
	
	function routingResultPage(){
		if(checkResultPage() == true){
			var userType = new Array;
			 userType.push("t"+checkURLQuery());
			console.log(userType);
			showResult(userType, true);
		}	
	};

	$(".loading-page").fadeOut(200, function(){
		init();
	});

	var record = {};
	//ajax 데이터 수신
    $.ajax({
		url: "dataload.php",
		data: record,
		type: "POST",
		success: function() {
			$.getJSON("dataload.php", function(data) {		  						
				//console.log(data);
				addCountDataToCard(data);
			});
		}
    });
	//ajax 데이터 수신

	function addCountDataToCard(data){
		$(".all-type-list .slider-item").each(function(i){
			var typeName = 	$(this).find(".slider-type-name").html();
			if(typeName =="하루살이5%족형"){
				$(this).find(".select-count .value").html(data["하루살이5족형"]+"회");
			}else{
				$(this).find(".select-count .value").html(data[typeName]+"회");
			}	
		});
	}
	
	function sendUserSelectToCount(data){
		var typeName = data.name;
		investStyleData.forEach(function(v, i, a) { 
			if(a[i].name==typeName){
				record[a[i].name] = 1;
			}else {
				record[a[i].name] = 0;
			}				
		});
		console.log(record);
		record.password = "ok!"
		$.ajax({
			url: "dataload.php",
			data: record,
			type: "POST",
			success: function() {
				$.getJSON("dataload.php", function(data) {
					addCountDataToCard(data);
				});
			}
		});
	}



	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();
		var nowScrollWithCon = nowScroll+screenHeight*0.6;
	
		$(".hideme").each(function(i){
			if( $(this).hasClass("shown") == false && nowScroll + screenHeight > $(this).offset().top + $(this).outerHeight()*0.5 ){
				$(this).addClass("shown")
				$(this).stop().animate({"opacity":"1"},500);
			}
		});

	});


	// 결과 공유하기
   $(".share-type-fb").on("click", function(e){
	    e.preventDefault();
		var userTypeGlobalN =userTypeGlobal.replace("t", "");
		var url = encodeURIComponent("http://news.khan.co.kr/kh_storytelling/2020/2030-invest-report/result.html?type=" + userTypeGlobalN );
		window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
		return false;
    });

   $(".share-type-tw").on("click", function(e){
		e.preventDefault();
		var userTypeGlobalN =userTypeGlobal.replace("t", "");
		var url = encodeURIComponent("http://news.khan.co.kr/kh_storytelling/2020/2030-invest-report/result.html?type=" + userTypeGlobalN);
		window.open('http://twitter.com/intent/tweet?url=' + url);
		return false;
    });




});


function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
