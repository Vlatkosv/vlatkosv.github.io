//autosave every 5 seconds function //// CHANGE VALUE BACK TO 5000!!!! ////
window.setInterval(function(){
	saveButton();
}, 600000);




var dateAFKLogout = 0;
//set the variable for the first timer
var dateAFKSave = 0;

//get current date and time
var dateCurrent = new Date();

var dateLogout = minutecalc(dateCurrent);
var dateLogin = minutecalc(dateCurrent);
var dateAFK = 0;


function minutecalc(input){
  //set a variable for the date: 1st of Jan 2018, as a reference
  var dateReference = new Date("2018-01-01T12:00:00Z");
	//calculate the difference between current date and reference date
	var dateDifference = dateReference.getTime() - dateCurrent.getTime();
	//turn the difference into minutes
	var dateMinute = dateDifference / 60000;
	//convert the difference in minutes into a number
	var dateMinuteS = Math.abs(dateMinute);
	//round the number up to remove decimals
	var dateMinuteR = roundup(dateMinuteS);
  //put the following math back into the input variable and return it
  input = dateMinuteR;
	return input;
}





//autoload
function checkSave(){

		loadButton();
		//start the real-time timer
		startTime();

		afkGains()

}

//main currency
var coins = 0;

//what makes the currency go up
function coinsClick(number){
    coins = coins + number;
    //display the coin ammount to the index
    document.getElementById("coins").innerHTML = coins;
};

// Building One's Code
var BuildingOne = 0;
var nextBuildingOneCost = 0;

function buyBuildingOne(){
    costBuildingOne = Math.floor(10 * Math.pow(1.1,BuildingOne));     //works out the cost of this cursor
    if(coins >= costBuildingOne){                                   //checks that the player can afford the cursor
        BuildingOne = BuildingOne + 1;                                   //increases number of cursors
    	coins = coins - costBuildingOne;                          //removes the coins spent
        document.getElementById('BuildingOne').innerHTML = BuildingOne;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of coins for the user
    };
    nextBuildingOneCost = Math.floor(10 * Math.pow(1.1,BuildingOne));       //works out the cost of the next cursor
    document.getElementById('costBuildingOne').innerHTML = nextBuildingOneCost;  //updates the cursor cost for the user
};

//Autoclicker function
window.setInterval(function(){
	coinsClick(BuildingOne);
}, 1000);



//Save button code
function saveButton(){
  var save = {
      coins: coins,
      BuildingOne: BuildingOne,
			nextBuildingOneCost: nextBuildingOneCost,
			dateAFKSave: dateLogout
  }
    		localStorage.setItem('save', JSON.stringify(save));
}

//load button code
function loadButton(){
var savegame = JSON.parse(localStorage.getItem("save"));

if (typeof savegame.coins !== "undefined") coins = savegame.coins;
    document.getElementById('coins').innerHTML = coins;
if (typeof savegame.BuildingOne !== "undefined") BuildingOne = savegame.BuildingOne;
    document.getElementById('BuildingOne').innerHTML = BuildingOne;

if (typeof savegame.nextBuildingOneCost !== "undefined") nextBuildingOneCost = savegame.nextBuildingOneCost;
		document.getElementById('costBuildingOne').innerHTML = nextBuildingOneCost;

if (typeof savegame.dateAFKSave !== "undefined") dateAFKSave = savegame.dateAFKSave, dateAFKLogout = savegame.dateAFKSave;
		document.getElementById('timedif').innerHTML = dateAFKSave;

}

//delete save button code coz yolo
function delsaveButton(){
  localStorage.removeItem("save")
}





//round the numbers to get rid of rogue decimals
function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}


//round the numbers up to get rid of decimals all together
function roundup(input){
    input = Math.ceil(input);
	return input;
}



function afkGains(TBD){

dateAFK = dateLogin - dateAFKLogout;

		document.getElementById("timedif2").innerHTML = dateLogin;
		document.getElementById('timedif3').innerHTML = dateAFKLogout;
		document.getElementById('timedif4').innerHTML = dateAFK;
		document.getElementById("timedif5").innerHTML = dateLogout;

}









//time, dont need this shit, delete soon once the afk gains starts working

var today = 0;
var h = 0;
var m = 0;
var s = 0;
var t = 0;

function startTime() {
    today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
