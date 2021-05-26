

// ----------------------------------------------------
//  Style the <body> element...

const body = document.getElementsByTagName('body')[0];

const bodyStyle = {
     backgroundColor:'rgb(124, 177, 212)'
}

 Object.assign(body.style, bodyStyle);


// --------------------------------------------------------
//  Create the Sun element

const sky = document.getElementById('sky');

const skyStyle = {
    width: '100%',
    height: '70%',
    backgroundColor: '',
    position:'absolute',
    top: '0',
    left: '0',
    animation: 'SkyColors 30s infinite'
}

Object.assign(sky.style,skyStyle);

// -----------------------------------------------------
// Create the Sun element...

sky.innerHTML = "<div id='sun'></div>";
const sun = document.getElementById('sun');

const sunStyle = {
    width: '50px',
    height: '50px',
    backgroundColor: 'yellow',
    position: 'absolute',
    borderRadius: '50%',
    animation: 'SunMovement 30s infinite'
}

Object.assign(sun.style,sunStyle);


// -----------------------------------------------------
// Create the actual Sun...

sun.innerHTML = `<canvas id='sunElement' width="100px" height="100px" style= " position:absolute;
                                                                               top:25px;
                                                                               left:25px;
                                                                               transform:translate(-50%,-50%); "  >
                </canvas>`;


const theSun = sunElement.getContext('2d');
theSun.beginPath();
theSun.arc(50,50,25,0,2*Math.PI);
theSun.fillStyle = "rgba(251, 247, 6, 0.5)";
theSun.strokeStyle = "rgba(251, 247, 6, 0.5)";
theSun.stroke();
theSun.fill();


const sunbeam1 = sunElement.getContext('2d');
sunbeam1.beginPath();
sunbeam1.moveTo(50, 80);
sunbeam1.lineTo(50, 95);
sunbeam1.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam1.stroke();


const sunbeam2 = sunElement.getContext('2d');
sunbeam2.beginPath();
sunbeam2.moveTo(50, 20);
sunbeam2.lineTo(50, 5);
sunbeam2.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam2.stroke();


const sunbeam3 = sunElement.getContext('2d');
sunbeam3.beginPath();
sunbeam3.moveTo(80, 50);
sunbeam3.lineTo(95, 50);
sunbeam3.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam3.stroke();


const sunbeam4 = sunElement.getContext('2d');
sunbeam4.beginPath();
sunbeam4.moveTo(20, 50);
sunbeam4.lineTo(5, 50);
sunbeam4.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam4.stroke();


const sunbeam5 = sunElement.getContext('2d');
sunbeam5.beginPath();
sunbeam5.moveTo(20, 80);
sunbeam5.lineTo(5, 95);
sunbeam5.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam5.stroke();


const sunbeam6 = sunElement.getContext('2d');
sunbeam6.beginPath();
sunbeam6.moveTo(80, 20);
sunbeam6.lineTo(95, 5);
sunbeam6.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam6.stroke();


const sunbeam7 = sunElement.getContext('2d');
sunbeam7.beginPath();
sunbeam7.moveTo(20, 20);
sunbeam7.lineTo(5, 5);
sunbeam7.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam7.stroke();


const sunbeam8 = sunElement.getContext('2d');
sunbeam8.beginPath();
sunbeam8.moveTo(80, 80);
sunbeam8.lineTo(95, 95);
sunbeam8.strokeStyle = "rgba(251, 247, 6, 0.5)";
sunbeam8.stroke();





// -----------------------------------------------------
//  Create the Grownd...

const grownd = document.getElementById('grownd');

const growndStyle = {
    width: '100%',
    height: '40%',
    backgroundColor: 'rgb(52, 109, 40)',
    position: 'absolute',
    left:'0',
    bottom:'0',
    backgroundSize: '100% 100%'
};

Object.assign(grownd.style, growndStyle);



// -----------------------------------------------------
//  Create the Flower element...


grownd.innerHTML += "<div id='flowerElement'></div>";
const flower = document.getElementById('flowerElement');

const flowerStyle = {
    width: '300px',
    height: '500px',
    backgroundColor: '',
    position: 'absolute',
    left:'65%',
    top:'0',
    transform: 'translate(-50%, -65%)'
}

Object.assign(flower.style, flowerStyle);



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


// --------------------------------------------------------
//  Create the actual Flower using CANVAS


flower.innerHTML = `<canvas id='flowerDraw' width="300px" height="500px" style="background-color:" ></canvas>`;
const flowerDraw = document.getElementById('flowerDraw');


