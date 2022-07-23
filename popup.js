// grab btn element 
const ele=document.getElementById("btn")
// add audio
let music = new Audio("audi/TRANSFORM_-_Motivational_Speech_(getmp3.pro).mp3")

// add event listener to send message on click
ele.addEventListener("click", () => {

    // once we sendMessage it should go to background.js/ service worker
    chrome.runtime.sendMessage({time: "1" }, function (response) {
        console.log(response)
    })
})