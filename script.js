//TODO: finish nextpicture function - Kevin
//TODO: make array of images - Will
// gets a random next image in the array
// var numPics = 1;
// var imgArray = new Array();

// var mybtn = document.getElementById("button_style");
// mybtn.addEventListener("click", nextImage);

// function nextImage() {
//   // imgArrayInit();
//   // var number = Math.floor(Math.random() * numPics);
//   return document.getElementById("result").innerHTML = '<img src = "./images/asl0.jpg">';
// }

// function imgArrayInit() {
//   // i = 0;
//   // while (i < numPics) {
//   //   imgArray[i] = new Image();
//   //   imgArray[i].src = './images/asl' + i + '.jpg'
//   //   i++;
//   imgArray[0] = new Image();
//   imgArray[0].src = './images/asl0.jpg';
// }

image_array = [
  '0.jpg'
]

function imgGet() {
  randomIndex = Math.floor(Math.random * image_array.length);
  selected_image = image_array[random_index];
  document.getElementById('asl_image').src = './images/${selected_image}';
}


