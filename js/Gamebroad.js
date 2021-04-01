let bgr = new Image();
let overImg1 = new Image();
let overImg2 = new Image();
let overImg3 = new Image();
let overImg4 = new Image();
let audio1 = new Audio();
let sun_audio = new Audio();
let toxic_audio= new Audio();
audio1.src = "audio/audio1.m4a";
sun_audio.src = "audio/sun.mp3";
toxic_audio.src = "audio/toxic.mp3"
bgr.src = "images/backgound.jpg";
overImg1.src = "images/5.jpg";
overImg2.src = "images/10.jpg";
overImg3.src = "images/15.jpg";
overImg4.src = "images/20.jpg";
let score = 0;
let life = 3;
function gamePlay() {
    audio1.play();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(bgr, 0, 0, canvas.width, canvas.height);
    flower.draw();
    sun.down();
    sun.draw();
       if (sun.y >= (canvas.height - flower.height)) {
            if (sun.x < (flower.x - sun.width/2)) {
                sun = getRandomSun();
            } else if (sun.x > (flower.x + flower.width/2)) {
                sun = getRandomSun();
            } else {
                if (sun.image === sun_image) {
                    score++;
                    sun_audio.play();
                    document.getElementById("score").innerText ="Score: "+score;
                    sun = getRandomSun();
                } else if (sun.image === toxic_image) {
                    life--;
                    toxic_audio.play();
                    document.getElementById("life").innerText ="Life: "+life;
                    sun = getRandomSun();
                }
            }
        }
        if (score>=5&&score<10){
            sun.distance=10;
            flower.distance=25
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.drawImage(overImg1, 0, 0, canvas2.width, canvas2.height);

        } else if(score>=10&&score<15) {
            sun.distance=12;
            flower.distance=30
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.drawImage(overImg2, 0, 0, canvas2.width, canvas2.height);
        }
        else if(score>=15&&score<20){
            sun.distance=14;
            flower.distance=35
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.drawImage(overImg3, 0, 0, canvas2.width, canvas2.height);
        } else if (score>=20&&score<25){
            sun.distance=16;
            flower.distance=40
            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
            ctx2.drawImage(overImg4, 0, 0, canvas2.width, canvas2.height);
        } else if (score===25){
            alert("You Win")
        }
    requestAnimationFrame(gamePlay);
    if (life===0) {
        alert("You lose!!! your score: "+score);
    }
}
   gamePlay();