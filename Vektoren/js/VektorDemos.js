function simulateWithId(canvasId) {
    let canvas = document.getElementById(canvasId),
        context = canvas.getContext("2d");

    canvas.style.position = 'absolute';
    simulate(canvas, context);
}

function simulate(canvas, context) {
    let divParent = canvas.parentElement;
    let width = canvas.width = divParent.clientWidth,
        height = canvas.height = 3 * width / 4;

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.arc(width / 2, height / 2, 20, 0, Math.PI * 2, false);
        context.fill();

        requestAnimationFrame(update);
    }
}