// let titleContent = document.querySelector("#title_input");
// let mainTitle = document.querySelector("#main_title");

// titleContent.addEventListener("keypress", liveTitle);
// let text = titleContent.value;


// function liveTitle(event){
//     let keyCode = event.key;
//     if(keyCode !== "Backspace") {
//         console.log(text);
//         mainTitle.innerHTML = `${text}`;
//     // } else {
//     //     mainTitle.innerHTML = 
//     // }
// }
// }




// function myFunction() {
//     var title = document.getElementById("title_input").value;
//     var noun = document.getElementById("noun").value;
//     var verb = document.getElementById("verb").value;
//     var adjective = document.getElementById("adjective").value;
//     submit_button = "true";

//     if (title.length < 0){
//         alert("title must be filled out");
//         submit_button = "false";
//     }
// }


//SOLUTION

const inputTitle=document.querySelector("#title_input");

const mainTitle=document.querySelector("#main_title");

inputTitle.addEventListener("keyup", updateValue);
//keyup might be better than keydown
//keyup is whenever the key is RELEASED

function updateValue(e){
    mainTitle.innerText =
    //innerText evaluates the input, but DOES NOT allow code to be processed.
    //other text methods might allow the user to type in code
    //that would break the program
    //innerText is the most secure text input method
    e.srcElement.value;
}

//second part: submit button actions

const storyResult=document.querySelector("#story_result");
const submitButton=document.querySelector("#submit_button");

const formContainer=document.querySelector("form");

const inputList=document.querySelectorAll("input");

const createText=evnt=>{
    evnt.preventDefault();
    //the default behaviour is to refresh the page
    //prevent default preserves everything
    const valueList = [...inputList].map(item=>item.value).slice(1);
    //[...inputList] is a spread operator
    //it says to take everything in inputList but as an array

    //valueList now runs looped function on each part of the array
    console.log(valueList);

//if an input field is not filled in, it will return an empty string
// empty strings ("") are one of only 7 values that return FALSE

//the some function makes it so that even if one value is false,
//the entire collection of values is returned false

if(valueList.some(val=>!val)) {
    alert("Please fill in all fields!")
    return;
    //return stops the loop, so the alert doesn't clear all fields
}

const[noun, verb, adj]=valueList;

const storyText = `Last night I ate a(n) ${noun}, 
and today I just had to ${verb}.  
What a(n) ${adj} day!`;

storyResult.innerText = storyText;

formContainer.style.display="none";
};

submitButton.addEventListener("click", createText);