// Flowers center

const fl0 = flowerDraw.getContext('2d');

fl0.beginPath();
fl0.arc(150,150,35,0,2*Math.PI);
fl0.fillStyle = "rgb(219, 212, 197)";
fl0.strokeStyle = "black";
fl0.lineWidth = 1;
fl0.stroke();
fl0.fill();

// Flowers petalo

const fl1 = flowerDraw.getContext('2d');

fl1.beginPath();
fl1.arc(90,150,20,0,2*Math.PI);
fl1.fillStyle = 'purple';
fl1.strokeStyle = "black";
fl1.stroke();
fl1.fill();


// Flowers petalo

const fl2 = flowerDraw.getContext('2d');

fl2.beginPath();
fl2.arc(210,150,20,0,2*Math.PI);
fl2.fillStyle = 'purple';
fl2.strokeStyle = "black";
fl2.stroke();
fl2.fill();

// Flowers petalo

const fl3 = flowerDraw.getContext('2d');

fl3.beginPath();
fl3.arc(150,90,20,0,2*Math.PI);
fl3.fillStyle = 'purple';
fl3.strokeStyle = "black";
fl3.stroke();
fl3.fill();


// Flowers petalo

const fl4 = flowerDraw.getContext('2d');

fl4.beginPath();
fl4.arc(150,210,20,0,2*Math.PI);
fl4.fillStyle = 'purple';
fl4.strokeStyle = "black";
fl4.stroke();
fl4.fill();

// Flowers petalo

const fl5 = flowerDraw.getContext('2d');

fl5.beginPath();
fl5.arc(107,107,20,0,2*Math.PI);
fl5.fillStyle = 'purple';
fl5.strokeStyle = "black";
fl5.stroke();
fl5.fill();


// Flowers petalo

const fl6 = flowerDraw.getContext('2d');

fl6.beginPath();
fl6.arc(193,105,20,0,2*Math.PI);
fl6.fillStyle = 'purple';
fl6.strokeStyle = "black";
fl6.stroke();
fl6.fill();

// Flowers petalo

const fl7 = flowerDraw.getContext('2d');

fl7.beginPath();
fl7.arc(193,193,20,0,2*Math.PI);
fl7.fillStyle = 'purple';
fl7.strokeStyle = "black";
fl7.stroke();
fl7.fill();


// Flowers petalo

const fl8 = flowerDraw.getContext('2d');

fl8.beginPath();
fl8.arc(107,193,20,0,2*Math.PI);
fl8.fillStyle = 'purple';
fl8.strokeStyle = "black";
fl8.stroke();
fl8.fill();

// Flowers branch

const flBranch = flowerDraw.getContext('2d');

flBranch.beginPath();
flBranch.moveTo(150, 231);
flBranch.lineTo(150, 450);
flBranch.strokeStyle = "rgb(16, 53, 16)";
fl0.lineWidth = 5;
flBranch.stroke();



// -----------------------------------------------------
//  Create the Houses elements...

const HouseDiv = document.createElement('div');
HouseDiv.id = 'firstHouseElement';
HouseDiv.innerHTML = `<canvas id='firstHouserDraw' width="100px" height="110px" style="background-color: " ></canvas>`;
grownd.insertAdjacentElement('beforeend', HouseDiv);

const firstHouse = document.getElementById('firstHouseElement');

const firstHouseStyle = {
    width: '100px',
    height: '110px',
    backgroundColor: '',
    position: 'absolute',
    left:'20%',
    top:'0%',
    transform: 'translate(-50%, -75%)'
}

Object.assign(firstHouse.style, firstHouseStyle);

// --------------------------------------------------------
//  Create the actual House using CANVAS

const firstHouserDraw = document.getElementById('firstHouserDraw');


const roof1 = firstHouserDraw.getContext('2d');

roof1.beginPath();
roof1.moveTo(100, 50);
roof1.lineTo(50, 0);
roof1.lineTo(0, 50);
roof1.lineTo(100, 50);
roof1.fillStyle = "rgb(65, 45, 45)";
roof1.fill();
roof1.strokeStyle = "black";
roof1.stroke();


const house = firstHouserDraw.getContext('2d');

house.beginPath();
house.moveTo(80, 110);
house.lineTo(80, 50);
house.lineTo(20, 50);
house.lineTo(20, 110);
house.lineTo(80, 110);
house.fillStyle = "rgb(133, 93, 93";
house.fill();
house.strokeStyle = "black";
house.stroke();










