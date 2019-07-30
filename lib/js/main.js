let titleContent = document.querySelector("#title_input");
let mainTitle = document.querySelector("#main_title");

titleContent.addEventListener("keypress", liveTitle);
let text = titleContent.value;


function liveTitle(event){
    let keyCode = event.key;
    if(keyCode !== "Backspace") {
        console.log(text);
        mainTitle.innerHTML = `${text}`;
    // } else {
    //     mainTitle.innerHTML = 
    // }
}
}




function myFunction() {
    var title = document.getElementById("title_input").value;
    var noun = document.getElementById("noun").value;
    var verb = document.getElementById("verb").value;
    var adjective = document.getElementById("adjective").value;
    submit_button = "true";

    if (title.length < 0){
        alert("title must be filled out");
        submit_button = "false";
    }
}





