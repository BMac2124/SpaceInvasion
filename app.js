//   Space  Battle
// setup my class for ships assignment

class Ship{
    constructor(name, firepower, hull, accuracy){
        // assign the following attributes to the ships. 
        this.name = name;
        this.firepower = firepower;
        this.hull = hull;
        this.accuracy = accuracy; 

    }
    
}
const myCraft = new Ship("Kaboom", 5, 20, 0.7)
console.log(myCraft);

    // variable set for the array of enemy ships. (array is empty prepped to be .pushed later)
var enemyShipArr = [];

    // for loop established
for(i = 1; i <= 6; i++){
    //   math worked out for the random numbers within the given ranges. 
    let  firepower = Math.floor(Math.random() * 3) + 2;
    let hull = Math.floor(Math.random() * 4) + 3;
    let accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    // variable set for the enemy squadron listed with the given attributes and math results
var enemyShip = new Ship ("spaceInvader",firepower,hull,accuracy);

        // the empty array pushed 
enemyShipArr.push(enemyShip);
};

console.log(enemyShipArr)

        // Engage enemy in battle
engageFunction = () => {

    while(enemyShipArr.length !== 0){// sets up the array length to decrement as the battle persist.

    var shipsLeftover = enemyShipArr.pop() 
    if(Math.random() <= shipsLeftover.accuracy){   // if any number 0-1 selected randomly against the enemy ship random selection
        alert("Direct hit " +  enemyShip.hull); 
        
        myCraft.hull = myCraft.hull - enemyShip.firepower
        alert("Craft was struck " +  myCraft.hull);
    }
    else if(Math.random() >= shipsLeftover.accuracy){
        alert(myCraft.firepower + " Nice hit");
        enemyShip.hull - myCraft.firepower
    }
    else if(enemyShip.hull <= 0){
        console.log("Player Defeated!")
        break
    }
    }
     if(myCraft.hull >= 0 && enemyShipArr.length == 0){
    alert("You have won")
}
}


