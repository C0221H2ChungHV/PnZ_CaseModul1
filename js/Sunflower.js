class Sunflower {
    constructor(image, x, y, distance, width, height) {
        this.image = image;
        this.x = x;
        this.y = y;
        this.distance = distance;
        this.width = width;
        this.height = height
    }

    moveright() {
        this.x += this.distance;
        if(this.x+this.width>canvas.width){
            this.x=canvas.width-this.width;
        }
    }

    moveleft() {
        this.x -= this.distance;
        if(this.x<0){
            this.x=0;
        }
    }
    draw(){
        ctx.drawImage(this.image,0,0,590,663,this.x,this.y,this.width,this.height);
    }
}
let sunflower_img=new Image();
sunflower_img.src="images/sunflower.png";
let flower=new Sunflower(sunflower_img,canvas.width/2-50,canvas.height-100,20,100,100);
document.addEventListener("keydown",function (evt){
    if(evt.keyCode===39){
flower.moveright();
} else if(evt.keyCode===37){
    flower.moveleft();
}
})
