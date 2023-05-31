var monster_colors = "f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590".split("-").map(a=>"#"+a)  //bird填充的顏色


class Monster{  //宣告一個怪物類別
    constructor(args){  //預設值
        this.r=args.r||100 //若沒傳參數就以直徑20為主
        this.p=args.p|| createVector(random(width),random(height))  //建立一個向量，{x:width/2,y:height/2}
        this.v=args.v|| createVector(random(-1,1),random(-1,1))
        this.color=args.color||random(monster_colors)
        }
        draw(){  //劃出飛碟形狀
            push() 
               translate(this.p.x,this.p.y) 
               fill(monster_colors)
               noStroke()
               ellipse(0,0,100,50)
               ellipse(0,-20, 50);
                pop()
                }
            //   scale(this.v.x<0?-1:1,-1)   //當條件成立，他就是；當條件不成立，則是-1 
        
        update(){
            this.p.add(this.v)
            if(this.p.y<=100||this.p.y>=height){   //如果bird碰到y軸<=100的地方
                this.v.y=-this.v.y  //讓他反向回來(-this)
              }
            }
            isBallnRanger(x,y){  //判斷滑鼠按下位置是否在物件範圍內
                let d =dist(x,y,this.p.x,this.p.y)   //dist=計算兩點(滑鼠按下與物件中心點)之間的距離，放到d變數內
                if(d<4*this.size){
                  return true  //傳回ture的值，代表滑鼠與物件距離小於物件寬度，代表碰觸了
                  }
                  else{
                    return false  //傳回false的值，代表滑鼠與物件距離大於物件寬度，代表沒碰觸
                  }
                
              }
        }
