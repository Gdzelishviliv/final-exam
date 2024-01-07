document.addEventListener('DOMContentLoaded', function () {
    const dayNightBtn = document.querySelector('.day-night-btn');

    dayNightBtn.addEventListener('click', function () {
        document.body.classList.toggle('day-mode');
        dayNightBtn.classList.toggle('active');
    });
});
