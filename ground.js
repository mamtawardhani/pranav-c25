class Ground{
    constructor(x,y, width,height){

        var op={
            isStatic:true
        }
        
        this.body=Bodies.rectangle(x,y,width,height,op)
        this.w=width
        this.h=height
        World.add(world, this.body)
    }

    display(){
        var pos=this.body.position
        fill("#654321")
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h)
   
    }


}