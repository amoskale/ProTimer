/*!
ProTimer
Copyright (c) 2015, Raphaël Dujardin
All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS ``AS IS'' AND ANY
EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

//ProTimer, a JavaScript powerful timer class.
//Native JavaScript (no jQuery, Prototype nor any other script required).
//Works on old and mobile browsers (only based on the setTimeout function).
//Timers are autoplayable, pausable, stoppable and loopable. They handle "this" arguments for callbacks.

//Constructor : takes its parameters as an object
//Required properties : delay (in milliseconds), callback (function)
//Optional properties : thisArg (defaults to window), loop (boolean, defaults to true), autoplay (boolean, defaults to true)
//The timer will call the specified callback after the specified delay, possibly in loop and with a "this" argument
//If autoplay!==false the constructor automatically runs the timeout, else you will need to call the play method.
function Timer(args) {
	this.delay=args.delay;
	this.callback=args.callback;
	this.thisArg=(typeof args.thisArg!="undefined")?args.thisArg:window;
	this.loop=(typeof args.loop!="undefined")?args.loop:true;
	this.paused=false;
	this.active=false;
	if(args.autoplay!==false) this.play();
}

//play() : Runs the timer if it's not runned or if it's paused or stopped
//If the timer was paused, runs the timer so that it callbacks after the remaining time there was when it was paused
//(this is the difference between pause and stop, if it's stopped it will simply callback after the normal delay).
Timer.prototype.play=function() {
	if(this.active) {
		if(this.paused) {
			this.timeout=setTimeout(this.trigger.bind(this),this.delay-this.pausedTime+this.playedTime);
			this.playedTime=Date.now();
			this.paused=false;
		}
	}
	else {
		this.timeout=setTimeout(this.trigger.bind(this),this.delay);
		this.playedTime=Date.now();
		this.paused=false;
		this.active=true;
	}
};

//pause() : Pauses the timer.
//Resume with the play method.
Timer.prototype.pause=function() {
	if(this.active && !this.paused) {
		this.pausedTime=Date.now();
		this.paused=true;
		clearTimeout(this.timeout);
	}
};

//stop() : Stops the timer.
//Restart with the play method.
Timer.prototype.stop=function() {
	this.paused=false;
	this.active=false;
	clearTimeout(this.timeout);
};

//trigger() : Private method, don't use it directly.
Timer.prototype.trigger=function() {
	if(!this.paused && this.active) {
		this.callback.call(this.thisArg);
		if(this.loop) {
			this.playedTime=Date.now();
			this.timeout=setTimeout(this.trigger.bind(this),this.delay);
		}
	}
};
