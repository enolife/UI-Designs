// Time Script 

function GetClock() {
    var e = new Date,
        t = e.getHours(),
        n = e.getMinutes();
    n <= 9 && (n = "0" + n);
    var o = t + ":" + n;
    document.querySelectorAll('.time').forEach((x) => {
        x.innerHTML = o;
      })
    }
GetClock(), setInterval(GetClock, 1e3);