var blobs = [], arr = 0;

function setup() {
  createCanvas(300, 300);
  colorMode(HSB);
  for (var i = 0; i < 3; i++) {
    blobs.push(new Blob(random(0, 300), random(0, 300)));
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (blobs.length === 6) {
      blobs.splice(arr, 1, new Blob(random(0, 300), random(0, 300)));
      arr++;
      if (arr === 6) {
        arr = 0;
      }
    } else {
      blobs.push(new Blob(random(0, 300), random(0, 300)));
    }
  }
  console.log(blobs.length);
}

function draw() {
  background(220);

  loadPixels();
  for (x = 0; x < 300; x++) {
    for (y = 0; y < 300; y++) {
      let sum = 0;
      for (i = 0; i < blobs.length; i++) {
        let xDif = x - blobs[i].x;
        let yDif = y - blobs[i].y;
        let d = sqrt(pow(xDif, 2) + pow(yDif, 2));
        sum += 10 * blobs[i].r / d;
      }
      set(x, y, color(sum, 255, 255));
    }
  }
  updatePixels();
  for (i = 0; i < blobs.length; i++) {
    blobs[i].update();
  }
}
