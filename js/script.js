/* menu.onclick = function myFunction() {
    var x = document.getElementById("myTopnav");
    
    if(x.className === " topnav") {
        x.calassName += " responsive";
    } else{
        x.className = " topnav";
    }
} */
$( document ).ready(function() {
 $( ".responsive" ).click(function() {
	$( ".responsive" ).removeClass( "responsive" ).addClass( "topnav" );
});
$( ".topnav" ).click(function() {
	$( ".topnav" ).removeClass( "topnav" ).addClass( "responsive" );
});
});