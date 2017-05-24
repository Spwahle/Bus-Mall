var imgArray = [];
var labelMyImages = [];
var timesOnScreen = [];
var timesBeenClicked = [];
var newClick = document.getElementById('show-image');
var onlyClicks = 0;


var showImg = document.getElementById('show-image');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');


//Img constructor function with attributes
function Images(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath + ' />';
  this.timesShown = 0;
  this.timesClicked = 0;
  //imgArray.push(this);
}

//pushing in array
function BuildArray() {
  imgArray.push(new Images('bag','bag.jpg'));
  imgArray.push(new Images('banana', 'banana.jpg'));
  imgArray.push(new Images('bathroom', 'bathroom.jpg'));
  imgArray.push(new Images('boots', 'boots.jpg'));
  imgArray.push(new Images('breakfast', 'breakfast.jpg'));
  imgArray.push(new Images('bubblegum', 'bubblegum.jpg'));
  imgArray.push(new Images('chair', 'chair.jpg'));
  imgArray.push(new Images('cthulhu', 'cthulhu.jpg'));
  imgArray.push(new Images('dogDuck', 'dogDuck.jpg'));
  imgArray.push(new Images('dragon', 'dragon.jpg'));
  imgArray.push(new Images('pen', 'pen.jpg'));
  imgArray.push(new Images('petSweep', 'petSweep.jpg'));
  imgArray.push(new Images('scissors', 'scissors.jpg'));
  imgArray.push(new Images('tauntaun', 'tauntaun.jpg'));
  imgArray.push(new Images('unicorn', 'unicorn.jpg'));
  imgArray.push(new Images('usb2', 'usb2.gif'));
  imgArray.push(new Images('waterCan', 'waterCan.jpg'));
  imgArray.push(new Images('wineGlass', 'wineGlass.jpg'));
}
//Array of random Numbers
var threeDiffNums = [];

function makeRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function checkRandom () {
  for (var i = 0; i < 3; i++) {
    threeDiffNums.push(makeRand(0, 17));
  }
  while (threeDiffNums[0] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[1] = makeRand(0,17);
  }
  while (threeDiffNums[2] === threeDiffNums[0] || threeDiffNums[2] === threeDiffNums[1]) {
    console.log('Duplicate Found');
    threeDiffNums[2] = makeRand(0,17);
  }
}

function displayImg() {
  showImg.innerHTML = ' ';
  //var showImg = document.getElementById('show-image');
  for (var q = 0; q < threeDiffNums.length; q++) {
    var divEl = document.createElement('div');
    divEl.innerHTML = '<img src=' + imgArray[threeDiffNums[q]].newPath;
    showImg.appendChild(divEl);
    imgArray[threeDiffNums[q]].timesShown++;
  }
}

function gatherChartData() {
  for (i = 0; i < imgArray.length; i++) {
    labelMyImages.push(imgArray[i].imgName);
    timesOnScreen.push(imgArray[i].timesShown);
    timesBeenClicked.push(imgArray[i].timesClicked);
  }
}

var data = {
  labels: labelMyImages,
  datasets: [
    {
      label: 'Times Shown',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: timesOnScreen,
      yAxisID: 'y-axis-0',
    },
    {
      label: 'Times Selected',
      backgroundColor: 'rgba(54,162,235,0.2)',
      borderColor: 'rgba(54,162,235,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(54,162,235,0.4)',
      hoverBorderColor: 'rgba(54,162,235,1)',
      data: timesBeenClicked,
    }
  ]
};

function drawChart() {
  gatherChartData();
  var ctx = document.getElementById('my-chart3');
  console.log(labelMyImages, ctx);
  var resultsChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    //options: options
  });
  //myChart3.appendChild(ctx);
  //chartDrawn = true;
}

// function hideChart() {
//   document.getElementById('my-chart3').hidden = true;
// }

function handleClick() {
  onlyClicks++;
  console.log('Clicked ' + event.target.alt);
  for (var q = 0; q < imgArray.length; q++) {
    if (event.target.alt === imgArray[q].imgName) {
      imgArray[q].timesClicked++;
    }
  }
  threeDiffNums = [];
  checkRandom();
  displayImg();
  if (onlyClicks === 25) {
    document.getElementById('button2').style.visibility = 'visible';
    document.getElementById('button3').style.visibility = 'visible';
    showImg.style.visibility = 'hidden';
  }
}

function handleButton3() {
  console.log('you done clicked on the button');
  document.getElementById('button2').style.visibility = 'hidden';
  document.getElementById('button3').style.visibility = 'hidden';
  showImg.style.visibility = 'visible';
  onlyClicks = 15;
}

function handleButton2() {
  console.log('Done');
  drawChart();
}

newClick.addEventListener('click', handleClick);
button3.addEventListener('click', handleButton3);
button2.addEventListener('click', handleButton2);

document.getElementById('button2').style.visibility = 'hidden';
document.getElementById('button3').style.visibility = 'hidden';

checkRandom();
BuildArray();
displayImg();
