const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade'
  },
  scene: {
    preload,
    create,
    update
  }
};

let player, cursors;

const game = new Phaser.Game(config);

function preload() {
  this.load.image('player', 'https://labs.phaser.io/assets/sprites/phaser-dude.png');
  this.load.image('ground', 'https://labs.phaser.io/assets/skies/space3.png');
}

function create() {
  this.add.image(400, 300, 'ground');
  player = this.physics.add.sprite(400, 300, 'player');
  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) player.setVelocityX(-200);
  else if (cursors.right.isDown) player.setVelocityX(200);

  if (cursors.up.isDown) player.setVelocityY(-200);
  else if (cursors.down.isDown) player.setVelocityY(200);
}
