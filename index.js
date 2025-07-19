class Sprite {
  constructor({ position, velocity, image }) {
    this.position = position;
    this.velocity = velocity;
    this.image = image;
  }

  draw() {
    ctx.drawImage(this.image, this.position.x, this.position.y);
  }
}

class Boundary {
  constructor({ position }) {
    this.position = position;
    this.width = 48; // Width of each boundary (tile size)
    this.height = 48;
  }

  draw() {
    ctx.fillStyle = "rgba(255, 0, 0, 0.5)"; // Semi-transparent red for visibility
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const collisionsMap = [];
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, i + 70));
}
console.log(collisionsMap.length );
const boundaries = [];
collisionsMap.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 1025) {
      boundaries.push(
        new Boundary({
          position: {
            x: x * 48,
            y: y * 48,
          },
        })
      );
    }
  });
});

// Get canvas and context
const canvas = document.getElementById("canvas-main");
const ctx = canvas.getContext("2d");

// Setup game map
const pelletTownImage = getImage("Pellet_Town.png");
const playerDownImage = getImage("playerDown.png");

// Set coordinates
let backgroundImage = {
  x: -785,
  y: -600,
};

const background = new Sprite({
  position: { x: -735, y: -600 },
  velocity: 3,
  image: pelletTownImage,
});

const keys = {
  w: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  d: {
    pressed: false,
  },
};

function main() {
  animate();

  window.addEventListener("keydown", (event) => {
    const key = event.key;
    switch (key) {
      case "w":
        keys.w.pressed = true;
        break;
      case "a":
        keys.a.pressed = true;
        break;
      case "s":
        keys.s.pressed = true;
        break;
      case "d":
        keys.d.pressed = true;
        break;
      default:
        break;
    }
  });

  window.addEventListener("keyup", (event) => {
    const key = event.key;
    switch (key) {
      case "w":
        keys.w.pressed = false;
        break;
      case "a":
        keys.a.pressed = false;
        break;
      case "s":
        keys.s.pressed = false;
        break;
      case "d":
        keys.d.pressed = false;
        break;
      default:
        break;
    }
  });
}

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  ctx.drawImage(
    playerDownImage,
    0,
    0,
    playerDownImage.width / 4,
    playerDownImage.height,
    canvas.width / 2 - playerDownImage.width / 4 / 2,
    canvas.height / 2 - playerDownImage.height / 2,
    playerDownImage.width / 4,
    playerDownImage.height
  );

  if (keys.w.pressed) {
    background.position.y += background.velocity;
  }

  if (keys.s.pressed) {
    background.position.y -= background.velocity;
  }

  if (keys.a.pressed) {
    background.position.x += background.velocity;
  }

  if (keys.d.pressed) {
    background.position.x -= background.velocity;
  }
}

function getImage(imageName) {
  const assetsImagesPath = "./assets/assets/Images/";
  const image = new Image();
  image.src = assetsImagesPath + imageName;
  return image;
}

main();
