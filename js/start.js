function startTime() {
    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    var dd = checkTime(today.getDate());
    var mm = checkTime((today.getMonth() + 1)); //January is 0
    var yy = (new Date().toISOString().substr(2,2));
    document.getElementById('clock').innerHTML =
    h + "|" + m + "|" + s;
    document.getElementById('date').innerHTML =
    dd + "/" + mm + "/" + yy;
    if (7 > h) {
        document.getElementById('greeting').innerHTML =
        "Good Evening, Oliver";
    }    
    else if (13 > h) {
        document.getElementById('greeting').innerHTML =
        "Good Morning, Oliver";
    }
    else if (19 > h) {
        document.getElementById('greeting').innerHTML =
        "Good Afternoon, Oliver";
    }
    else {
        document.getElementById('greeting').innerHTML =
        "Good Evening, Oliver";
    }
    var t = setTimeout(startTime, 250);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  