$( document ).ready(function() {
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("updateYourYearPLZ").innerHTML = new Date().getFullYear();
});

document.on("load",function(){
    $( "body" ).append( "<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>" );  
});
  
})
    
