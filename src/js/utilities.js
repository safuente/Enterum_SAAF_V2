

// Calculo diferencia de fechas
function get_difference(dt2, dt1) {
    let days = ['Sunday','Mon', 'Tue', 'Wed', 'Thursday', 'Friday', 'Saturday'],
    dayDiff= "";
    let diff =(dt2.getTime() - dt1.getTime()) /1000 ;
        console.log(diff)
        if (diff>86400 && diff<604800){
            dayDiff=days[dt1.getDay()];
            console.log(typeof(dayDiff));
            return dayDiff;
            }
        else{
        return Math.abs(Math.round(diff));
        }
}

// Calculo de fecha de publicación
function getDateFormat(difference){
    
    if (difference <60){
        var dateNew = (difference+" seconds ago");
        
    }
    else if (difference<3600){
        
        var dateNew = Math.round(Math.abs(difference)/60)+" minutes ago";
       
    }
    else if (difference<86400){
        
        var dateNew = Math.abs(Math.round(difference/3600))+" hours ago";
        
    }
    else if (typeof(difference) === 'string'){
        var dateNew = difference
    }
    else{
        var dateNew= "Feb 15, 2017 12:00";
    }
    return dateNew;
}


function updateTime(elementID,newDate) {
        
    document.getElementById(elementID).innerHTML = newDate ;
    //setTimeout(updateTime, 5000);
}

$( function() {
    var ids = $('.target').map(function(index) {
        var counter = 0;
        var totalCounter = localStorage.getItem(this.id,counter);
        if (totalCounter==null){
            document.getElementById('result-'+this.id).innerHTML = 0;
        }
        else{
        document.getElementById('result-'+this.id).innerHTML = totalCounter;
        }
    });
    
    
});

$('.target').click(function() {
    var id= this.id;
    console.log(localStorage);
    var counter = 0;
    var totalCounter = localStorage.getItem(id,counter);
    if(typeof(Storage) !== "undefined") {
        localStorage.setItem(id, Number(totalCounter)+1);
        var totalCounter = localStorage.getItem(id,counter);
        document.getElementById('result-'+id).innerHTML = totalCounter;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
})


//  Despliegue lento de menu
 $('button.nav-button').click( function() {
        var nav_li = $('.navbar > ul.navbar-list > .navbar-item');
        nav_li.slideToggle("slow");
        })


$(document).ready(function() {
    $("#commentary").on('keyup', function () {
        var words = this.value.match(/\S+/g).length;

        if (words > 120) {
            // Split the string on first 200 words and rejoin on spaces
            var trimmed = $(this).val().split(/\s+/, 120).join(" ");
            // Add a space at the end to make sure more typing creates new words
            $(this).val(trimmed + " ");
        }
        else {
            $('#display_count').text(words);
            $('#word_left').text(120 - words);
        }
    });
});       
           
    
 //Simulación de fechas para fecha de publicación       
var dt1 = new Date("Feb 15, 2017 12:00:00");
var dt2 = new Date("Feb  15, 2017 11:59:55");
var dt3 = new Date("Feb 15, 2017 12:05:00");
var dt4 = new Date("Feb 14, 2017 13:00:00");
var dt5 = new Date("Feb 13, 2017 13:00:00");
var dt6 = new Date("Feb 01, 2017 13:00:00");
var dt7 = new Date("Feb 15, 2017 11:59:01");
var dt7 = new Date("Feb 15, 2017 11:59:01");
var dt8 = new Date("Feb 15, 2017 11:00:05");
var dt9 = new Date("Feb 14, 2017 19:00:00");
var dt10 = new Date("Feb 12, 2017 12:00:00");
var dt11 = new Date("Feb 02, 2017 12:00:00");

// Actualiza fecha de publicación en la lista de articulos
updateTime('timeLessOneMinute',getDateFormat(get_difference(dt1, dt2)));
updateTime('timeLessOneHour',getDateFormat(get_difference(dt1, dt3)));
updateTime('timeLessOneDay',getDateFormat(get_difference(dt1, dt4))); 
updateTime('timeLessOneWeek',getDateFormat(get_difference(dt1, dt5)));  
updateTime('timeMoreOneWeek',getDateFormat(get_difference(dt1, dt6)));          
updateTime('timeLessOneMinute-2',getDateFormat(get_difference(dt1, dt7)));  
updateTime('timeLessOneHour-2',getDateFormat(get_difference(dt1, dt8)));
updateTime('timeLessOneDay-2',getDateFormat(get_difference(dt1, dt9)));
updateTime('timeLessOneWeek-2',getDateFormat(get_difference(dt1, dt10)));
updateTime('timeMoreOneWeek-2',getDateFormat(get_difference(dt1, dt11)));


