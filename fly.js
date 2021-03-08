class Fly{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.25,
            length:300
        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope)
    }
    
    display(){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB;
    push ();
    strokeWeight(5)
    line (pointA.x,pointA.y,pointB.x,pointB.y);
    pop ();}
    }