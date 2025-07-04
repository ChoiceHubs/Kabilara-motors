function enlarge(img) {
    showpopupImage(img.src);
}

function showpopupImage(src) {
    const popup = document.getElementById("popup-modal");
    const popupImg = document.getElementById("popup-img");
    popupImg.src = src;
    popup.style.display = "block";
}

function closePopup() {
    document.getElementById("popup-modal").style.display = "none";
}

function filtermotors(brand) {
    const allmotors = document.querySelectorAll('.motor-brand');
    allmotors.forEach(motor => {
        if (brand === 'all') {
            motor.style.display = 'block';
        } else if (motor.classList.contains(brand.toLowerCase())) {
            motor.style.display = 'block';
        } else {
            motor.style.display = 'none';
        }
    });
}

function searchMotors() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const allmotors = document.querySelectorAll('.motor-brand');
    allmotors.forEach(motor => {
        const text = motor.innerText.toLowerCase();
        if (text.includes(query)) {
            motor.style.display = 'block';
        } else {
            motor.style.display = 'none';
        }
    });
}

let currentMotorIndex = 0;
let motorElements = [];

function initSlider() {
    motorElements = Array.from(document.querySelectorAll('.motor-brand'));
    showMotor(currentMotorIndex);
}

function showMotor(index) {
    motorElements.forEach((motor, i) => {
        motor.style.display = i === index ? 'block' : 'none';
    });
}

function nextMotor() {
    currentMotorIndex = (currentMotorIndex + 1) % motorElements.length;
    showMotor(currentMotorIndex);
}

function prevMotor() {
    currentMotorIndex = (currentMotorIndex - 1 + motorElements.length) % motorElements.length;
    showMotor(currentMotorIndex);
}

window.onload = () => {
    initSlider();
};