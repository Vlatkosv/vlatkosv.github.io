//autosave every 5 seconds function
window.setInterval(function(){
	saveButton();
}, 5000);


//autoload
function checkSave(){

		loadButton();
		//start the real-time timer
		startTime();
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
			nextBuildingOneCost: nextBuildingOneCost
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
}

//delete save button code coz yolo
function delsaveButton(){
  localStorage.removeItem("save")
}








//<p id="timedif"></p>

//set date for 1st of Jan 2018
//var t1 = new Date("2018-01-01T12:00:00Z");
//get current date and time
//var t2 = new Date();
//calculate the difference
//var dif = t1.getTime() - t2.getTime();

//TD = time difference between t1 and t2
//turn the difference into minutes
//var TD = dif / 60000;
//tbd=time between dates
//var TBD = Math.abs(TD);

//document.getElementById("timedif").innerHTML = TBD;














//time

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
