function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(565,350);
    video = createCapture(VIDEO);
    video.hide();
    video.size(600,500);
}

function draw(){
    image(video, 0, 0, 600, 500);

}