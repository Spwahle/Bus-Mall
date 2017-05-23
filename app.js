
//declaring a randomImg array and var
var randomImg = [];
var newClick = document.getElementById('show-image');
//var counter = 0;

var addRight = document.getElementById('add-right');
var addCenter = document.getElementById('add-center');
var addLeft = document.getElementById('add-left');
var showImg = document.getElementById('show-image');

 //creating a constructor function with the attributes imgName and filePath
function Picture(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath +'.jpg>';
  this.timesShown = 0;
  this.timesClicked = 0;
   //randomImg.push(this);
}

 //pushing in array while also creating elements with constructor function
randomImg.push(new Picture('bag','bag'));
randomImg.push(new Picture('banana', 'banana'));
randomImg.push(new Picture('bathroom', 'bathroom'));
randomImg.push(new Picture('boots', 'boots'));
randomImg.push(new Picture('breakfast', 'breakfast'));
randomImg.push(new Picture('bubblegum', 'bubblegum'));
randomImg.push(new Picture('chair', 'chair'));
randomImg.push(new Picture('cthulhu', 'cthulhu'));
randomImg.push(new Picture('dogDuck', 'dogDuck'));
randomImg.push(new Picture('dragon', 'dragon'));
randomImg.push(new Picture('pen', 'pen'));
randomImg.push(new Picture('petSweep', 'petSweep'));
randomImg.push(new Picture('scissors', 'scissors'));
randomImg.push(new Picture('tauntaun', 'tauntaun'));
randomImg.push(new Picture('unicorn', 'unicorn'));
randomImg.push(new Picture('usb', 'usb'));
randomImg.push(new Picture('waterCan', 'waterCan'));
randomImg.push(new Picture('wineGlass', 'wineGlass'));


function doMath() {
  return Math.floor(Math.random() * randomImg.length);
}

function genertateThree () {

  var img1 = doMath(Picture);

  var liEl1 = document.createElement('li');
  liEl1.innerHTML = '<img src=' + randomImg[img1].newPath;
  showImg.appendChild(liEl1);

  var img2 = doMath(Picture);

  while (img1 === img2) {
    img2 = doMath(Picture);
  }

  var liEl2 = document.createElement('li');
  liEl2.innerHTML = '<img src=' + randomImg[img2].newPath;
  showImg.appendChild(liEl2);

  var img3 = doMath(Picture);

  while (img3 === img1 || img3 === img2) {
    img3 = doMath(Picture);
  }

  var liEl3 = document.createElement('li');
  liEl3.innerHTML = '<img src=' + randomImg[img3].newPath;
  showImg.appendChild(liEl3);

  function increaseTimesClicked () {
    Picture.timesClicked += 1;
  }
}

function handleClick (event) {
  console.log(event);
  event.preventDefault ();

  newClick.addEventListener('click', increaseTimesClicked);

  for (i = 0; i <25; i++) {
    genertateThree(Picture);
  }
}

genertateThree();
 // var li2 = document.createElement('li');
 // li2.innerHTML = '<img src='  pic[index2].path  ' />';
 // appendImg2.appendChild(li2);

doMath();
