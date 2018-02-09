//CHECK PIXEL DENSITY

var img;

//preload will load before setup runs
function preload() {
  //this relative file path starts in the same folder as your sketch.
  //In other words, in this example, make a folder called images in the same
  //folder as your sketch file (sketch.js) and then put the image file ("jomy.jpg")
  //inside of that.
  img = loadImage("brandon.png");
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0); //draw the image to the canvas
  console.log("Image width: " + img.width + " height: " + img.height);

  //one of the built-in filters to try out for inspiration! More at: https://p5js.org/reference/#/p5/filter
  //uncomment to test
  //filter(POSTERIZE, 5);


  loadPixels();

  for (var i = 0; i < pixels.length; i+=4) {
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


   //change tint of pixels in a stripe by modifying the red channel
   loadPixels();
   for(var i=4*img.width*0;i<4*img.width*(img.height*0.5);i+=4) {
     pixels[i] = pixels[i]-50; //red
   }
   updatePixels();

   loadPixels();
   for(var i=4*img.width*(img.height*0.5);i<4*img.width*(img.height);i+=4) {
     pixels[i+1] = pixels[i+1]+50;
     pixels[i+2] = pixels[i+1]+50;
   }
   updatePixels();
  //
   loadPixels();
   for(var i=4*img.width*img.height;i<4*img.width*img.height*1.5;i+=4) {
     pixels[i] = pixels[i]+100; //red
   }

   updatePixels();
  //
   loadPixels();
   for(var i=4*img.width*img.height*1.5;i<4*img.width*img.height*2;i+=4) {
     pixels[i+1] = pixels[i]+100; //red
   }

   updatePixels();

   loadPixels();
   for(var i=4*img.width*img.height*2;i<4*img.width*img.height*2.5;i+=4) {
     pixels[i+1] = pixels[i]+100; //red
   }

   updatePixels();

   loadPixels();
   for(var i=4*img.width*img.height*2.5;i<4*img.width*img.height*3;i+=4) {
     pixels[i+1] = pixels[i+1]+100; //red
   }

   updatePixels();

   loadPixels();
   for(var i=4*img.width*3;i<4*img.width*3.5;i+=4) {
     pixels[i+1] = pixels[i]+100; //red
   }

   updatePixels();

  //  loadPixels();
  //  for(var i=4*img.width*2000;i<4*img.width*2400;i+=4) {
  //    pixels[i+1] = pixels[i+1]+200; //red
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*2400;i<4*img.width*2800;i+=4) {
  //    pixels[i+1] = pixels[i+1]+70;
  //    pixels[i]= pixels[i]+40
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*2800;i<4*img.width*3200;i+=4) {
  //    pixels[i+2] = pixels[i+2]+100;
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*3200;i<4*img.width*3600;i+=4) {
  //    pixels[i] = pixels[i]-70;
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*3600;i<4*img.width*4000;i+=4) {
  //    pixels[i+2] = pixels[i+2]+100;
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*4000;i<4*img.width*4400;i+=4) {
  //    pixels[i] = pixels[i]+100;
  //  }
  //
  //  updatePixels();
  //
  //  loadPixels();
  //  for(var i=4*img.width*4400;i<4*img.width*4800;i+=4) {
  //    pixels[i+1] = pixels[i+1]+500;
  //  }
  //
  //  updatePixels();
  // loadPixels();
  // for(let i = 0; i<pixels.length; i+=4) {
  //   pixels[i+2] = 0;
  //   pixels[i+1] = 0;
  //   if (pixels[i]>191)
  //     pixels[i]=200
  //
  // updatePixels();




}




function draw() {

}
