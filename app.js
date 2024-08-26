function timer() {
    const finishDate = new Date("2025-03-12T00:00:00").getTime();

    setInterval(function() {
        const now = new Date().getTime();
        const distance = finishDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        updateDisplay("days", days);
        updateDisplay("hours", hours);
        updateDisplay("minutes", minutes);
        updateDisplay("seconds", seconds);

        // به‌روزرسانی عنوان
        document.getElementById("timerTitle").textContent = `تعداد روز باقی‌مانده تا سال 1404: ${days} روز، ${hours} ساعت، ${minutes} دقیقه و ${seconds} ثانیه`;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".clock").textContent = "زمان به پایان رسید!";
        }
    }, 1000);
}

function updateDisplay(id, value) {
    const firstChild = document.querySelector(`#${id} .first .number`);
    const secondChild = document.querySelector(`#${id} .second .number`);

    
    if (secondChild.textContent !== value.toString()) {
        firstChild.classList.add("move");
        setTimeout(() => {
            firstChild.textContent = secondChild.textContent;
            secondChild.textContent = value;
            firstChild.classList.remove("move");
        }, 500);
    }
}

timer();