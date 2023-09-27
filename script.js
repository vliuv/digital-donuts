window.onload = () => {

    setInterval(getTime, 1000);

};

function getTime() {

    //getting time

    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
    document.getElementById("time").style.display = "none";
    
    // console.log(h + m + s);

    //changing cursor for am and pm

    if(h < 12) {
        document.body.style.cursor = "url('images/amcursor.png'), auto";
    } else {
        document.body.style.cursor = "url('images/pmcursor.png'), auto";
    }

    //donuts

    let d1 = document.getElementById("d1");
    let d2 = document.getElementById("d2");
    let d3 = document.getElementById("d3");
    let d4 = document.getElementById("d4");
    let d5 = document.getElementById("d5");
    let d6 = document.getElementById("d6");
    let d7 = document.getElementById("d7");
    let d8 = document.getElementById("d8");
    let d9 = document.getElementById("d9");
    let d10 = document.getElementById("d10");
    let d11 = document.getElementById("d11");
    let d12 = document.getElementById("d12");

    //donut 1
    d1.style.opacity = "1";

    //donut 2
    if(h == 1 || h == 13) {
        d2.style.opacity = "0";
    } else {
        d2.style.opacity = "1";
    }

    //donut 3
    if(h <= 2 && h > 0 || h <= 14 && h >= 13) {
        d3.style.opacity = "0";
    } else {
        d3.style.opacity = "1";
    }

    //donut 4
    if(h <= 3 && h > 0 || h <= 15 && h >= 13) {
        d4.style.opacity = "0";
    } else {
        d4.style.opacity = "1";
    }

    //donut 5
    if(h <= 4 && h > 0 || h <= 16 && h >= 13) {
        d5.style.opacity = "0";
    } else {
        d5.style.opacity = "1";
    }

    //donut 6
    if(h <= 5 && h > 0 || h <= 17 && h >= 13) {
        d6.style.opacity = "0";
    } else {
        d6.style.opacity = "1";
    }

    //donut 7
    if(h <= 6 && h > 0 || h <= 18 && h >= 13) {
        d7.style.opacity = "0";
    } else {
        d7.style.opacity = "1";
    }

    //donut 8
    if(h <= 7 && h > 0 || h <= 19 && h >= 13) {
        d8.style.opacity = "0";
    } else {
        d8.style.opacity = "1";
    }

    //donut 9
    if(h <= 8 && h > 0 || h <= 20 && h >= 13) {
        d9.style.opacity = "0";
    } else {
        d9.style.opacity = "1";
    }

    //donut 10
    if(h <= 9 && h > 0 || h <= 21 && h >= 13) {
        d10.style.opacity = "0";
    } else {
        d10.style.opacity = "1";
    }

    //donut 11
    if(h <= 10 && h > 0 || h <= 22 && h >= 13) {
        d11.style.opacity = "0";
    } else {
        d11.style.opacity = "1";
    }

    //donut 12
    if(h <= 11 && h > 0 || h <= 23 && h >= 13) {
        d12.style.opacity = "0";
    } else {
        d12.style.opacity = "1";
    }

    //adding seconds and minutes and mapping to progress bar
    
    totalS = m*60+s;

    mapS = totalS/(3600/408);

    console.log(mapS);
    document.getElementById("progress").style.width = mapS;

    //progress bar text

    let progressText = document.getElementById("progressText")
    
    if(mapS <= 102) {
        progressText.innerHTML = "Mixing...";
    } else if(mapS > 102 && mapS <= 204) {
        progressText.innerHTML = "Rising...";
    } else if(mapS > 204 && mapS <= 306) {
        progressText.innerHTML = "Frying...";
    } else if(mapS > 306 && mapS <= 408) {
        progressText.innerHTML = "Glazing...";
    }

    if(totalS%2 == 1) {
        progressText.style.opacity = "0";
        progressText.style.transition = "opacity 0.5s ease-in-out";
    } else if(totalS%2 == 0) {
        progressText.style.opacity = "1";
        progressText.style.transition = "opacity 0.7s ease-in-out";
    }
}
