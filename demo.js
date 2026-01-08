//function,var,const 

function area(l,b){
    console.log("Area:",l*b)
}
area(5,10)


//if else statement

var cookie=true

if(cookie){
    console.log("Would you like a cookie")
}
else{
    console.log("Time to bake more cookies")
}


var finish=true

if(finish){
    console.log("great Job")
}else{
    console.log("Finish Your Homework brfore playing")
}


var brush=false

if(brush){
    console.log("Your teeth are clean")
}
else{
    console.log("Go brush your teeth now")
}


var birthday=true

if(birthday){
    console.log("Happy birthday! Enjoy your special day")
}
else{
    console.log("Have a Nice Day")
}




//Logical operator - AND ,OR  AND - Two condition true output is true ,OR -one condition true overall condition is true
// AND -&&  OR- ||


console.log(true&&false&&true)
console.log(true||false)

var score=0

if(score<50 && score>=25){
    console.log("You need improvement")
}
else if(score>50 && score<=70){
    console.log("Good Job")
}
else if(score>70){
    console.log("Excellent Performance")
}
else{
    console.log("nee oru 'Failure'")
}

var num=2

if(num<2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}



// For loop statement - for (intial;condition;iteration)



for (count=1;count<=5;count=count+1){
    console.log("Spidy")
}

for(n=1;n<11;n=n+1){
    console.log(n)
}


for(n=10;n>0;n=n-1){
    console.log(n)
}

for(let n=1;n<=10;n++){
    if(n%2==0){
        console.log(n)
    }

}


