function menuBar(){
    var x = document.getElementById('topnavi');
    if(x.className == 'topnav')
    {
        x.className += " resp";
    }
    else x.className = 'topnav';
}

function promoToggle(){
    var x = document.getElementById('promocio');
    var y = document.getElementById('pgomb');
    if(x.className == 'promo')
    {
        x.className += "-off";
        y.className += "-off";
    }
    else 
    {
        x.className = 'promo';
        y.className = "gomb";
    }
}

function biggerFontSize(){
    var x = document.getElementById('bod');
    var y = document.getElementsByClassName("fonts");
    if(x.className == 'b1')
    {
        x.className += '-big';
        y[0].id += "-on";
    } 
    else
    {
        x.className = 'b1';
        y[0].id ="bbut";
    } 
}

function openImg1(){window.open('media/smiling-people.jpeg', '_blank');}
function openImg2(){window.open('media/plane.jpg', '_blank');}