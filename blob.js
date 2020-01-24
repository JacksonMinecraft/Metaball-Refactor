class Blob {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    let angle = random(0, TWO_PI);

    this.xSpeed = random(2, 5) * Math.cos(angle);
    this.ySpeed = random(2, 5) * Math.sin(angle);

    this.r = random(100, 200);
  }

  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > 300) {
      this.xSpeed -= 1;
    } if (this.x < 0) {
      this.xSpeed += 1;
    } if (this.y > 300) {
      this.ySpeed -= 1;
    } if (this.y < 0) {
      this.ySpeed += 1;
    }
  }
}
