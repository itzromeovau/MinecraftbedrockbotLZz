const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'GreeWarriorSmp.aternos.me', // Replace with your server IP
  port: 63857, // Replace with your server port
  username: 'DUnnoWhatTOdo',
  offline: true //must be cracked enabled on aternos
});

let botX = 0; // Initial bot position on the x-axis
let botZ = 0; // Initial bot position on the z-axis

client.on('connect', () => {
  console.log('Bot has connected to the server.');

  // Simple example: Bot moves in a square pattern
  let moveCount = 0;
  const moveBot = () => {
    switch (moveCount % 4) {
      case 0:
        botX += 2;
        break;
      case 1:
        botZ += 2;
        break;
      case 2:
        botX -= 2;
        break;
      case 3:
        botZ -= 2;
        break;
    }
    moveCount++;
    client.write('move_player', {
      runtimeEntityId: client.entityId,
      position: {
        x: botX,
        y: 4.5, // Adjust the y-axis value as necessary
        z: botZ,
      },
      pitch: 0,
      yaw: 0,
      headYaw: 0,
      mode: 0,
      onGround: true,
      ridingRuntimeId: 0n,
    });

    setTimeout(moveBot, 2000); // Move every 2 seconds
  };

  moveBot(); // Start moving the bot
});
