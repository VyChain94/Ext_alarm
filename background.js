// whenever theres an alarm it'll keep listening and run the notification
chrome.alarms.onAlarm.addListener( 
    () => {
    chrome.notifications.create(
    {
        type:"basic",
        iconUrl:"brain.png",
        title:"Reminder",
        message:"Pay attention to the feeling of the wish fulfilled?",
        // can add sound here
        silent: "false"
    },
    () => { }
    )
}
)

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResonpse) {
        // console.log(request)
        if (request.time)
        createAlarm()
    }
)

// running createAlarm function
function createAlarm() {
    chrome.alarms.create(
        // whats the id of this alarm?
        "payyourdues",
    {
        delayInMinutes: 1,
        periodInMinutes: 1
    }
    )
}