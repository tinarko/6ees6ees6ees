class RetiredForagerBee extends ForagerBee{
  constructor () {
  	super();

  	this.age = 40;
  	this.job = 'gamble';
  	this.canFly = false;
  	this.color = 'grey';
  }

  forage() {
  	super.forage();
	return 'I am too old, let me play cards instead';
  }
  gamble() {
  	this.treasureChest.push('treasure');
  }
};
