let array = [];
let i;

function setup() {
  createCanvas(400, 400);
  background(60, 8, 82);

  strokeWeight(3);
  noFill();
}

function draw() {
  //if (mouseIsPressed == true){
  //}else {}
  if (mouseIsPressed) {
    background(0);
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    //line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    background(60, 8, 82);
    beginShape();
    for (let i = 0; i < array.length - 1; i++) {
    curveVertex(array[i][0], array[i][1])
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    }


  }

  return false;
}
