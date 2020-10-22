class Slingshot{
    //assigning properties between 2 bodies.
    constructor(bodyA,pointB){
        var options = {
            //accepting the first body
            bodyA:bodyA,
            //fixing the line on one fixed point
            pointB:pointB,
            //assigning elasticity and length.
            stiffness:0.04,
            length:10
        }
        //adding sling to constraint in Matter.Constraint
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        //adding the body(that is sling) to the World.
        World.add(world,this.sling);
    }
    fly(){
        //it removes movement of bird with the help of mouse.
        this.sling.bodyA = null;
    }
    display(){
        //only when the bird is on the sling.
        if(this.sling.bodyA){
        //displaying the position of bodyA and bodyB attached to the chain
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        //giving the thickness to the attaching body
        strokeWeight(4);
        //join two bodies with the help of line.
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}