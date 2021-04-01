class Sun {
    constructor(image,x,y,distance,width,height) {
        this.image = image;
        this.x=x;
        this.y=y;
        this.distance=distance;
        this.width=width;
        this.height=height
    }
    down() {
        this.y+=this.distance;
    }
    draw(){
        ctx.drawImage(this.image,0,0,this.image.width,this.image.height,this.x,this.y,this.width,this.height);
    }
}
var sun_image=new Image();
var toxic_image=new Image();
sun_image.src="images/sun.png";
toxic_image.src="images/toxic.png";
let sun = new getRandomSun();
function getRandomSun() {
    let random = Math.floor(Math.random()*2);
    console.log(random);
    let randomNum = Math.floor(Math.random()*8)+0;
    let randomWidth = canvas.width*randomNum/10;
    switch (random){
        case 0:
            let sun = new Sun(sun_image,randomWidth,0, 8,100,100);
            return sun;
        case 1:
            let toxic = new Sun(toxic_image,randomWidth,0,8,100,100);
            return toxic;
        }
}