class Chain{
    constructor(body1,body2,offsetX,offsetY){

        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB:body2,
          //  stiffness: 0.04,
          //  length: 10,
            pointB:{x:this.offsetX,y:this.offsetY}
    
        }
        
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    
    display(){

        var pointX=this.chain.bodyA.position; //bob position 
        var pointY=this.chain.bodyB.position; //roof position
        
        
        strokeWeight(2)
        //fill("black");
        var attactPointX= pointY.x + this.offsetX;
        //console.log(attactPointX)
        var attachPointY=pointY.y+ this.offsetY;

        line(attactPointX,attachPointY,pointX.x,pointX.y,)

        

        
        

    }
    
}