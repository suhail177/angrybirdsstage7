class Chain{
    //assigning properties between 2 bodies.
    constructor(bodyA,bodyB){
        var options = {
            //accepting the first body
            bodyA:bodyA,
            //accepting the second body
            bodyB:bodyB,
            //assigning elasticity and length.
            stiffness:0.04,
            length:10
        }
        //adding chain to constraint in Matter.Constraint
        this.chain = Constraint.create(options);
        //adding the body(that is chain) to the World.
        World.add(world,this.chain);
    }
    display(){
        //displaying the position of bodyA and bodyB attached to the chain
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        //giving the thickness to the attaching body
        strokeWeight(4);
        //join two bodies with the help of line.
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}