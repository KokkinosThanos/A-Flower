// ----------------------------------------------------
//  Style the <body> element...

const body = document.getElementsByTagName('body')[0];

const bodyStyle = {
     backgroundColor:'blue'
}

 Object.assign(body.style, bodyStyle);


// --------------------------------------------------------
//  Create the Sun element

const sky = document.getElementById('sky');

const skyStyle = {
    width: '100%',
    height: '70%',
    backgroundColor: 'blue',
    position:'absolute',
    top: '0',
    left: '0',
    backgroundImage: 'url(SkyReady.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
}

Object.assign(sky.style,skyStyle);

// -----------------------------------------------------
// Create the Sun element...

sky.innerHTML = "<div id='sun'></div>";
const sun = document.getElementById('sun');

const sunStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: '',
    position: 'absolute',
    borderRadius: '50%',
    animation: 'banner 30s infinite'
}

Object.assign(sun.style,sunStyle);


// -----------------------------------------------------
// Create the actual Sun...

sun.innerHTML = `<canvas id='sunElement' width="100px" height="100px" style= " position:absolute;
                                                                               top:25px;
                                                                               left:25px;
                                                                               transform:translate(-50%,-50%); "  >
                </canvas>`;


let theSun = sunElement.getContext('2d');

theSun.beginPath();
theSun.arc(50,50,25,0,2*Math.PI);
theSun.fillStyle = "rgba(251, 247, 6, 0.5)";
theSun.strokeStyle = "rgba(251, 247, 6, 0.5)";
theSun.stroke();
theSun.fill();

let sunbeam1 = sunElement.getContext('2d');

sunbeam1.beginPath();
sunbeam1.moveTo(50, 80);
sunbeam1.lineTo(50, 95);
sunbeam1.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam1.stroke();

let sunbeam2 = sunElement.getContext('2d');

sunbeam2.beginPath();
sunbeam2.moveTo(50, 20);
sunbeam2.lineTo(50, 5);
sunbeam2.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam2.stroke();

let sunbeam3 = sunElement.getContext('2d');

sunbeam3.beginPath();
sunbeam3.moveTo(80, 50);
sunbeam3.lineTo(95, 50);
sunbeam3.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam3.stroke();

let sunbeam4 = sunElement.getContext('2d');

sunbeam4.beginPath();
sunbeam4.moveTo(20, 50);
sunbeam4.lineTo(5, 50);
sunbeam4.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam4.stroke();



// -----------------------------------------------------
//  Create the Grownd...

const grownd = document.getElementById('grownd');

const growndStyle = {
    width: '100%',
    height: '40%',
    backgroundColor: '#082704',
    position: 'absolute',
    left:'0',
    bottom:'0',
    borderTopRightRadius: '20%',
    borderTopLeftRadius: '20%',
    backgroundImage: 'url(groundTexture.png)',
    backgroundRepeat: 'repeat',
    backgroundPosition: '',
    backgroundSize: ''
};

Object.assign(grownd.style, growndStyle);

// -----------------------------------------------------
//  Create the Flower element...


grownd.innerHTML = "<div id='flowerElement'></div>";
const flower = document.getElementById('flowerElement');

const flowerStyle = {
    width: '300px',
    height: '500px',
    backgroundColor: '',
    position: 'absolute',
    left:'50%',
    top:'0',
    transform: 'translate(-50%, -75%)'
}

Object.assign(flower.style, flowerStyle);




// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// --------------------------------------------------------
//  Create the actual Flower using CANVAS


flower.innerHTML = `<canvas id='flowerDraw' width="300px" height="500px" style="background-color:" ></canvas>`;
const flowerDraw = document.getElementById('flowerDraw');


// Flowers center

let ctx = flowerDraw.getContext('2d');

ctx.beginPath();
ctx.arc(150,150,50,0,2*Math.PI);
ctx.fillStyle = "orange";
ctx.strokeStyle = "black";
ctx.stroke();
ctx.fill();

// Flowers petalo

let ctx1 = flowerDraw.getContext('2d');

ctx1.beginPath();
ctx1.arc(70,150,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();


// Flowers petalo

let ctx2 = flowerDraw.getContext('2d');

ctx2.beginPath();
ctx2.arc(230,150,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();

// Flowers petalo

let ctx3 = flowerDraw.getContext('2d');

ctx3.beginPath();
ctx3.arc(150,70,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();


// Flowers petalo

let ctx4 = flowerDraw.getContext('2d');

ctx4.beginPath();
ctx4.arc(150,230,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();

// Flowers petalo

let ctx5 = flowerDraw.getContext('2d');

ctx5.beginPath();
ctx5.arc(93,93,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();


// Flowers petalo

let ctx6 = flowerDraw.getContext('2d');

ctx6.beginPath();
ctx6.arc(205,93,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();

// Flowers petalo

let ctx7 = flowerDraw.getContext('2d');

ctx7.beginPath();
ctx7.arc(206,207,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();


// Flowers petalo

let ctx8 = flowerDraw.getContext('2d');

ctx8.beginPath();
ctx8.arc(93,205,30,0,2*Math.PI);
ctx.fillStyle = 'white'
ctx1.strokeStyle = "black";
ctx1.stroke();
ctx.fill();

// Flowers branch

let ctxBranch = flowerDraw.getContext('2d');

ctxBranch.beginPath();
ctxBranch.moveTo(150, 260);
ctx.lineTo(150, 450);
// ctxBranch.quadraticCurveTo(25, 25, 25, 300);
ctxBranch.strokeStyle = "black";
ctxBranch.stroke();




