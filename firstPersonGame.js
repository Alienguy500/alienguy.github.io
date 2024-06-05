class Vector {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(vector2) {
        return new Vector(this.x+vector2.x, this.y+vector2.y, this.z+vector2.z);
    }
    subtract(vector2) {
        return new Vector(this.x-vector2.x, this.y-vector2.y, this.z-vector2.z);
    }
}

function deg2rad(angle) {
    angle /= 180;
    angle *= Math.PI;
    return angle;
}

function rotate(position, centre, angle, axis) {
    position = position.subtract(centre);

    let x1 = 0;
    let y1 = 0;
    let z1 = 0;
    
    switch (axis) {
        case "X":
            x1 = position.x;
            y1 = (position.y*Math.cos(angle)) - (position.z*Math.sin(angle));
            z1 = (position.y*Math.sin(angle)) - (position.z*Math.cos(angle));
            break;
        case "Y":
            x1 = (position.x*Math.cos(angle)) - (position.z*Math.sin(angle));
            y1 = position.y;
            z1 = (position.z*Math.cos(angle)) - (position.x*Math.sin(angle));
            break;
        case "Z":
            x1 = (position.x*Math.cos(angle)) - (position.y*Math.sin(angle));
            y1 = (position.x*Math.sin(angle)) + (position.y*Math.cos(angle));
            z1 = position.z;
    }

    let vector1 = new Vector(x1,y1,z1);
    vector1.add(centre);
    return vector1;    
}