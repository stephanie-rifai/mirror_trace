//make "start" spot for each image
//counter for 2 mins

var lineLinks = [
"https://i.imgur.com/yLfHkaI.png", "https://i.imgur.com/u7tdy48.png", "https://i.imgur.com/DKF2dDI.png", "https://i.imgur.com/oAQUbs2.png",
"https://i.imgur.com/4oVQ06q.png", "https://i.imgur.com/sZLuHGs.png", "https://i.imgur.com/waCXqn4.png", "https://i.imgur.com/FzoRG7B.png",
"https://i.imgur.com/AZD4FEY.png", "https://i.imgur.com/gl8xekc.png", "https://i.imgur.com/ynAjugT.png", "https://i.imgur.com/NQFPs6g.png",
"https://i.imgur.com/dNygvrc.png", "https://i.imgur.com/DIXpc5s.png", "https://i.imgur.com/DRv2qsY.png", "https://i.imgur.com/OoAUWUP.png",
"https://i.imgur.com/qks74Tv.png", "https://i.imgur.com/TBSc6c8.png", "https://i.imgur.com/UYQhbo2.png", "https://i.imgur.com/RYxdwof.png",

"https://i.imgur.com/7xxSa6t.png", "https://i.imgur.com/RAGWtxv.png", "https://i.imgur.com/y0H6FuR.png", "https://i.imgur.com/3SOCqUr.png",
"https://i.imgur.com/9weOQDK.png", "https://i.imgur.com/J5YI0JL.png", "https://i.imgur.com/2qFX9rF.png", "https://i.imgur.com/UZpL29U.png",
"https://i.imgur.com/Et5t8yO.png", "https://i.imgur.com/WOdS5vY.png", "https://i.imgur.com/VVsUtlg.png", "https://i.imgur.com/OON78M0.png",
"https://i.imgur.com/wMgWnAi.png", "https://i.imgur.com/gkVuV27.png", "https://i.imgur.com/0g5kcDj.png", "https://i.imgur.com/rRGv7Wp.png",
"https://i.imgur.com/DiVt3uN.png", "https://i.imgur.com/GJ1Pmzc.png", "https://i.imgur.com/g4uKU90.png", "https://i.imgur.com/2PCFkIo.png",

"https://i.imgur.com/K1HCwZ8.png", "https://i.imgur.com/BrHAU6p.png", "https://i.imgur.com/HnaVtBh.png", "https://i.imgur.com/1SGxzEe.png",
"https://i.imgur.com/VY6b7wp.png", "https://i.imgur.com/w0q05O7.png", "https://i.imgur.com/M0HSj2P.png", "https://i.imgur.com/a8a1Naa.png",
"https://i.imgur.com/aorqFPa.png", "https://i.imgur.com/RYiYLNG.png", "https://i.imgur.com/tVQW7ng.png", "https://i.imgur.com/20EN0Du.png",
"https://i.imgur.com/Vk5dIQo.png", "https://i.imgur.com/sEPhElS.png", "https://i.imgur.com/RMQxRPW.png", "https://i.imgur.com/NCqnXdt.png",
"https://i.imgur.com/aVgQxSj.png", "https://i.imgur.com/PiZ2HVD.png", "https://i.imgur.com/pNGF2KU.png", "https://i.imgur.com/p0TV3MT.png",

"https://i.imgur.com/NBkyamc.png", "https://i.imgur.com/NxLHJ5a.png", "https://i.imgur.com/W6e7XlP.png", "https://i.imgur.com/aRQlG41.png",
"https://i.imgur.com/hKFZFKp.png", "https://i.imgur.com/U04LkQM.png", "https://i.imgur.com/sv8dgix.png", "https://i.imgur.com/GoQQ0Fr.png",
"https://i.imgur.com/aEUZjJd.png", "https://i.imgur.com/WIj4Jrs.png", "https://i.imgur.com/FNklPa7.png", "https://i.imgur.com/JeEL81m.png",
"https://i.imgur.com/x7gFOsq.png", "https://i.imgur.com/DX9fvgD.png", "https://i.imgur.com/anybXDD.png", "https://i.imgur.com/ZY8fOyA.png",
"https://i.imgur.com/vC8tHqS.png", "https://i.imgur.com/5q8ulGO.png", "https://i.imgur.com/CTeOqgM.png", "https://i.imgur.com/7Cxlrz1.png",

"https://i.imgur.com/Nvq9C2J.png", "https://i.imgur.com/KWGTcew.png", "https://i.imgur.com/QksaiWl.png", "https://i.imgur.com/kxnEHbG.png",
"https://i.imgur.com/KhMWIUk.png", "https://i.imgur.com/10AMyIP.png", "https://i.imgur.com/37VmN56.png", "https://i.imgur.com/As4y8oK.png", 
"https://i.imgur.com/711nvA6.png", "https://i.imgur.com/ucC7vSf.png", "https://i.imgur.com/48Oyxf2.png", "https://i.imgur.com/XF4kr4S.png",
"https://i.imgur.com/mxCyt3F.png", "https://i.imgur.com/6o1djYv.png", "https://i.imgur.com/OQ90eoC.png", "https://i.imgur.com/1attmiH.png",
"https://i.imgur.com/86m4I1X.png", "https://i.imgur.com/D5b00mC.png", "https://i.imgur.com/Lfrn15h.png", "https://i.imgur.com/Aa2CGcy.png"
]


