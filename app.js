
//declaring a busMallImg array and var newClick which grabs #show-imafe
var busMallImg = [];
var newClick = document.getElementById('show-image');
//var counter = 0;

var addRight = document.getElementById('add-right');
var addCenter = document.getElementById('add-center');
var addLeft = document.getElementById('add-left');
var showImg = document.getElementById('show-image');

 //creating a constructor function with the attributes imgName and filePath
function Image(imgName, filePath) {
  this.imgName = imgName;
  this.filePath = filePath;
  this.newPath = 'img/' + this.filePath +'.jpg>';
  this.timesShown = 0;
  this.timesClicked = 0;
}

 //pushing in array while also creating elements with constructor function
busMallImg.push(new Image('bag','bag'));
busMallImg.push(new Image('banana', 'banana'));
busMallImg.push(new Image('bathroom', 'bathroom'));
busMallImg.push(new Image('boots', 'boots'));
busMallImg.push(new Image('breakfast', 'breakfast'));
busMallImg.push(new Image('bubblegum', 'bubblegum'));
busMallImg.push(new Image('chair', 'chair'));
busMallImg.push(new Image('cthulhu', 'cthulhu'));
busMallImg.push(new Image('dogDuck', 'dogDuck'));
busMallImg.push(new Image('dragon', 'dragon'));
busMallImg.push(new Image('pen', 'pen'));
busMallImg.push(new Image('petSweep', 'petSweep'));
busMallImg.push(new Image('scissors', 'scissors'));
busMallImg.push(new Image('tauntaun', 'tauntaun'));
busMallImg.push(new Image('unicorn', 'unicorn'));
busMallImg.push(new Image('usb', 'usb'));
busMallImg.push(new Image('waterCan', 'waterCan'));
busMallImg.push(new Image('wineGlass', 'wineGlass'));

//function writtne that takes a random number and multiply it by the lenthgh of the busMallImg array this will randomize my Images
function doMath() {
  return Math.floor(Math.random() * busMallImg.length);
}
//function written to genertateThree
//calling my random function and assigning that value to var declared img1
//declaring liEl1 value equal to document and creating a list item
//which is then inserted in innerHTML after img scr=
function generateThree() {
  var img1 = doMath();

  var divEl = document.createElement('div');
  divEl.innerHTML = '<img src=' + busMallImg[img1].newPath;
  busMallImg[img1].timesShown++;
  showImg.appendChild(divEl);

  var img2 = doMath(Image);

  while (img1 === img2) {
    img2 = doMath();
  }

  var divEl2 = document.createElement('div');
  divEl2.innerHTML = '<img src=' + busMallImg[img2].newPath;
  busMallImg[img2].timesShown++;
  showImg.appendChild(divEl2);

  var img3 = doMath();

  while (img3 === img1 || img3 === img2) {
    img3 = doMath();
  }

  var divEl3 = document.createElement('div');
  divEl3.innerHTML = '<img src=' + busMallImg[img3].newPath;
  busMallImg[img3].timesShown++;
  showImg.appendChild(divEl3);

  // function increaseTimesClicked () {
  //   Image.timesClick += 1;
  // }
}

function handleClick(event) {
  console.log('you done clicked on ' + event.target.alt);

  for (var q = 0; q < busMallImg.length; q++) {
    if (event.target.alt === busMallImg[q].imgName) {
      busMallImg[q].timesClicked++;
    }
    showImg.innerHTML = ' ';

    generateThree();
  }
}

newClick.addEventListener('click', handleClick);

generateThree();
handleClick();
