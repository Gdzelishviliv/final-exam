document.addEventListener('DOMContentLoaded', function () {
    let dayNightBtn = document.querySelector('.day-night-btn');
    const dayNightBtns = document.querySelector('.day-night-btn1');

    dayNightBtn.addEventListener('click', function () {
        document.body.classList.toggle('day-mode');
        dayNightBtn.classList.toggle('active');
    });
    dayNightBtns.addEventListener('click', function () {
        document.body.classList.toggle('day-mode');
        dayNightBtns.classList.toggle('active');
    });
});
