/**
 * [Player class]
 * @param {[type]} x [description]
 * @param {[type]} y [description]
 */
var Player = function(x, y) {
	this.x = x; // now im thinking that maybe we should instead change these to map grid coordinates
	this.y = y; // now im thinking that maybe we should instead change these to map grid coordinates
	this.initiative = 1; // this is a statistic used for determining player turn in default playerturn.js
	this.moveSpeed = 4; // sort of useless stat, how fast they move on the map (px/frame).
	this.turnCounter = 0;
	this.spriteSheet =  new createjs.SpriteSheet({
		"images": [loader.getResult("player")],
		"frames": {
			"width": 32,
			"height": 32,
			"count": 16
		},
		"animations": {
			"stand-front": {
				"frames": [0],
				"next": "stand-front",
				"speed": 1
			},
			"stand-left": {
				"frames": [4],
				"next": "stand-left",
				"speed": 1
			},
			"stand-right": {
				"frames": [8],
				"next": "stand-right",
				"speed": 1
			},
			"stand-back": {
				"frames":[12],
				"next": "stand-back",
				"speed": 1
			},
			"spin-left": {
				"frames": [0,8,12,4],
				"next": "spin",
				"speed": 1
			},
			"spin-right": {
				"frames": [0,4,12,8],
				"next": "spin",
				"speed": 1
			},
			"walk-front": {
				"frames": [1,2,3,2],
				"next": "walk-front",
				"speed": 1
			},
			"walk-left": {
				"frames": [5,6,7,6],
				"next": "walk-left",
				"speed": 1
			},
			"walk-right": {
				"frames": [9,10,11,10],
				"next": "walk-right",
				"speed": 1
			},
			"walk-back": {
				"frames": [13,14,15,14],
				"next": "walk-back",
				"speed": 1
			},
			"run-front": {
				"frames": [1,3],
				"next": "run-front",
				"speed": 1
			},
			"run-left": {
				"frames": [5,6,7,6],
				"next": "run-left",
				"speed": 3
			},
			"run-right": {
				"frames": [9,10,11,10],
				"next": "run-right",
				"speed": 3
			},
			"run-back": {
				"frames": [13,15],
				"next": "run-back",
				"speed": 1
			}
		}
	});
	this.animations = new createjs.Sprite(this.spriteSheet, "run-front"); // change the second string to an animation from the spritesheet
	this.animations.x = this.x;
	this.animations.y = this.y;
	this.watchedElements = [];

	// add our animations to global gamestage:
	gamestage.addChild(this.animations);

	/**
	 * [tickActions run on each frame rendering in main loop]
	 * @return {[type]} [description]
	 */
	this.tickActions = function() {

	};

	/**
	 * [turn code that gets called when it's the players turn. should probably initialize a menu or something]
	 * @return {[type]} [description]
	 */
	this.turn = function() {
		console.log('player turn called');
		renderer.moveTo(this, 600, 600);
	};
};