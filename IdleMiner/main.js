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

function buyBuildingOne(){
    var costBuildingOne = Math.floor(10 * Math.pow(1.1,BuildingOne));     //works out the cost of this cursor
    if(coins >= costBuildingOne){                                   //checks that the player can afford the cursor
        BuildingOne = BuildingOne + 1;                                   //increases number of cursors
    	coins = coins - costBuildingOne;                          //removes the coins spent
        document.getElementById('BuildingOne').innerHTML = BuildingOne;  //updates the number of cursors for the user
        document.getElementById('coins').innerHTML = coins;  //updates the number of coins for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,BuildingOne));       //works out the cost of the next cursor
    document.getElementById('costBuildingOne').innerHTML = nextCost;  //updates the cursor cost for the user
};

//Loop every second
window.setInterval(function(){
	coinsClick(BuildingOne);
}, 1000);



//Save code


function saveButton(){

  var save = {
      coins: coins,
      BuildingOne: BuildingOne
  }
    		localStorage.setItem('save', JSON.stringify(save));
}

function loadButton(){
var savegame = JSON.parse(localStorage.getItem("save"));

if (typeof savegame.coins !== "undefined") coins = savegame.coins;
    document.getElementById('coins').innerHTML = coins;
if (typeof savegame.BuildingOne !== "undefined") BuildingOne = savegame.BuildingOne;
    document.getElementById('BuildingOne').innerHTML = BuildingOne;
}


function delsaveButton(){

  localStorage.removeItem("save")
}
