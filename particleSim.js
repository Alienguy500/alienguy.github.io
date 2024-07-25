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
    subtract(vector2) {
        var dx = this.x-vector2.x;
        var dy = this.y-vector2.y;
        return new Vector(dx,dy);
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

function getDistance(pos1,pos2) { // Get the Euclidean distance between two points on the screen in pixels
    return Math.sqrt(((pos1.x-pos2.x)**2)+((pos1.y-pos2.y)**2));
}

function goTowards(pos1,pos2) {
    var distance = getDistance(pos1,pos2);
    var result = new Vector;
    result = pos2.subtract(pos1);
    result = result.scale(1/distance);
    return result;
}

function initiate() {
    for (var i = 0; i < 20; i++) {
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
        
        var mousePos = new Vector(mouse.x,mouse.y)

        particles.forEach(function(particlee, index, particles) {
            if (getDistance(particle.position,particlee.position) != 0 && getDistance(particle.position,particlee.position) < 10) {
                particle.accelerate(goTowards(particle.position,particlee.position).scale(1/(getDistance(particle.position,particlee.position))**2));
            }
        })

        //particle.accelerate(new Vector(0, 1));

        if (getDistance(particle.position,mousePos) > 10) {
            particle.accelerate(goTowards(particle.position,mousePos).scale((getDistance(particle.position,mousePos)-300)/100));
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