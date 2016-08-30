window.onload = initAll;


class n{
    constructor(name, equations){
        this.name = name;
        this.equations = equations;
    }
}
var equations = ["0 + 0", "5 - 5", "20 - 20"];
var zero = new n("0", equations);

equations = ["0 + 1", "10 - 9", " 15 - 14"];
var one = new n("1", equations);

equations = ["1 + 1", "3 - 1", "18 - 16"];
var two = new n("2", equations);

equations = ["2 + 1", "6 - 3", "13 - 10"];
var three = new n("3", equations);

equations = ["2 + 2", "10 - 4", "19 - 15"];
var four = new n("4", equations);

equations = ["1 + 4", "6 - 1", "14 - 9"];
var five = new n("5", equations);

equations = ["3 + 3", "10 - 4", "17 - 11"];
var six = new n("6", equations);

equations = ["4 + 3", "8 - 1", "20 - 13"];
var seven = new n("7", equations);

equations = ["2 + 6", "8 + 0", "17 - 9"];
var eight = new n("8", equations);

equations = ["5 + 4", "14 - 5", "18 - 9"];
var nine = new n("9", equations);

equations = ["2 + 8", "12 - 2", "15 - 5"];
var ten = new n("10", equations);

equations = ["9 + 2", "13 - 2", "12 - 1"];
var eleven = new n("11", equations);

equations = ["7 + 5", "8 + 4", "15 - 3"];
var twelve = new n("12", equations);

equations = ["6 + 7", "14 - 1", "19 - 6"];
var thirteen = new n("13", equations);

equations = ["8 + 6", "13 + 1", "17 - 3"];
var fourteen = new n("14", equations);

equations = ["6 + 9", "12 + 3", "18 - 3"];
var fifteen = new n("15", equations);

equations = ["8 + 8", "2 + 14", "18 - 2"];
var sixteen = new n("16", equations);

equations = ["9 + 8", "12 + 5", "20 - 3"];
var seventeen = new n("17", equations);

equations = ["12 + 6", "3 + 15", "19 - 1"];
var eighteen = new n("18", equations);

equations = ["1 + 18", "11 + 8", "7 + 12"];
var nineteen = new n("19", equations);

equations = ["10 + 10", "12 + 8", "5 + 15"];
var twenty = new n("20", equations);

equations = ["14 + 7", "18 + 3", "8 + 13"];
var twentyone = new n("21", equations);

equations = ["15 + 7", "12 + 10", "8 + 14"];
var twentytwo = new n("22", equations);

equations = ["19 + 4", "16 + 7", "12 + 11"];
var twentythree = new n("23", equations);

var nums = [zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree];

var cNums = [];

var squares = [];

function initAll(){
    for (var j=0; j<nums.length; j++){
        cNums.push(nums[j]);
    }
    
    for (var i=0; i<24; i++){
        //set numbers
        var currSquare = "square" + i;
        var n = Math.floor(Math.random() * nums.length);
        document.getElementById(currSquare).innerHTML = nums[n].name;
        squares.push(nums[n]);
        
        //clear spaces of color
        document.getElementById(currSquare).className="";
        document.getElementById(currSquare).onmousedown = checkCorrect(currSquare); 
        nums.splice(n, 1);
    }
    
    console.log(cNums.length);
}

function checkCorrect(currSquare){
    
}