let chart = undefined;

function simulateWithId(canvasId) {
    let canvas = document.getElementById(canvasId),
        context = canvas.getContext("2d");

    canvas.style.position = 'absolute';
    simulate(canvas, context);
}

function simulate(canvas, context) {
    let divParent = canvas.parentElement;
    let width = canvas.width = divParent.clientWidth,
        height = canvas.height = 3 * width / 4,
        springPoint = vector.create(width / 2, height / 2),
        weight = particle.create(Math.random() * width, Math.random() * height,
            50, Math.random() * Math.PI * 2, 0.1);

    weight.radius = 20;
    weight.friction = 0.9;

    canvas.addEventListener("mousemove", function (event) {
        let mousePos = getMousePosInCanvasWithScale(canvas, event);

        springPoint.setX(mousePos.x);
        springPoint.setY(mousePos.y);
    });

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        let distance = springPoint.subtract(weight.position);
        distance.setLength(distance.getLength() - 100);
        let springForce = distance.multiply(0.1);

        weight.velocity.addTo(springForce);

        weight.update();

        context.beginPath();
        context.arc(weight.position.getX(), weight.position.getY(), weight.radius, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.arc(springPoint.getX(), springPoint.getY(), 4, 0, Math.PI * 2, false);
        context.fill();

        context.beginPath();
        context.moveTo(weight.position.getX(), weight.position.getY());
        context.lineTo(springPoint.getX(), springPoint.getY());
        context.stroke();

        weight.doBounce(width, height, 1);

        context.beginPath();
        context.lineWidth = "3";
        context.rect(0, 0, width, height);
        context.stroke();

        requestAnimationFrame(update);
    }
}

function createChartVektor(canvasId, initialization, label, chartType) {
    let canvasElement = document.getElementById(canvasId);
    let ctx = canvasElement.getContext('2d');

    let labels = ['x', 'y', 'z'];
    let amounts = [2, 9, 4];

    if (initialization) {
        chart = new Chart(ctx, {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: label,
                    data: amounts,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        chart.data.datasets[0].data = amounts;
        chart.data.labels = labels;
        chart.update();
    }
}