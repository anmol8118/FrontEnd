var score = 0;
var sma = 600;
var smi = 300;
var Enemy = function(x, y){
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = this.get_speed();
};

Enemy.prototype.update = function(dt){
    if(this.x < 500)
         this.x += this.speed * dt;
    else {
         this.x = -100;
        this.speed = this.get_speed();
    }
};
Enemy.prototype.get_speed = function(){
    var s = Math.floor(Math.random()*(sma-smi+1)+smi);
    return s;
}
Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
document.addEventListener('keyup', function(e){
    var allowedKeys ={
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

var Player = function(x, y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(){
    var i;
    for(i = 0; i < allEnemies.length; i++){
             if((this.y == allEnemies[i].y) && (this.x < allEnemies[i].x + 101) && (this.x + 101 > allEnemies[i].x))
                this.reset();
            }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.reset = function(){
    this.x = 200;
    this.y = 400;
};

Player.prototype.handleInput = function(key){
    if(key == 'left'){
        if(this.x > 0) this.x = 100;
    }
        else if(key == 'right'){
            if(this.x  < 400)
                this.x = this.x + 100;
        }
    else if(key == 'up'){
        if(this.y > 40){
            this.y = this.y - 90;
        }
        else{
            score = score + 1;
            $('#sc').text(score);
            this.reset();
        }
    } else if(key == 'down'){
        if(this.y < 400){
            this.y = this.y + 90;
        }
    }
};

var allEnemies = [
new Enemy(0, 40),
new Enemy(0, 130),
new Enemy(0, 220),
];

var player = new Player(200, 400);