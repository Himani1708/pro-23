class basket{
    constructor(x,y,width,height){
        var options={
        }

       this.basketbody=Bodies.rectangle(x,y,width,height,options);
       this.basketW=width;
       this.basketH=height;
       World.add(world,this.basketbody)

    }

    display(){
        var pos = this.basketbody.position;
        var angle= this.basketbody.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill("red");
        rect(0,0,this.basketW,this.basketH)
        pop();
    }

    
}