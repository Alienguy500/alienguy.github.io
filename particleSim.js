// Particle Simulator

class Vector { // a simple 2D vector
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    add(vector2) {
        var dx = this.x+vector2.x;
        var dy = this.y+vector2.y;
        var result = new Vector(dx,dy);
        return result;
    }
    scale(value) {
        var x = this.x*value;
        var y = this.y*value;
        return new Vector(x,y);
    }
}


class Particle {
    constructor(position, motion) {
        this.position = position;
        this.motion = motion;
        this.node = (function(){
            var n = document.createElement("div");
            n.className = "particle";
            document.body.appendChild(n);
            return n;
          }());
    }
    drawSelf() {
        this.node.style.left = this.position.x + "px";
        this.node.style.top = this.position.y + "px";
    }
    move() {
        this.position = this.position.add(this.motion);
    }
    accelerate(acceleration) {
        this.motion = this.motion.add(acceleration);
    }
}

var particles = []

function initiate() {
    for (var i = 0; i < 12; i++) {
        var randomx = Math.floor(Math.random() * 1000);
        var randomy = Math.floor(Math.random() * 1000);
        var newPosition = new Vector(randomx,randomy);
        var newVelocity = new Vector(0,0);
        var p = new Particle(newPosition,newVelocity);
        particles.push(p);
    }
}

function drawParticles() {
    particles.forEach(function(particle,index,particles) {
        
        particle.accelerate(new Vector(0, 1));
        
        if (particle.position.y < 1500 && particle.position.add(particle.motion).y > 1500) {
            particle.position.y = 0;
        }
        
        particle.motion = particle.motion.scale(0.9)

        particle.move();
        particle.drawSelf();
    })
}

function display() {
    drawParticles();
}

initiate();

display();