//important variables
var score = 0;
var pCorrect = 0;
var pIncorrect = 0;
var startSpot = false;


//for drawing lines between ellipses
var xarray = [];
var yarray = [];
//for images
var lineLinks1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37 ,38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];

function preload() {
    //Preload images
    for (i = 0; i<=lineLinks.length-1; i++) { //preload lines 
        lineLinks1[i] = loadImage(lineLinks[i]);
    }
}

// getPixel: fast access to pixel at location x, y from image 
function getPixel(image, x, y) {
    var i = 4 * (y * image.width + x);
    return color(image.pixels[i], image.pixels[i + 1], image.pixels[i + 2]);
}

function setup() {
    createCanvas(1000, 800);
    //how images are converted to pixel arrays
    pixelDensity(1);
    currentImage = lineLinks1[0];
    currentImage.loadPixels();
}

function draw() {
    background(200, 200, 200);
    //button for easier choice
    stroke(0);
    textAlign(CENTER);
    textSize(25);
    fill(250, 150);
    rect(width/2 + 295, height/3, 200, 60);
    fill(0);
    text("Simpler Shape", width/2+395, height/3+40);

    //render current images to canvas
    image(currentImage, 0, 0);
 
    var pScore = floor(pCorrect/(pCorrect+pIncorrect)*100);

    // Initialize important variables. 
    var currentImageW = currentImage.width; 
    var currentImageH = currentImage.height;
    var greenPixelX = 0; //brightestPixelX starts at 0
    var greenPixelY = 0; //brightestPixelY starts at o

    /*//For evaluating images to find green dot
    for (x=0; x<=currentImageW; x+=10) { //evaluate x pixels
        for (y=0; y<=currentImageH; y+=10) { //evaluate y pixels
            //if x and y are bigger than the current brightest pixels
            if (brightness(getPixel(currentImage, x, y))>63 && brightness(getPixel(currentImage, x, y))<64) {
                greenPixelX = x; //set value of brightestpixelX to x 
                greenPixelY = y; //set value of brightestpixelY to y
            }
        }
    }
    //color for the "start" dot
    fill(0, 138, 230, 150);
    noStroke(0);
    ellipse(width-greenPixelX-285, height-greenPixelY-82, 20, 20);*/

    stroke(0);
    fill(0);
    text('Score: ' + score, 800, 100);
    text('Percent ' + pScore + '%', 800, 150);

        //Drawing lines and changing colors
        for (i = 0; i<xarray.length; i++) {
            ellipse(xarray[i], yarray[i], 0.25, 0.25);
            // adding lines between ellipses 
            strokeWeight(2);
            line(xarray[i], yarray[i], xarray[i+1], yarray[i+1]);
            if(brightness(getPixel(currentImage, xarray[i], yarray[i])) == 0) {
                stroke('red');
                pCorrect += 1;
            } 
            if(brightness(getPixel(currentImage, xarray[i-1], yarray[i-1])) == 100) {
                stroke('blue');
                pIncorrect += 1;
            }
            if(brightness(getPixel(currentImage, width-mouseX-285, height-mouseY-82))>80 && brightness(getPixel(currentImage, width-mouseX-285, height-mouseY-82))<90 && brightness(getPixel(currentImage, width-mouseX-285+5, height-mouseY-82+5))>80 && brightness(getPixel(currentImage, width-mouseX-285+5, height-mouseY-82+5))<90) {
                fill(0);
                noStroke()
                currentImage = lineLinks1[floor(random(0, lineLinks1.length-1))];
                xarray.splice(0, xarray.length);
                yarray.splice(0, yarray.length);
                currentImage.loadPixels();
                pCorrect = 0;
                pIncorrect = 0;
                score += 1;
            }
        }
}

function mouseDragged() {
    if (mouseX>70.5 && mouseX<720-70.5 && mouseY>70.5 && mouseY<720-70.5) {
        xarray.push(width-mouseX-285);
        yarray.push(height-mouseY-82);
    }
}

function mousePressed() {
    if (mouseX>width/2+295 & mouseX<width/2+495 & mouseY>height/3 & mouseY<height/3+60) {
        //set to choose random image in range of "easy" images
        currentImage = lineLinks1[floor(random(0, 30))];
        //clean array
        xarray.splice(0, xarray.length);
        yarray.splice(0, yarray.length);
        pCorrect = 0;
        pIncorrect = 0;
    }
    currentImage.loadPixels();  

}




