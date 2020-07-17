//feetTo mile problem starts here

function feetToMile(feet){
    var mile = feet*0.00018939;
    return mile;
}
var feet = 5;

if(feet<0){
    console.log("invalid input");
}
else{
    var mile = feetToMile(feet);
    console.log(mile);
}


//feetToMile ends here


//woodCalculator starts here


function woodCalculator(chair, table, khat){
    var total = (chair*1) + (table*3) + (khat * 5);
    return total;

}
var chair = 4;
var table = 2;
var khat = 2;
var totalWood = woodCalculator(chair, table, khat);
console.log(totalWood);

//woodCalculator ends here

//bricCalculator starts here
function bricCalculator(tala){
    if(tala<=10){
        var bric = tala * 15 * 1000;
    }
    else if(tala<=20){
        var bric = (10*15*1000)+((tala-10)*12*1000);
    }
    else if(tala>20)
    {
        var bric = (10*15*1000)+(10*12*1000)+((tala-20)*10*1000)
    }
    return bric;
}
var tala = 35;
var totalBric = bricCalculator(tala);
console.log(totalBric);

//bricCalculator ends here


//tinyFriend starts here
function tinyFriend(friends)
{
    var min= friends[0].length;
for(var i=1;i<friends.length; i++)
{
    if(friends[i].length<min)
    {
        min = friends[i].length;
        var min1=friends[i];
    }
    
    
}
return min1;

}

var friends = ['kamal', 'jamal', 'asad', 'blablabla'];
console.log(tinyFriend(friends));


//tinyFriend ends here


//THE END

