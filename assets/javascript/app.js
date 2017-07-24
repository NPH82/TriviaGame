//setTimeout(begin, 0);
//setTimeout(timeup, 1000 * 20);

var questions = [
	{	"id": 1,
		"ask": "What falls off the trees in the fall?",
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
	}

]
var startId = "";
	randomId = Math.floor(Math.random() * questions.length);
	timeCounter = "";

$(document).ready(function(){

	var intervalId;
	function clearAll (){
		$("button, .timer, .ask, .timerHeader, .correct, .incorrect, #answer, .answer, .incorrectImage, .correctImage").hide();
		$("#answer").removeAttr("style");
		console.log("clean up");
	}
	

	function gameRestart(){
		$("#timer, #questionArea, #answer").hide();
		console.log("start game");
		};

	//display question
	//display answers
	function gameBegin(){
		$("button").on("click", function() {
			timeCounter = 10;
			startId = randomId;
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		console.log(timeCounter);
		console.log(randomId);
		$("#questionArea").show().append("<span class='ask'>" + questions[startId].ask + "</span>");
		console.log("question");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[startId].incorrectAnswer3 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[startId].answer + "</li>");
		randomId = randomId + 1;
		console.log("adding 1 game begin");
		$("button").hide();
		timerRunning();
		correctAnswerSelect() || incorrectAnswerSelect();
	});
		
};

	function checkRandomId (){
		if(randomId === questions.length) {
			randomId = 0;
		} else if(randomId === startId) {
			alert ("finished");
			return false;
		}
	}

	function nextQuestion () {
		clearAll();

		console.log("next question");
		checkRandomId();
		if(randomId !== questions.length) {
		timeCounter = 10;
		intervalId = setInterval(timerRunning, 1000);
		//timerRunning();
		$("#timer").show().append("<h2 class='timerHeader'>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		console.log(timeCounter);
		console.log(randomId);
		$("#questionArea").show().append("<span class='ask'>" + questions[randomId].ask + "</span>");
		console.log("question");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer3 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[randomId].answer + "</li>");
		console.log("the glitch starts here")
		 // } else if (randomId === questions.length){
			// randomId = 0;
			// return true;
			// console.log("glitch here")
		// } else if (randomId === startId){
		// 	alert("finished")
		// 	return false;
		} 
		randomId = randomId + 1;
		console.log("please tell me this works")
		console.log("adding 1 next question")
		correctAnswerSelect();
		console.log("problems here")
		incorrectAnswerSelect();
		console.log("it makes it around here")
	};

	// function checkRandomId (){
	// 	if(randomId === questions.length) {
	// 		randomId = 0;
	// 	}
	// };

	function correctAnswerSelect(){
		$(".correct").on("click", function(){
			if(this) {
				$(".incorrect, .correct, .ask, .timerHeader, .timer, #questionArea").hide();
				$("#answer").show().append("<span class='correctImage'><img src='https://media2.giphy.com/media/vgUFOWBwBkziE/giphy-preview.gif' /></span>");
				$("#answer").css("color", "#32cd32");
				$("#answer").css("margin-top", "180px");
				console.log("correct");
				timerStop();
				setTimeout(nextQuestion, 5000);
				}

			});
		};
	function incorrectAnswerSelect(){
		$(".incorrect").on("click", function(){
			if(this){
				$(".incorrect, .correct, .ask, .timerHeader, .timer, #questionArea").hide();
				$("#answer").show().append("<span class='incorrectImage'><img src='https://media2.giphy.com/media/W5YVAfSttCqre/giphy-preview.gif' /></span>");
				$("#answer").css("color", "#ff0000");
				$("#answer").css("margin-top", "180px")
				console.log("incorrect");
				timerStop();
				setTimeout(nextQuestion, 5000);
				}
			});
	
		};

	intervalId = setInterval(timerRunning, 1000);
	function timerRunning (){
		if(timeCounter === 0) {
			timerStop();
			nextQuestion();
			alert("Time's Up");
		} else if(timeCounter <= 6){
			timeCounter--;
			$(".timer").css("color", "#ff0000");
			$(".timer").html(timeCounter);
		} else {
			timeCounter--;
			$(".timer").html(timeCounter);
		}
	}
	function timerStop(){
		{
		clearInterval(intervalId);


		}
	}


	
	gameBegin();


//set a timer
//start at 20 seconds
//end at 0 seconds
//display correct of incorrect message
//reset timer on answer or time run out

//track correct answers
//track incorrect answers
//track unanswered
	gameRestart();
});