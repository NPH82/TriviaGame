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
var bigQ;
	timeCounter = 20;
	randomId = Math.floor(Math.random() * questions.length);

$(document).ready(function(){

	var intervalId;
	
	

	function gameRestart(){
		$("#timer, #questionArea, #answer").hide();
		console.log("start game");
		};

	//display question
	//display answers
	function gameBegin(){
		$("button").on("click", function() {
		$("#timer").show().append("<h2>Time Remaining: <span class='timer'>" + timeCounter + " </span>Seconds</h2>");
		console.log(timeCounter);
		console.log(randomId);
		$("#questionArea").show().append("<span>" + questions[randomId].ask + "</span>");
		console.log("question");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li class='incorrect'>" + questions[randomId].incorrectAnswer3 + "</li>");
		$("#answer").show().append("<li class='correct'>" + questions[randomId].answer + "</li>");
		
		console.log("answer");
		$("button").hide();
		timerRunning();
		correctAnswerSelect();
		incorrectAnswerSelect();
	});
		
};

	function correctAnswerSelect(){
		$(".correct").on("click", function(){
			if(this) {
			console.log("correct");
			randomId = randomId++;
			console.log("random id is going up")
		}

		});
	};
	function incorrectAnswerSelect(){
		$(".incorrect").on("click", function(){
			if(this){
				console.log("incorrect");
				randomId = randomId++;
				
			}
		});
	
	};

	intervalId = setInterval(timerRunning, 1000);
	function timerRunning (){
		if(timeCounter === 0) {
			timerStop();
			alert("Time's Up");
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