const mrng = ["Sunrise whispers, new day begins.","Dawn's embrace, a fresh start.","Morning calm, day awakens.","Sunlight whispers, daybreak calls.","Sunrise magic, day unfolds.","Early light, a world wakes."]

const noon = ["Afternoon sun, warmth lingers.","Sunset hues, day's glow.","Golden hour, shadows dance.","Sun's descent, peace settles.","Midday grace, time pauses.","Sunlit moments, afternoon serenity."]

const evng = ["Evning whispers, day's farewell.","Sunset hues, twilight serenade.","Dusk descends, stars awaken.","Sunset glow, night's arrival.","Calm twilight, day concludes."]


function updateTime(){
    const hour = document.getElementById("hour");
    const minute = document.getElementById("minute");
    const second = document.getElementById("seconds");
    const ampm = document.getElementById("ampm");
    

    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    if(hr < 12){
        ampm.innerText = "AM";
    } else {
        ampm.innerText = "PM";
    }

    hr = hr > 12 ? hr == 24 ? hr / 2 : hr % 12 : hr;
    hour.innerText = hr < 10 ? "0" + hr: hr;
    minute.innerText = min < 10 ? "0" + min : min;
    second.innerText = sec < 10 ? "0" + sec : sec;
}

window.onload = function() {  
    const quote = document.getElementById("quote");
    let time = new Date();
    let hr = time.getHours();
    if(hr < 12){
        quote.innerText = mrng[Math.floor(Math.random() * 6)]
    } else {
        if(hr < 17){
            quote.innerText = noon[Math.floor(Math.random() * 6)]
        } else {
            quote.innerText = evng[Math.floor(Math.random() * 6)]
        }

    }     
    setInterval(updateTime,10);
}