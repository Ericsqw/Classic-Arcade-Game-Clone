// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y + 50;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.stepX = 101;
    this.limit = this.stepX * 5;
    this.reset = -this.stepX;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if(this.x < this.limit) {
    // Move forward with a step of speed*dt
      this.x += this.speed * dt;
    }
    else {
      //reset bug position to 0
      this.x = this.reset;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


    class Hero {
      constructor() {
        this.sprite = "images/char-boy.png";
        this.stepX = 101;
        this.stepY = 83;
        this.startX = this.stepX * 2;
        this.startY = (this.stepY * 4) + 50;
        this.x = this.startX;
        this.y = this.startY;
        this.winning = false;
      }

      //Position hero sprite based on the current coordinates
      render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
      }

      //Reset Hero
      reset() {
        this.x = this.startX;
        this.y = this.startY;
      }

      update() {
        //Collision will be detected
        for(let enemy of allEnemies) {
          if (this.y === enemy.y && (enemy.x + enemy.stepX/2 > this.x && enemy.x < this.x + this.stepX/2)) {
            this.reset();
          }
        }
        //Check win
        if(this.y === 50) {
          this.winning = true;
        }
      }

      //Coordinates x and y get updated if key input is made
      handleInput(input) {
        switch(input) {
          case 'up':
              if (this.y > this.stepY) {
                this.y -= this.stepY;
              }
              break;
          case 'down':
              if (this.y < this.stepY * 4) {
              this.y += this.stepY;
              }
              break;
          case 'left':
              if (this.x > 0) {
                  this.x -= this.stepX;
              }
              break;
          case 'right':
              if (this.x < this.stepX * 4) {
                  this.x += this.stepX;
              }
              break;
      }
    }
  }

    const player = new Hero();
    const bugA = new Enemy(-101, 0, 200);
    const bugB = new Enemy((-101*2), 83, 150);
    const bugC = new Enemy((-101*4), 83, 150);
    const bugD = new Enemy(-101, 83*2, 200);
    const allEnemies = [];
    allEnemies.push(bugA, bugB, bugC, bugD);
