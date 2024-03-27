const days = document.getElementById("days")
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")


const countDown = new Date("Jun 01 2024 00:00:00")

const update = setInterval(function(){
    const now = new Date();
    const diff = countDown - now;

    //Calculate date
    d = Math.floor(diff / (1000 * 60 * 60 * 24));
    hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    sec = Math.floor((diff % (1000 * 60)) / 1000);

    //update DOM
    days.innerHTML = d;
    hours.innerHTML = hrs < 10 ? '0' + hrs : hrs;
    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;

    console.log(days, hrs, minutes, seconds);
}, 1000)


/* Form submission */
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/c1U4FAff9Lzos7MK/',
        type:'post',
        data:$("#guests_form").serializeArray(),
        success: function(){
          window.location.href = "form_sub.html"
        },
        error: function(){
          alert("There was an error :(")
        }
    });
    console.log("works")
}