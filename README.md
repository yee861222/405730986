# 405730986
HomeWork2


#劃出一個物體#

let points = [[2,2],[2.1,1.95],[2.4,1.7],[2.7,1],[3.5,0],[2.7,-1],[2.3,-1.6],[2,-2],[1.7,-1.6],[1,-1],[0,-4],[-1,-1],[-2.5,-1],[-4,-1],[-3,-0.5],[-4,0],[-3,0.5],[-4,1],[-2.5,1],[-1,1],[0,4],[1,1],[1.7,1.6],[2,2]
,[2.1,1.95],[2.4,1.7]]; 
//list資料，畫一個bird

var fill_colors = "f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590".split("-").map(a=>"#"+a)  
//bird填充的顏色
var line_colors = "582f0e-7f4f24-936639-a68a64-b6ad90-c2c5aa-a4ac86-656d4a-414833-333d2900000-ffba08-3f88c5-032b43-136f6338290-a1b5d8-fffcf7-e4f0d0-c2d8b9".split("-").map(a=>"#"+a)   
//bird邊框的顏色


#設定bird的基本資料#
class bird{  //產生一個物件(bird)
    constructor(){   //設定bird的基本資料
      this.p={x:random(50,width),y:random(height)}  
      //bird活動範圍在視窗的X軸50~400；Y軸0~400
      this.v={x:random(-1,1),y:random(-1,1)}   
      //bird移動的速度
      this.size=random(10,30)  
      //bird的大小多少倍(10~30倍)
      this.color =random(fill_colors)  
      //bird顏色
      this.stroke=random(line_colors)  
      //bird邊框線條的顏色
    }

    draw(){  //劃出單一物體形狀
      push()  //依照我的設定，設定每個單一物件的圓點位置
        translate(this.p.x,this.p.y)  //以該物件位置為原點
        scale(1,-1)
        fill(this.color)
        stroke(this.stroke)
        strokeWeight(4)  //外框粗細
        beginShape()
        for(var k=0;k<points.length-1;k=k+1){
            curveVertex(points[k][0]*this.size,points[k][1]*this.size)  //畫線變得圓弧方式
        }
      endShape()
      pop()  //執行pop()，原點(0,0)設定回到整個視窗的左上角
}

}




#產生迴圈#

var ball
var balls =[] //產生的所有物品

function setup() {
  createCanvas(400, 400);
  for(var i=0;i<20;i=i+1){  //迴圈；從i=0開始，每次加1，直到<20
    ball = new bird()
    balls.push(ball)   //把物件放入陣列內

  }
}

function draw() {
  background(220);
  for(var j=0;j<balls.length;j=j+1){
    ball=balls[j]
    ball.draw()
    ball.update()
  }
}


#讓物體移動#
update(){
  this.p.x=this.p.x+this.v.x
  this.p.y=this.p.y+this.v.y
}

function draw() {
ball.update()
}


#背景改成類似夜空#

function draw() {
  drawStars();  //畫背景星星
  //background(0);
  for(let ball of balls){
    ball.draw()
    ball.update()
  }
}

function drawStars(){
background(0);  //背景設成黑色，表示夜空
#繪製星星#
for(let i=0;i<200;i++){   
  let x =random(width);   //隨機生成星星的X座標
  let y =random(height);  //隨機生成星星的Y座標
  let size=random(1,4);   //隨機生成星星的大小

  fill(255);  //將星星設成白色
  ellipse(x,y,size,size);
}


#讓物件留在畫面裡

update(){
  this.p.x=this.p.x+this.v.x
  this.p.y=this.p.y+this.v.y
  if(this.p.x<=300||this.p.x>=width){  
        //如果bird碰到X軸<=300的地方 
    this.v.x=-this.v.x  
        //讓他反向回來(-this)
  }
  if(this.p.y<=100||this.p.y>=height){  
        //如果bird碰到y軸<=100的地方
    this.v.y=-this.v.y  
        //讓他反向回來(-this)
    }
}

![](https://hackmd.io/_uploads/B1j75hmLh.png)



###利用兩個橢圓畫出一架飛機##
javascript=
   push()  //重新規劃原點(0,0)
  let dx = mouseX -width/2   //dx=>滑鼠點與中心點的距離(X軸)
  let dy = mouseY -height/2   //dy=>滑鼠點與中心點的距離(y軸)
  let angle = atan2(dy,dx)  //dy=>分子；dx=>分母
    translate(width/2,height/2)   //把原點放到視窗的中心
    noStroke() //不要有邊線
    rotate(angle)  //翻轉角度
    scale(1.5)   //調整飛機大小，放大1.5倍
    ///利用兩個橢圓畫出一架飛機
    fill(70,130,180)    //藍色機翼
    ellipse(50,50,100,30)
    fill(163,157,174)   //灰色機身
    ellipse(50,50,50,100)
    
  pop()  

##設定子彈##
javascript=
定義一個bullet物件的class

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

##設定音效與背景音樂
javascript=
    function preload(){
  soundFormats('mp3', 'ogg');
  background_sound = loadSound("sound/background.wav") // 替換為您的音效檔案路徑
  bird_sound=loadSound("sound/bird.mp3")
  bullet_sound=loadSound("sound/shoot.wav")
}
  

function setup() {
  createCanvas(windowWidth, windowHeight);
  background_sound.setVolume(4.5); // 設定音效的初始音量 (4- 4)
  background_sound.loop(); // 循環播放音效
  bullet_sound.setVolume(1.3); // 設定音效的初始音量 (0.0 - 1.0)
    
##製作怪獸
javascript=
    var monster  
    var monsters=[]  //目前要處理的物件，暫時放在倉庫裡
function setup() {
    for(var i=0;i<10;i=i+1){  //迴圈；從i=0開始，每次加1，直到<10
    monster = new Monster({})
    monsters.push(monster)   //把物件放入陣列內
  }
    function draw() {
        for(let monster of monsters){   //只要是陣列都可以用這種方式處理
    
    monster.draw()
    monster.update()
    
  }
##分數模式
javascript=
var score =0   //預設一開始分數為0
        function draw() {
   drawStars();  //畫背景星星
    //background(255);
     for(let ball of balls){
    ball.draw()
     ball.update()
     for(let bullet of bullets){
     if(ball.isBallnRanger(bullet.p.x,bullet.p.y)){  
      balls.splice(balls.indexOf(ball),1)//從balls(倉庫)裡面取出被滑鼠按到的物件編號balls.indexOf(ball)，1=>只刪掉一個
      bullets.splice(bullets.indexOf(bullet),1)
      score = score -1
