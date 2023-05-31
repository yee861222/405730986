let points = [[2,2],[2.1,1.95],[2.4,1.7],[2.7,1],[3.5,0],[2.7,-1],[2.3,-1.6],[2,-2],[1.7,-1.6],[1,-1],[0,-4],[-1,-1],[-2.5,-1],[-4,-1],[-3,-0.5],[-4,0],[-3,0.5],[-4,1],[-2.5,1],[-1,1],[0,4],[1,1],[1.7,1.6],[2,2]
,[2.1,1.95],[2.4,1.7]]; //list資料，畫一個bird
var fill_colors = "f94144-f3722c-f8961e-f9c74f-90be6d-43aa8b-577590".split("-").map(a=>"#"+a)  //bird填充的顏色
var line_colors = "582f0e-7f4f24-936639-a68a64-b6ad90-c2c5aa-a4ac86-656d4a-414833-333d2900000-ffba08-3f88c5-032b43-136f6338290-a1b5d8-fffcf7-e4f0d0-c2d8b9".split("-").map(a=>"#"+a)   //bird邊框的顏色


var ball
var balls =[] 
var bullet  
var bullets=[]  //目前要處理的物件，暫時放在倉庫裡
var monster  
var monsters=[]  //目前要處理的物件，暫時放在倉庫裡
var score =0   //預設一開始分數為0


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
  for(var i=0;i<10;i=i+1){  //迴圈；從i=0開始，每次加1，直到<20
    ball = new bird({})
    balls.push(ball)   //把物件放入陣列內
  }
  for(var i=0;i<10;i=i+1){  //迴圈；從i=0開始，每次加1，直到<20
    monster = new Monster({})
    monsters.push(monster)   //把物件放入陣列內
  }

}

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
      
   }
  }
}
   for(let bullet of bullets){   //只要是陣列都可以用這種方式處理
    
    bullet.draw()
    bullet.update()
  }

  for(let monster of monsters){   //只要是陣列都可以用這種方式處理
    
    monster.draw()
    monster.update()
    
  }
   textSize(100)
   text(score,1500,100)  //在座邊(50,50)，顯示分數

  // push()  //重新規劃原點(0,0)
  let dx = mouseX -width/2   //dx=>滑鼠點與中心點的距離(X軸)
  let dy = mouseY -height/2   //dy=>滑鼠點與中心點的距離(y軸)
  let angle = atan2(dy,dx)  //dy=>分子；dx=>分母
    translate(width/2,height/2)   //把原點放到視窗的中心
    noStroke() //不要有邊線
    rotate(angle)  //翻轉角度
    scale(1.5)   //調整飛機大小，放大1.5倍
    ///利用兩個橢圓畫出一架飛機
    fill(163,157,174)   //灰色機翼
    ellipse(0,0,50,100)  // 中心點座標(0,0)長邊直徑100，短編直徑50
    fill(70,130,180)    //藍色機身
    ellipse(0,0,100,30)  //中心點座標(0,0)長邊直徑100，短編直徑30
    
  //pop()  
 }


function drawStars(){
background(0);  //背景設成黑色，表示夜空
//繪製星星
for(let i=0;i<5;i++){   
  let x =random(width);   //隨機生成星星的X座標
  let y =random(height);  //隨機生成星星的Y座標
  let size=random(1,5);   //隨機生成星星的大小

  fill(255);  //將星星設成白色
  ellipse(x,y,size,size);
}
}
function mousePressed(){
   //////產生一個物件
  // ball = new Obj({
  //   p:{x:mouseX,y:mouseY}
  // })   //在滑鼠按下的地方，產生一個新的Obj物件
  //balls.push(ball)  //把ball放到balls陣列內
  // for(let ball of balls){   //利用迴圈，檢查每個物件
  //   if(ball.isBallnRanger(mouseX,mouseY)){  
  //     balls.splice(balls.indexOf(ball),1)  //從balls(倉庫)裡面取出被滑鼠按到的物件編號balls.indexOf(ball)，1=>只刪掉一個
  //     score = score + 1
  //   }

  // }
bullet =new Bullet({})  //在滑鼠按下的地方，產生一個新的Bullet
bullets.push(bullet)
bullet_sound.play()
}

