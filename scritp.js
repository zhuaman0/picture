const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const originalImageSrc = image2.querySelector('img').src;
image1.addEventListener('mouseover', () => {
  image2.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
  image3.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
  image4.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
  image7.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
  image5.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
  image6.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
  image8.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
  image9.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
});
image1.addEventListener('mouseout', () => {
  image2.querySelector('img').src = originalImageSrc;
  image3.querySelector('img').src = originalImageSrc;
  image4.querySelector('img').src = originalImageSrc;
  image7.querySelector('img').src = originalImageSrc;
  image5.querySelector('img').src = originalImageSrc;
  image6.querySelector('img').src = originalImageSrc;
  image8.querySelector('img').src = originalImageSrc;
  image9.querySelector('img').src = originalImageSrc;
});


image2.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image3.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image4.querySelector('img').src = './img/left-top.jpeg';
	image7.querySelector('img').src = './img/left-top.jpeg';
	image5.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
	image6.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
	image8.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
	image9.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
 });
 image2.addEventListener('mouseout', () => {
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image3.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image2.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image4.querySelector('img').src = './img/left-top.jpeg';
	image7.querySelector('img').src = './img/left-top.jpeg';
	image5.querySelector('img').src = './img/left-top.jpeg';
	image6.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
	image8.querySelector('img').src = './img/left-top.jpeg';
	image9.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
 });
 image3.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image4.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/bottom-left.jpeg';
	image1.querySelector('img').src = './img/bottom.jpeg';
	image2.querySelector('img').src = './img/bottom-left.jpeg';
	image7.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
	image5.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image6.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image8.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
	image9.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
 });
 image4.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });
 image5.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/bottom-left.jpeg';
	image4.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image1.querySelector('img').src = './img/bottom-rigth.jpeg';
	image2.querySelector('img').src = './img/bottom.jpeg';
	image7.querySelector('img').src = './img/left-top.jpeg';
	image6.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image8.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
	image9.querySelector('img').src = './img/photo_5284980682935887481_y.jpg';
 });
 image5.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image6.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image3.querySelector('img').src = './img/bottom.jpeg';
	image1.querySelector('img').src = './img/bottom-rigth.jpeg';
	image2.querySelector('img').src = './img/bottom-rigth.jpeg';
	image7.querySelector('img').src = './img/left-top.jpeg';
	image5.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image8.querySelector('img').src = './img/left-top.jpeg';
	image9.querySelector('img').src = './img/photo_5284980682935887482_y.jpg';
 });
 image6.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image7.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/bottom.jpeg';
	image3.querySelector('img').src = './img/bottom-left.jpeg';
	image1.querySelector('img').src = './img/bottom.jpeg';
	image2.querySelector('img').src = './img/bottom-left.jpeg';
	image5.querySelector('img').src = './img/bottom-left.jpeg';
	image6.querySelector('img').src = './img/bottom-left.jpeg';
	image8.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image9.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
 });
 image7.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image8.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/bottom-rigth.jpeg';
	image3.querySelector('img').src = './img/bottom-left.jpeg';
	image1.querySelector('img').src = './img/bottom-rigth.jpeg';
	image2.querySelector('img').src = './img/bottom.jpeg';
	image5.querySelector('img').src = './img/bottom.jpeg';
	image6.querySelector('img').src = './img/bottom-left.jpeg';
	image9.querySelector('img').src = './img/photo_5284980682935887478_y (1).jpg';
	image7.querySelector('img').src = './img/left-top.jpeg';
 });
 image8.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
	
 });

 image9.addEventListener('mouseover', () => {
	image5.querySelector('img').src = './img/bottom-rigth.jpeg';
	image3.querySelector('img').src = './img/bottom.jpeg';
	image1.querySelector('img').src = './img/bottom-rigth.jpeg';
	image2.querySelector('img').src = './img/bottom-rigth.jpeg';
	image4.querySelector('img').src = './img/bottom-rigth.jpeg';
	image8.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image7.querySelector('img').src = './img/photo_5284980682935887471_y.jpg';
	image6.querySelector('img').src = './img/bottom.jpeg';
 });
 image9.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });
