console.log('Excercise 5');

class SlothMachine {
  
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;

    const hasWon = this.spin();

    if (hasWon) {
      console.log(`Congrulations!!! You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log('Good luck next time!!');
    }
  }
  spin() {
    return this.randomBool && this.randomBool() && this.randomBool();
  }
  randomBool() {
    return Math.random() >= 0.5
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();