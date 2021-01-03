class Roof{
    constructor(x,y){

        var options={
            isStatic:true
        }

        this.x=x;
        this.y=y;
       
        this.body=Bodies.rectangle(x,y,350,50,options);
        World.add(world,this.body);

       
    }

    display(){

        var pos=this.body.position;

    push();
    translate(pos.x,pos.y);
    stroke("darkbrown")
    fill("lightbrown");
    rectMode(CENTER);
    rect(0,0,400,50);

    pop ( );


            

    }

}
