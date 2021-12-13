let canvas = new fabric.Canvas('demo', {selection: false});
canvas.setDimensions({width: 800, height: 800});
let grid = 20;

const vector1Values = document.getElementById('xScaleOfVector1');
const setValuesButton = document.getElementById('setValues');

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

const vector1 = new fabric.Rect({
    height: grid,
    width: grid,
    fill: 'yellow',
    lockScalingY: true
})
canvas.add(vector1);

// snap to grid
canvas.on('object:moving', function (options) {
    options.target.set({
        left: Math.round(options.target.left / grid) * grid,
        top: Math.round(options.target.top / grid) * grid,
    });
});

canvas.on('object:scaling', function (options) {
    console.log(options.target)
    let width = options.target.width * options.target.scaleX;
    console.log("width="+width)
    options.target.set({
        width: Math.round(width / grid) * grid,
        scaleX: 1
    })
});