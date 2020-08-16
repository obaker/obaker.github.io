function startTime() {
    var today = new Date();
    var h = checkTime(today.getHours());
    var m = checkTime(today.getMinutes());
    var s = checkTime(today.getSeconds());
    var dd = checkTime(today.getDate());
    var mm = checkTime((today.getMonth() + 1)); //January is 0!
    var yyyy = today.getFullYear();
    document.getElementById('clock').innerHTML =
    h + ":" + m;
    document.getElementById('date').innerHTML =
    dd + "/" + mm + "/" + yyyy;
    if (6 >= h || h >= 19) {
        document.getElementById('greeting').innerHTML =
        "Good Evening, Oliver"
    }
    else if (7 <= h <= 12) {
        document.getElementById('greeting').innerHTML =
        "Good Morning, Oliver"
    }
    else if (13 <= h <= 18) {
        document.getElementById('greeting').innerHTML =
        "Good Afternoon, Oliver"
    }
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  