let upcomingDate = new Date("dec 20, 2023 12:00:00").getTime();
setInterval(() => {
    let curDate = new Date();
    let diff = upcomingDate - curDate;

    let dLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hLeft = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let sLeft = Math.floor((diff % (1000 * 60)) / 1000);

    if (sLeft < 0) {
        stopInterval();
    }

    document.getElementById('days').innerHTML = dLeft;
    document.getElementById('hours').innerHTML = hLeft;
    document.getElementById('minutes').innerHTML = mLeft;
    document.getElementById('seconds').innerHTML = sLeft;
}, 1000);