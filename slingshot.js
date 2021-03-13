class Slingshot{
    constructor(bodyA,pointA){
        var options = {
            bodyA: bodyA,
            pointB: pointA,
            length: 30,
            stiffness: 0.04
        }
        this.chain=Constraint.create(options);
        this.pointA=pointA;
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
        var point1=this.chain.pointB;
        var point2=this.chain.bodyA.position;
        fill("black");
        strokeWeight(2.5);
        line(point1.x,point1.y,point2.x,point2.y);
        }
    }
        fly(){
        this.chain.bodyA=null;
        }
        attach(body){
        this.chain.bodyA=body;
        }
    }