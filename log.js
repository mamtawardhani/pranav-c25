class Log{
    constructor(x,y,height, angle){

        var op={
            restitution:0.8
        }
        
        this.body=Bodies.rectangle(x,y,20,height,op)
     
        this.h=height
        Matter.Body.setAngle(this.body, angle)
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle*180/PI)
        rectMode(CENTER)
        fill("brown")
        rect(0,0,20,this.h)
        pop()
    }


}