//CHECK PIXEL DENSITY

var img;
var slider;

//preload will load before setup runs
function preload() {

  img = loadImage("brandon.png"); //chooses jpg
  slider = createSlider(50, 255, 100); //slider for changing saturaton
  slider.position(20, 20);
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0); //draw the image to the canvas
  console.log("Image width: " + img.width + " height: " + img.height); //show size in console
}

function draw() {
  var val = slider.value();
  loadPixels();

  for (var i = 0; i < pixels.length; i+=4) { //seperates the image into 4 different transparencies
    if (pixels[i] > 191) {
      pixels[i+3] = 255;
    } else if (pixels[i] > 127) {
      pixels[i+3] = 191;
    } else if (pixels[i] > 20) {
      pixels[i+3] = 127;
      } else {
      pixels[i+3] = 63;
    };
  }

  updatePixels();

//different stripes of transparent colors.  Transparency changed by slider

   loadPixels();
   for(var i=4*img.width*0;i<4*img.width*(img.height*0.5);i+=4) {
     pixels[i] = pixels[i]-50;
     pixels[i+3] = val
   }
   updatePixels();

   loadPixels();
   for(var i=4*img.width*(img.height*0.5);i<4*img.width*(img.height);i+=4) {
     pixels[i+1] = pixels[i+1]+50;
     pixels[i] = pixels[i+1]+50;
     pixels[i+3] = val
   }
   updatePixels();
  //
   loadPixels();
   for(var i=4*img.width*img.height;i<4*img.width*img.height*1.5;i+=4) {
     pixels[i+2] = pixels[i+2]+200;
     pixels[i+1] = pixels[i+1]+30
     pixels[i+3] = val
   }

   updatePixels();
  //
   loadPixels();
   for(var i=4*img.width*img.height*1.5;i<4*img.width*img.height*2;i+=4) {
     pixels[i] = pixels[i]+100;
     pixels[i+3] = val
   }

   updatePixels();

   loadPixels();
   for(var i=4*img.width*img.height*2;i<4*img.width*img.height*2.5;i+=4) {
     pixels[i+1] = pixels[i+1]+100;
     pixels[i+3] = val
   }

   updatePixels();

   loadPixels();
   for(var i=4*img.width*img.height*2.5;i<4*img.width*img.height*3;i+=4) {
     pixels[i] = pixels[i]+30;
     pixels[i+2] = pixels[i+2]+90;
     pixels[i+3] = val
   }

   updatePixels();

}
