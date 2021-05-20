class Box{
    constructor(x,y,width,height){
        var option = {
            restitution : 0.3,
            mass : 0.7,
            friction : 0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        //help us to display the box
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop()
    }
}
