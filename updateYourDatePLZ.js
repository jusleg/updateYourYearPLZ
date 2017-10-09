document.addEventListener('DOMContentLoaded', function () {
    var date = "20" + (new Date().getYear().toString()).substring(1,3);
    document.getElementById("updateYourYearPLZ").innerHTML = date;
});
