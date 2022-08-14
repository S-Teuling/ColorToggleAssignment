//Menu Item -----------------------------------Home Button--------------------------------------------------------//
let buttonHome = document.getElementById("home").addEventListener("click",changeColorHome);                       
let keyPressHome = document.addEventListener("keypress",checkKey1, false);

function changeColorHome(){
        element1 = document.getElementById("body");
        element1.classList.remove("clr-green","clr-yellow","clr-blue","clr-orange");
        element1.classList.add("white-background");
        document.getElementById("ReturnColor").innerHTML= "You Chose To Return Home";
        console.log("home button clicked") 
        uncheckRadioBtns();    
}
function checkKey1(key){                                                                  //----Keyboard Press 1------//
        if (key.keyCode == "49"){
                changeColorHome();
                console.log(key);
        }
}
function uncheckRadioBtns(){                                                            //------Reset radio buttons----//
        let uncheck=document.getElementsByName("color");
        for(let i=0; i<uncheck.length;i++)
        uncheck[i].checked=false;
}
//------------------------------------------------Green--------------------------------------------------------//
let buttonGreen = document.getElementById("clr-green").addEventListener("click",changeColorGreen);                               
let keyPressGreen = document.addEventListener("keypress",checkKey2, false);
let checkRadioBtnGreen=document.getElementById("green-btn").addEventListener("click",changeColorGreen);

function changeColorGreen(){
        let colorGreen=true;
        element2 = document.getElementById("body");
        element2.classList.add("clr-green");
        element2.classList.remove("clr-yellow","clr-blue","clr-orange");
        document.getElementById("ReturnColor").innerHTML= "You Chose Green";
        document.getElementById('green-btn').checked=true;
        console.log("green button clicked");
}
function checkKey2(key){                                                                        //----Keyboard Press 2------//
        if (key.keyCode == "50"){
                changeColorGreen();
                console.log(key);
        }
}      
//---------------------------------------------Yellow--------------------------------------------------------//
let buttonYellow = document.getElementById("clr-yellow").addEventListener("click",changeColorYellow);                                       
let keyPressYellow = document.addEventListener("keypress",checkKey3, false);
let checkRadioBtnYellow=document.getElementById("yellow-btn").addEventListener("click",changeColorYellow);

function changeColorYellow(){
        element3 = document.getElementById("body");
        element3.classList.add("clr-yellow");
        element3.classList.remove("clr-green","clr-blue","clr-orange");
        document.getElementById("ReturnColor").innerHTML= "You Chose Yellow";
        document.getElementById('yellow-btn').checked=true;
        console.log("yellow button clicked");
}
function checkKey3(key){                                                                       //----Keyboard Press 3------//
        if (key.keyCode == "51"){
                changeColorYellow();
                console.log(key);
        }
}
//---------------------------------------------Blue--------------------------------------------------------//
let buttonBlue = document.getElementById("clr-blue").addEventListener("click",changeColorBlue);
let keyPressBlue = document.addEventListener("keypress",checkKey4, false);
let checkRadioBtnBlue=document.getElementById("blue-btn").addEventListener("click",changeColorBlue);

function changeColorBlue(){
        element4 = document.getElementById("body");
        element4.classList.add("clr-blue");
        element4.classList.remove("clr-green","clr-yellow","clr-orange");
        document.getElementById("ReturnColor").innerHTML= "You Chose Blue";
        document.getElementById('blue-btn').checked=true;
        console.log("blue button clicked");
}
function checkKey4(key){                                                                     //----Keyboard Press 4------//
        if (key.keyCode == "52"){
                changeColorBlue();
                console.log(key);
        }
}
//---------------------------------------------Orange--------------------------------------------------------//
let buttonOrange = document.getElementById("clr-orange").addEventListener("click",changeColorOrange);
let keyPressOrange = document.addEventListener("keypress",checkKey5, false);
let checkRadioBtnOrange=document.getElementById("orange-btn").addEventListener("click",changeColorOrange);

function changeColorOrange(){
        element5 = document.getElementById("body");
        element5.classList.add("clr-orange");
        element5.classList.remove("clr-green","clr-yellow","clr-blue");
        document.getElementById("ReturnColor").innerHTML= "You Chose Orange";
        document.getElementById('orange-btn').checked=true;
        console.log("orange button clicked");
}
function checkKey5(key){                                                                   //----Keyboard Press 5------//
        if (key.keyCode == "53"){
                changeColorOrange();
                console.log(key);
        }
}