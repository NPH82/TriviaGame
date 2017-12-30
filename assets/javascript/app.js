
var questions = [
	{	"id": 1,
		"ask": "What drops off the trees in the fall?",
		"answer": "Leaves",
		"incorrectAnswer1": "Squirrels",
		"incorrectAnswer2": "Snow",
		"incorrectAnswer3": "Maple Syrup"
	},
	{	"id": 2,
		"ask": "What sport season ends in the fall?",
		"answer": "Baseball",
		"incorrectAnswer1": "Football",
		"incorrectAnswer2": "Hockey",
		"incorrectAnswer3": "Basketball"
	},
	{	"id": 3,
		"ask": "What doesn't happen in the fall?",
		"answer": "Olympic Games",
		"incorrectAnswer1": "Kids going to School",
		"incorrectAnswer2": "Weather gets colder",
		"incorrectAnswer3": "Pumpkin picking"
	},
	{	"id": 4,
		"ask": "Which is not an apple?",
		"answer": "Macintosh",
		"incorrectAnswer1": "Macoun",
		"incorrectAnswer2": "Braeburn",
		"incorrectAnswer3": "Baldwin"
	},
	{	"id": 5,
		"ask": "Which holiday is not during the fall?",
		"answer": "Flag Day",
		"incorrectAnswer1": "Halloween",
		"incorrectAnswer2": "Columbus Day",
		"incorrectAnswer3": "Veteran's Day"
	},
	{	"id": 6,
		"ask": "Which is a seasonal beverage in the fall?",
		"answer": "Pumpkin Spiced Latte",
		"incorrectAnswer1": "Chocolate Milk",
		"incorrectAnswer2": "Cappuccino",
		"incorrectAnswer3": "Lemon Water"
	}

]
var startId = "";
	randomId = Math.floor(Math.random() * questions.length);
	timeCounter = "";
	correctClick = 0;
	incorrectClick = 0;
	noClick = 0;


 $(document).ready(function(){
 	$("title").hide();
	var intervalId;
	function clearAll (){
		$("button, .timer, .ask, .timerHeader, .correct, .incorrect, #answer, .answer, .incorrectImage, .correctImage").hide();
		$("#answer").removeAttr("style");
	}
	

	function gameRestart(){
		$("#timer, #questionArea, #answer").hide();
		gameBegin();
		};

	//display question
	function gameBegin(){
		$("button").on("click", function() {
			timeCounter = 10;
			startId = randomId;
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		$("#questionArea").show().append("<span class='ask'>" + questions[startId].ask + "</span>");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[startId].answer + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer3 + "</li>");
		
		randomId = randomId + 1;
		$("button").hide();
		timerRunning();
		correctAnswerSelect() || incorrectAnswerSelect();
	});
		
};

	//random question logic
	function checkRandomId (){
		if(randomId === questions.length) {
			randomId = 0;
			nextQuestion3();
		} else if (randomId === (4 || 1) && randomId !== startId) {
			nextQuestion2();
		} else if (randomId === (2 || 5) && randomId !== startId) {
			nextQuestion();
		} else if(randomId === (3 || 6) && randomId !== startId) {
			nextQuestion3();
		} else if(randomId === startId) {
			randomId = false;
			gameEnd();
		} else {
			nextQuestion();
		}
	}

	function nextQuestion () {
		clearAll();
		if(randomId !== questions.length) {
		timeCounter = 10;
		intervalId = setInterval(timerRunning, 1000);
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		$("#questionArea").show().append("<span class='ask'>" + questions[randomId].ask + "</span>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[randomId].answer + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer3 + "</li>");
		} 
		randomId = randomId + 1;
		correctAnswerSelect();
		incorrectAnswerSelect();
	};

	function nextQuestion2 () {
		clearAll();
		if(randomId !== questions.length) {
		timeCounter = 10;
		intervalId = setInterval(timerRunning, 1000);
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		$("#questionArea").show().append("<span class='ask'>" + questions[randomId].ask + "</span>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer3 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[randomId].answer + "</li>");
		} 
		randomId = randomId + 1;
		correctAnswerSelect();
		incorrectAnswerSelect();
	};

	function nextQuestion3 () {
		clearAll();
		if(randomId !== questions.length) {
		timeCounter = 10;
		intervalId = setInterval(timerRunning, 1000);
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		$("#questionArea").show().append("<span class='ask'>" + questions[randomId].ask + "</span>");
		$("#answer").show().append("<li class='correct'>" + questions[randomId].answer + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer3 + "</li>");
		} 
		randomId = randomId + 1;
		correctAnswerSelect();
		incorrectAnswerSelect();
	};

	//track correct answers
	function correctAnswerSelect(){
		$(".correct").on("click", function(){
			if(this) {
				$(".incorrect, .correct, .ask, .timerHeader, .timer, #questionArea").hide();
				$("#answer").show().append("<span class='correctImage'><img src='https://media2.giphy.com/media/vgUFOWBwBkziE/giphy-preview.gif' /></span>");
				$("#answer").css("color", "#32cd32");
				$("#answer").css("margin-top", "180px");
				correctClick++;
				timerStop();
				setTimeout(checkRandomId, 5000);
				}

			});
		};

	//track incorrect answers	
	function incorrectAnswerSelect(){
		$(".incorrect").on("click", function(){
			if(this){
				$(".incorrect, .correct, .ask, .timerHeader, .timer, #questionArea").hide();
				$("#answer").show().append("<span class='incorrectImage'><img src='https://media2.giphy.com/media/W5YVAfSttCqre/giphy-preview.gif' /></span>");
				$("#answer").css("color", "#ff0000");
				$("#answer").css("margin-top", "180px")
				incorrectClick++;
				timerStop();
				setTimeout(checkRandomId, 5000);
				}
			});
		};

	function headChange(){
		var headerChange = document.getElementById("answer");
		headerChange.querySelector(".answerHead").innerHTML = "Results";
	};	

	//results screen
	function gameEnd(){
		clearInterval(intervalId);
		$("button, .timer, .ask, .timerHeader, .correct, .incorrect, .answer, .incorrectImage, .correctImage").hide();
		$("#timer, #answer, #questionArea").hide();
		$("#answer").removeAttr("style");
		headChange();
		$("#answer").show().append("<span class='rightAnswer'>You got " + correctClick + " questions correct!</span>");
		$("#answer").show().append("<span class='wrongAnswer'>You got " + incorrectClick + " questions incorrect!</span>");
		$("#answer").show().append("<span class='wrongAnswer'>You were unable to answer " + noClick + " questions!</span>");
		$("#answer").show().append("<a href='index.html' class='btn btn-warning btn-lg btn-block' style='vertical-align: middle'><strong>PLAY AGAIN ?</strong></a>");
	}


	//start timer
	intervalId = setInterval(timerRunning, 1000);
	function timerRunning (){
		if(timeCounter === 0) {
			noClick++;
			timerStop();
			nextQuestion();
		} else if(timeCounter <= 6){
			timeCounter--;
			$(".timer").css("color", "#ff0000");
			$(".timer").html(timeCounter);
		} else {
			timeCounter--;
			$(".timer").html(timeCounter);
		}
	}

	//stop timer
	function timerStop(){
		{
		clearInterval(intervalId);
		}
	}

	gameRestart();
});