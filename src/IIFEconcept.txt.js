//IIFE immediately Invoked FUnction Expression
// ;(function definition)(execution)    ; in start for 
function app(){
    console.log("hello");
}
app();

//IIFE ke pehle ; lagna jaruri hai yhn nhi to jab bhi likho uske ange likh do 

// ab aise likhe se bhi to immediately function call ho rha hai but 
//aise karne se kai baar global scope ke pollution se problem hoti hai kai baar 
//jisse bachne ke liye IIFE ka use karte hain 

;((name)=>{
    console.log(`hello my name is ${name}`)
})('rachit')

// "iske andar ${name} to yhi dikhega rachit nhi " 
// lekin `inke andar likhoge to rachit dikhega`