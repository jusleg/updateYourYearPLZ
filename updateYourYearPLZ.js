document.addEventListener('DOMContentLoaded', function () {
    window.setInterval(getYear,10);
});

function getYear(){
    document.getElementById("updateYourYearPLZ").innerHTML = new Date().getFullYear(); 
}
