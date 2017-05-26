'use strict';
//defining array as empty
var productsArray = [];
//defining name of products
var productNamesArray = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon',
  'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
//defining path of pictures in the img file
var productPathsArray = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg',
  'dogDuck.jpg', 'dragon.jpg', 'pen.jpg', 'petSweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.jpg', 'tauntaun.jpg', 'unicorn.jpg', 'usb2.gif', 'waterCan.jpg', 'wineGlass.jpg'];
//defining amount of tries
var totalTries = 25;
var triesCounter = 0;

var pictureSection = document.getElementById('products');
//creating object with predefined vars
function Product(name, pictureFilePath){
  this.name = name;
  this.pictureFilePath = pictureFilePath;
  this.numberOfTimesClicked = 0;
  this.numberOfTimesDisplayed = 0;

  productsArray.push(this);
}
//function runs a loop through lenght of namesarray in which it creates objects via my constructor
function buildArray(){
  for(var i = 0; i < productNamesArray.length; i++){
    var product = new Product(productNamesArray[i], 'img/' + productPathsArray[i]);
  }
}
//function creates a random number to
function randompicture(){
  var random = Math.floor(Math.random() * (productsArray.length));
  return productsArray[random];
}

//function creates 3 pictures in html by creating
function renderpictureSet() {
  var picture1 = document.createElement('img');
  var picture2 = document.createElement('img');
  var picture3 = document.createElement('img');
  var random1 = randompicture();
  var random2 = randompicture();
  var random3 = randompicture();

  while (random2 === random1){
    random2 = randompicture();
  }
  while (random3 === random1 || random3 === random2){
    random3 = randompicture();
  }

  random1.numberOfTimesDisplayed++;
  random2.numberOfTimesDisplayed++;
  random3.numberOfTimesDisplayed++;

  picture1.src = random1.pictureFilePath;
  picture1.id = random1.name;
  picture2.src = random2.pictureFilePath;
  picture2.id = random2.name;
  picture3.src = random3.pictureFilePath;
  picture3.id = random3.name;
  pictureSection.appendChild(picture1);
  pictureSection.appendChild(picture2);
  pictureSection.appendChild(picture3);
}

function showButtons(){
  var resultsButton = document.getElementById('results-button');
  var moreTriesButton = document.getElementById('more-tries-button');
  moreTriesButton.hidden = false;
  resultsButton.hidden = false;
}

function renderChart(){
  var ctx = document.getElementById('results-chart');
  var labels = [];
  var numTimesClicked = [];
  var numTimesDisplayed = [];
  ctx.hidden = false;
  for(var product = 0; product < productsArray.length; product++){
    labels.push(productsArray[product].name);
    numTimesClicked.push(productsArray[product].numberOfTimesClicked);
    numTimesDisplayed.push(productsArray[product].numberOfTimesDisplayed);
  }
  console.log(labels);
  console.log(numTimesClicked);
  var resultsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Clicks',
        data: numTimesClicked,
        backgroundColor: 'rgba(18, 4, 130,0.5)'
      }, {
        label: '# of Displays',
        data: numTimesDisplayed,
        backgroundColor: 'rgba(215, 125, 52, 0.5)'
      }]
    },
    options: {
      responsive: false,
      scales: {
        yAxes: [{
          type: 'linear',
          ticks: {
            beginAtZero:true,
            stepSize: 1
          }
        }]
      }
    }
  });
}

function handleClick(event) {
  var click = event.target;
  // console.log(click);
  if(click.nodeName === 'IMG'){
    if(triesCounter < totalTries){
      productsArray.forEach(function(product){
        if(product.name === click.id){
          product.numberOfTimesClicked++;
          // console.log(product);
          // console.log(click.id);
        }
      });
      pictureSection.innerHTML = null;
      renderpictureSet();
      triesCounter++;
    } else if (triesCounter >= totalTries) {
      showButtons();
    }
  }
}

function handleButtonClick(event) {
  var click = event.target;
  if(click.id === 'results-button'){
    click.hidden = true;
    document.getElementById('more-tries-button').hidden = true;
    renderChart();
  } else if(click.id === 'more-tries-button'){
    click.hidden = true;
    document.getElementById('results-button').hidden = true;
    triesCounter = triesCounter - 11;
  }
}
//Code execution
buildArray();

renderpictureSet();
pictureSection.addEventListener('click', handleClick);
// pictureSection.removeEventListener('click', handleClick);
var resultsSection = document.getElementById('results');
resultsSection.addEventListener('click', handleButtonClick);
