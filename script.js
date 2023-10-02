// first problem

function Average (a , b , c , d , e , f , g , h , j , k ){
    var average = (a+b+c+d+e+f+g+h+j+k) / 10 ;
    return average;
}
console.log(Average(1 , 2, 3 , 4 , 5 ,6 ,7 , 8 , 9 ,10));

// !##############################################
// second problem 
function Area (base , height){
    return (base * height )*0.5;
}
console.log(Area(10 , 5 ));

// !#############################
// third problem 
function Age (years){
    var days = years * 365;
    return days;   
}
console.log(Age(19));

// !###################################
// 4th problem 

function Sum (num1 , num2){
    return (num1 + num2);
}
console.log(Sum(10 , 5));

// !################################
// 5th problem 

var group = ["Egypt" , "China" , "France" , "Turkey" , "Portugal" , "Brazil" , "America" , "Japan" , "India" , "Russia"];
console.log(group[0]);

// !################################################
// 6th problem 

function Name (first , sec , third , fourth){
    var name = first + sec + third + fourth;
    return name;

}
document.getElementById("first").innerHTML = "Yousef" + " " + "Ibrahim" + " " + "Ahmed" + " " + "Omran";

// !###############################
// 7th problem 

function Convert (hours){
    return hours*60;
}
console.log(Convert(2));

// !###########################
// 8th problem 
var result;
function moreThan350(a , b , c ,d ){
    if(a+b+c+d > 350){
    result=true;
    return result;
    } else{
        result=false;
        return result;
    }
}
moreThan350(100 , 200 , 300 , 400);
document.getElementById("second").innerHTML=result;


// !########################################
// 9th problem 

function Zero (num){
    if(num===0){
        return true;
    }else{
        return false;
    }
}
console.log(Zero(0));

// !################################
// problem 10 

function divide(x , y){
    var total = x % y ;
    return total;
}
console.log(divide(10,4));

// !##########################
// problem 11 

function bigger (num1 , num2){
    if(num1>num2){
        return num1;
    } else if (num2>num1){
        return num2;
    } else{
        return  "numbers are equal"
    }
}
console.log(bigger(10,10));

// !######################################
// problem 12 

function check (x){
    if (typeof(x)=="number"){
        return true;
    }else{
        return false;
    }
}
console.log(check("10"));

// !#######################
// problem 13

var dateNow = new Date();
console.log(dateNow);







