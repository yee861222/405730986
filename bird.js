class bird{  //產生一個物件(bird)
    constructor(){   //bird基本資料
      this.p={x:random(300,width),y:random(100,height)}  //bird活動範圍在視窗的X軸50~400；Y軸0~400
      this.v={x:random(-2,2),y:random(2,-2)}   //bird移動的速度
      this.size=random(10,18)   //bird的大小多少倍(10~30倍)
      this.color =random(fill_colors)  //bird顏色
      this.stroke=random(line_colors)  //bird邊框線條的顏色
    }
    draw(){  //劃出單一物體形狀
      push()  //依照我的設定，設定每個單一物件的圓點位置
        translate(this.p.x,this.p.y)  //以該物件位置為原點
        scale(this.v.x<0?-1:1,-1)   //當條件成立，他就是；當條件不成立，則是-1
        fill(this.color)
        stroke(this.stroke)
        strokeWeight(2)  //外框粗細
        beginShape()
       for(var k=0;k<points.length-1;k=k+1){
          curveVertex(points[k][0]*this.size,points[k][1]*this.size)  //畫線變得圓弧方式
        }
      endShape()
      pop()  //執行pop()，原點(0,0)設定回到整個視窗的左上角
}
/////讓物體移動
update(){
  this.p.x=this.p.x+this.v.x
  this.p.y=this.p.y+this.v.y
  if(this.p.x<=300||this.p.x>=width){  //如果bird碰到X軸<=300的地方 
    this.v.x=-this.v.x  //讓他反向回來(-this)
  }
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
