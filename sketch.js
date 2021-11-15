let array = [];

function setup() {
  createCanvas(400, 400);
  background(60, 8, 82);
  strokeWeight(3);
}

function draw() {
  //if (mouseIsPressed == true){
  //}else {}
  if (mouseIsPressed) {
    //stroke(map(mouseX, 0, 600, 0, 255, true));
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, ,mouseY]);
  }
}

function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    line(array[0][0], array[0][1], array[1][0], array[1][1]);
  }
  return false;
}
