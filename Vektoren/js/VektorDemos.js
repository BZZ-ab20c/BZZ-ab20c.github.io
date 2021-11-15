let canvas = new fabric.Canvas('demo', {selection: false});
canvas.setDimensions({width: 800, height: 800});
let grid = 20;

// create grid
for (let i = 0; i < (600 / grid); i++) {
    canvas.add(new fabric.Line([i * grid, 0, i * grid, 600], {stroke: '#ccc', selectable: false}));
    canvas.add(new fabric.Line([0, i * grid, 600, i * grid], {stroke: '#ccc', selectable: false}))
}

// add objects
canvas.add(new fabric.Rect({
    left: 0,
    top: 0,
    width: 60,
    height: 20,
    fill: '#faa',
    originX: 'left',
    originY: 'top',
    centeredRotation: true
}));

canvas.add(new fabric.Line(
    [0, 0, 80, 0],
    {
        stroke: 'green',
        strokeWidth: 20,
        lockScalingFlip: true,
        lockScalingY: true,
    }
));

// snap to grid
canvas.on('object:moving', function (options) {
    options.target.set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid,
    });
});

canvas.on('object:scaling', function (options) {
    let width = options.target.width * options.target.scaleX;
    options.target.set({
        strokeWidth: Math.round(options.target.left / grid) * grid
    })
});