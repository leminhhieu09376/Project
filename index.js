allEventsListener()
function allEventsListener() {

    getDate();
    getDay();
    getMonth();
    getYear();

    document.querySelector(".allChoice").addEventListener("click", function () {
        document.querySelector(".container").classList.toggle("d-block");

    });
    document.querySelector(".allChoice").addEventListener("click", function () {
        document.querySelector(".che").classList.toggle("block");

    })
}

function getDay() {
    var x = new Date();
    var day = x.getDay();
    var days = document.getElementById("days")
    switch (day) {
        case 1:
            return days.innerHTML = "Thứ Hai" + ",";

        case 2:
            return days.innerHTML = "Thứ Ba" + ",";

        case 3:
            return days.innerHTML = "Thứ Tư" + ",";

        case 4:
            return days.innerHTML = "Thứ Năm" + ",";

        case 5:
            return days.innerHTML = "Thứ Sáu" + ",";

        case 6:
            return days.innerHTML = "Thứ Bảy" + ",";

        case 7:
            return days.innerHTML = "Chủ nhật" + ",";

    }




}

function getDate() {
    var x = new Date();
    var day = x.getDate();
    var date = document.getElementById("date");
    date.innerHTML = day + " /";

}
function getMonth() {
    var x = new Date();
    var month = x.getMonth() + 1;
    var months = document.getElementById("months")
    months.innerHTML = month + " /";
}
function getYear() {
    var x = new Date();
    var year = x.getFullYear();
    var years = document.getElementById("years")
    years.innerHTML = year;

}


var mybutton = document.getElementById("myBtn");
var nav = document.querySelector(".navMenu");
var addd = document.querySelector(".add");




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        nav.style.top = 0;
        addd.style.display = "block";

    } else {
        mybutton.style.display = "none";
        nav.style.top = 70 + "px";
        addd.style.display = "none";

    }
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}






