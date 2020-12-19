class Box
{
    constructor(x,y)
    {
        var options = {
            restitution: 0.5,
            density:0.0004,
            friction :0.05


        }
        this.body = Bodies.rectangle(x,y,30,40,options);
        this.width=30
        this.height=40
        this.Visibility = 255
        World.add(world,this.body);
        
    }
    display()
    {
      // console.log (this.body.speed)

        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity)
             pop();
           }
        
      


    }
}


