document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("redirectButton").addEventListener("click", function(){
        var userInput = prompt("Please input your favorite music genre (write everything together, ex. hiphop): ");
        userInput = userInput.toLowerCase();
        if (userInput === "pop"){
            window.location.href = "popMusic.html";
        } else if (userInput === "rap" || userInput === "hiphop"){
            window.location.href = "hiphopMusic.html";
        } else if (userInput === "rock" || userInput === "rocknroll"){
            window.location.href = "rockMusic.html";
        } else {
            alert("Sorry, we are working towards creating a page for your genre! ;)");
        }
    });
});