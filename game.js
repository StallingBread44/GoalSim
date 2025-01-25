class HomeScreen extends Phaser.Scene{
    constructor(){
        super('homeScreen');
    }
    preload() {
        // Preload any assets needed for the home screen (e.g., a logo)
        this.load.image('logo', 'logo.png'); // Example logo
    }
    create() {
        // Title Text
        const titleText = this.add.text(window.innerWidth / 2, window.innerHeight / 4,  'GoalSim', {
            fontSize: '160px',
            fontFamily: 'Comic Sans MS',
            color: '#ffffff',
            align: 'center',
        }).setOrigin(0.5)
    
        const logoY = titleText.y + titleText.height + 60;

        const logo = this.add.image(window.innerWidth / 2, logoY, 'logo')
            .setOrigin(0.5) // Centers the logo
            .setScale(1.5);

        const btnY = logo.y + logo.height + 50;

        // Play Button
        const playButton = this.add.rectangle(window.innerWidth / 2, btnY, 200, 50, 0xFFFFFF)
            .setOrigin(0.5)
            .setInteractive(); // Make the button interactive
    
        // Play Button Text
        const plybtnText = this.add.text(window.innerWidth / 2, btnY, 'Play', {
            fontSize: '30px',
            fontFamily: 'Comic Sans MS',
            color: '0',
        }).setOrigin(0.5); // Center text inside button

        playButton.on('pointerdown', () => {
          this.fadeOutAndStartMainGame(); // Trigger the fade-out and start main game
        });
    }
        fadeOutAndStartMainGame() {
          // Add a black rectangle to simulate a fade effect
            const fadeRectangle = this.add.rectangle(0, 0, window.innerWidth, window.innerHeight, 0x000000)
            .setOrigin(0, 0) // Top-left corner
            .setAlpha(0); // Initially invisible
            this.tweens.add({
                targets: fadeRectangle,
                alpha: 1,
                duration: 750, // Duration of the fade effect (1 second)
                ease: 'Linear', // Smooth transition
                onComplete: () => {
                  this.scene.start('mainGame'); // Start the main game scene once fade is complete
                }
        });
    }
}


class MainGame extends Phaser.Scene {
    constructor() {
        super('mainGame');
    }

    preload() {
      // Preload assets for the game (if needed)
    }

    create() {
      // Create the main game elements (e.g., background, player)
        this.add.text(window.innerWidth / 2, window.innerHeight / 2, 
            "Welcome to GoalSim — Your Personal Financial Adventure!\n\n In this immersive simulation, you’ll take control of your own financial journey,\n balancing your budget, managing your expenses and making crucial life decisions.\n Just like in the real world, every choice you make can affect your financial future.\n From finding the best deals to saving for your dreams,\n this game is designed to sharpen your financial literacy and empower you to make smart money moves.\n Whether you’re buying your first car,\n paying off student loans, or planning for retirement,\n GoalSim helps you navigate the complexities of personal finance in a fun and engaging way.\n Ready to take control of your financial future? Let’s dive in", {
        fontSize: '30px',
        fontFamily: 'Arial',
        color: '#ffffff',
        align: 'center',
      }).setOrigin(0.5); // Center the text

      // You can add more game objects here like your player, platforms, etc.
    }

    update() {
      // Main game loop (optional)
    }
}



const config = {
    type: Phaser.AUTO, // Renders with WebGL, falls back to Canvas if unsupported
    width: window.innerWidth, // Width of the game canvas
    height: window.innerHeight, // Height of the game canvas
    backgroundColor: '#1D994E', // Background color of the game
    scale: {
        mode: Phaser.Scale.RESIZE,  // Resize to window dimensions
        autoCenter: Phaser.Scale.CENTER_BOTH, // Center the game
        resolution: 2, // Increase resolution (scale factor)
    },
    physics: {
        default: 'arcade', // Physics engine
        arcade: {
        gravity: { y: 300 }, // Apply gravity to game objects
        debug: false // Show debug information (optional)
    }
    },
    scene: [HomeScreen, MainGame], // Register both scenes here
};

// Initialize the Phaser game
const game = new Phaser.Game(config);



