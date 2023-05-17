images = new Array;
images[0] = "img2.gif";
images[1] = "img3.gif";
images[2] = "img4.gif";
images[3] = "img5.gif";
images[4] = "img6.gif";
images[5] = "img7.gif";
images[6] = "img8.gif";
images[7] = "img9.gif";
images[8] = "img10.gif";

setInterval( function() {
    changeImage()
}, 5000);

x = 0;

function changeImage() {
    document.getElementById('ad').src = images[x];

    if ( x < 8 ) {
        x += 1;
    } else if ( x = 9 ) {
        x = 0;
    }
}

