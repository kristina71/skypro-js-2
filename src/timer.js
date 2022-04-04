const countDownDate = new Date().getTime() + 5 * 60 * 1000;

const x = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = minutes + ':' + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('timer').innerHTML = 'LOSE';
    }
}, 1000);
