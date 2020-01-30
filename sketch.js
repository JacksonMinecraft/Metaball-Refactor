var blobs = [], arr = 0, h = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  for (var i = 0; i < 6; i++) {
    blobs.push(new Blob(random(0, window.innerWidth), random(0, window.innerHeight)));
    h.push(random(0, 360));
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    if (blobs.length === 10) {
      blobs.splice(arr, 1, new Blob(random(0, window.innerWidth), random(0, window.innerHeight)));
      h.splice(arr, 1, random(0, 360));
      arr++;
      if (arr === 10) {
        arr = 0;
      }
    } else {
      blobs.push(new Blob(random(0, window.innerWidth), random(0, window.innerHeight)));
      h.push(random(0, 360));
    }
  }
  console.log(blobs.length);
}

function draw() {
  background(0);

  for (i = 0; i < blobs.length; i++) {
    for (j = blobs[i].r; j > 0; j--) {
      stroke(j - 50 + h[i], 255, 255);
      ellipse(blobs[i].x, blobs[i].y, j * 2, j * 2);
    }
    blobs[i].update();
  }
}
