window.onload = function (){

var today = new Date();
  let year = today.getFullYear()
 let month = today.getMonth()+1
  let day = today.getDate();
  document.getElementById("year").innerHTML = year;
  
function monthDate(){
    if (month == 1){
        month = "Januray";
    }
    else if (month == 2){
        month = "February";
    }
    else if (month == 3){
      month = "March";
  }else if (month == 4){
      month = "April";
  }else if (month == 5){
      month = "May";
  }else if (month == 6){
      month = "June";
  }else if (month == 7){
      month = "July";
  }else if (month == 8){
      month = "August";
  }else if (month == 9){
      month = "September";
  }else if (month == 10){
      month = "October";
  }else if (month == 11){
      month = "November";
  }else if (month == 12){
      month = "December";
  }
  else {
      return month
  }
}
 monthDate();

var date = day + " " + month + ", " + year;

  document.getElementById("date").innerHTML = date;




  var today = new Date();
let hour = today.getHours();
 let min = today.getMinutes();
 var time = ""

 // if (hour.length == 2)
    // function mode (){
   ///     var d = document.getElementsByTagName("header");
    //    var f = document.getElementsByTagName("footer");
   //     var n = document.getElementsByClassName("navbar");
     //   var t = document.getElementById("note");
     //   let dark = document.body; 
        
    //    if (hour > 13 &&  <= 24){ 
    //    dark.style.backgroundColor = "#333";
   //     dark.style.color = "white";
     //   f[0].style.backgroundColor = "black";
    //    t.style.boxShadow = "black 0 0 0px 0";
   //     d[0].style.boxShadow = "black 0 0 10px 0";
   //     n[0].style.boxShadow = "black 0 0 5px 0";
        
   //     }
   //     else return 
   // }
//mode();  

function amPm(){
    if (hour === 1){
        time = "am"
    }
    else if (hour === 2){
       time = "am"
   }
   else if (hour === 3){
       time = "am"
   } 
   else if (hour === 4){
       time = "am"
   } else if (hour === 5){
       time = "am"
   } else if (hour === 6){
       time = "am"
   } else if (hour === 7){
       time = "am"
   } else if (hour === 8){
       time = "am"
   } else if (hour === 9){
       time = "am"
   } else if (hour === 10){
       time = "am"
   } else if (hour === 11){
       time = "am"
   }
    else if (hour === 0){
       hour = 12;
       time = "am";
   }
    else if (hour === 12){
        hour = 12;
        time = "pm";
    }
    else if (hour === 13){
       hour = 1;
       time = "pm";
   }else if (hour === 14){
       hour = 2;
       time = "pm";
   }else if (hour === 15){
       hour = 3;
       time = "pm";
   }else if (hour === 16){
       hour = 4;
       time = "pm";
   }else if (hour === 17){
       hour = 5;
       time = "pm";
   }else if (hour === 18){
       hour = 6;
       time = "pm";
   }else if (hour === 19){
       hour = 7;
       time = "pm";
   }else if (hour === 20){
       hour = 8;
       time = "pm";
   }else if (hour === 21){
       hour = 9;
       time = "pm";
   }
   else if (hour === 22){
       hour = 10;
       time = "pm";
   }else if (hour === 23){
       hour = 11;
       time = "pm";
   }
   else{
       return false
   }
}
amPm();
function setMin(){
    if (min === 0){
        min = "00";
    }
    else if (min === 1){
        min = "01"
    }
    else if (min === 2){
        min = "02"
    } else if (min === 3){
        min = "03"
    } else if (min === 4){
        min = "04"
    } else if (min === 5){
        min = "05"
    } else if (min === 6){
        min = "06"
    } else if (min === 7){
        min = "07"
    } else if (min === 8){
        min = "08"
    } else if (min === 9){
        min = "09"
    }
    else {
        return min;
    }

}
setMin();

var currenttime = hour + ":" + min + " " + time;
    document.getElementById("time").innerHTML = currenttime;
  
}


function checkn(){
    var p = document.getElementById("new");
    if (p.type === "password"){
     p.type = "text";
    }
    else{
        p.type = "password"
    }

}
function checkc(){
    var p = document.getElementById("confirm");
    if (p.type === "password"){
     p.type = "text";
    }
    else{
        p.type = "password"
    }

}
function check(){
    var p = document.getElementById("pw");
    if (p.type === "password"){
     p.type = "text";
    }
    else{
        p.type = "password"
    }


}
function checkn(){
    var p = document.getElementById("pasw");
    if (p.type === "password"){
     p.type = "text";
    }
    else{
        p.type = "password"
    }

}        
