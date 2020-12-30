class Box{
    constructor(x,y, width,height){

        var op={
            restitution:0.8
        }
        
        this.body=Bodies.rectangle(x,y,width,height,op)
        this.w=width
        this.h=height
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.w,this.h)
        pop()
    }


}