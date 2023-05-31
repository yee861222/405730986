//定義一個bullet物件的class

class Bullet{
    constructor(args){  //預設值
        this.r=args.r||20 //若沒傳參數就以直徑20為主
        this.p=args.p|| createVector(width/2,height/2)  //建立一個向量，{x:width/2,y:height/2}
        this.v=args.v|| createVector(mouseX-width/2,mouseY-height/2).limit(10)
        this.color="d00000"
  
    }
    draw(){  //繪出物件程式碼
        push()
        
           translate(this.p.x,this.p.y)
            rotate(this.angle);
            rect(-5, -2.5, 10, 5);
            fill(255,239,0);
            stroke(255,0,0);
             triangle(0, -20, 40, 20, 0, 0);
             
           
           
        pop()
    }
    update(){  //計算出移動的位置
        this.p.add(this.v)
    }
  }