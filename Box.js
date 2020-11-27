class Box{
    constructor(x,y,width,height){
        var ops={
           'restitution':0.1,
            'friction':0.25,
            'isStatic':false
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,ops);
        this.image = loadImage("sprites/Box.jpg");
        this.Visibility = 255;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        if(this.body.speed < 4.5){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        }else{
            World.remove(world,this.body);
            this.Visibility = this.Visibility-10;
            tint(255,this.Visibility);
            image(this.image,0,0,this.width,this.height);
        }
        pop();
  
    }

    score(){
        if(this.Visibility < 0 && this.Visibility>-10 ){
            score++
        }
    }
}