// INTERACTIVE TYPE
const interactiveTypeBlack = (p) => {
  let gridSize = 3;
  const points = [];
  let mutationRange = [-70, 70];
  const initialMutationLowerBound = mutationRange[0];

  p.preload = function() {
    font = 'monospace';
  }

  p.setup = function() {
    var container = document.getElementById('interactive-type');
    p.createCanvas(container.offsetWidth, container.offsetHeight);

    // Define the grid pattern
    const grid = [
        "              ",
        "              ",
        "  .......     ",
        "  .     .     ",
        "  .     .     ",
        "  .  .......  ",
        "  .  .  .  .  ",
        "  .  .  .  .  ",
        "  .......  .  ",
        "     .     .  ",
        "     .     .  ",
        "     .......  ",
        "              ",
        "              ",
        "              ",
    ];

    const d = Math.min(p.height, p.width);
    for (let y = 0; y < d; y += gridSize) {
      if (Math.floor(y / d * 27) % 2) continue;
      for (let x = 0; x < d; x += gridSize) {
        if (Math.floor(x / d * 27) % 2) continue;
        if (grid[Math.floor(y / d * 14)][Math.floor(x / d * 14)] === '.') {
          points.push(p.createVector(x, y));
        }
      }
    }
  }

  p.draw = function() {
    p.background(0);

    count = 0;
    for (let i = 0; i < points.length; i++) {
      let x = points[i].x;
      let y = points[i].y;
      x += p.random(mutationRange[0], mutationRange[1]) * p.random(1.5);
      y += p.random(mutationRange[0], mutationRange[1]) * p.random(1.5);

      p.stroke(127);
      p.fill(0);
      p.circle(x, y, gridSize/2);
    }
  }

  p.mouseWheel = function(event) {
    const rangeStep = 10;
    if (event.delta > 0 && mutationRange[0] < 0) {
      mutationRange = [mutationRange[0] + rangeStep, mutationRange[1] - rangeStep];
      gridSize += 0.1;
    } 
    if (event.delta < 0 && gridSize > 1 && mutationRange[0] > initialMutationLowerBound) {
      mutationRange = [mutationRange[0] - rangeStep, mutationRange[1] + rangeStep];
      gridSize -= 0.1;
    }
  }

  p.windowResized = function() {
    p.resizeCanvas(document.getElementById('interactive-type').offsetWidth, document.getElementById('interactive-type').offsetHeight);
  }
}

let interactiveTypeSketch = new p5(interactiveTypeBlack, 'interactive-type');
