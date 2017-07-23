//setTimeout(begin, 0);
//setTimeout(timeup, 1000 * 20);

var questions = [
	{	"id": 1,
		"ask": "What falls off the trees in the fall?",
		"answer": "leaves",
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
	time = 20;
$(document).ready(function(){

	var intervalId;
	
	

	function gameRestart(){
		$("#timer, #questionArea, #answer").hide();
		console.log("start game");
		};

	function randomQuestion(){
		for(var i=0; i < questions.length; i++) {
			bigQ = Math.Floor(Math.random() * questions.length) + 1;
			
		}
	};

	//display question
	//display answers
	function gameBegin(){
		$("button").on("click", function() {
		$("#timer").show().append("<h2>Time Remaining: " + time + " Seconds</h2>");
		console.log("timer");
		$("#questionArea").show().append("<span>" + questions[3].ask + "</span>");
		console.log("question");
		$("#answer").show().append("<li>" + questions[3].incorrectAnswer1 + "</li>");
		$("#answer").show().append("<li>" + questions[3].incorrectAnswer2 + "</li>");
		$("#answer").show().append("<li>" + questions[3].incorrectAnswer3 + "</li>");
		$("#answer").show().append("<li>" + questions[3].answer + "</li>");
		
		console.log("answer");
		$("button").hide();
		timerRunning();
	});
		
};

	function answerSelect(){
		
		$("questions[3].answer").on("click", function(){
			console.log("correct");
	});
	}

	function timerStart() {
		timerStart = true;
		time--;
		$("#timer").html(time);
		console.log(time)
	}

	function timerRunning (){
		intervalId = setInterval(time, 1000);
	}
 	
	//answerSelect();
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