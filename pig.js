class Pig{
    constructor(x,y){

        var op={
            restitution:0.8
        }
        
        this.body=Bodies.rectangle(x,y,50,50,op)
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("green")
        rect(0,0,50,50)
        pop()
    }


}