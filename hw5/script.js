// task 1 - Создайте массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере.
const body            = document.querySelector('body');

const div             = document.createElement('div');
const divPictureSmall = document.createElement('div');
const divPictureBig   = document.createElement('div');
const imgBig          = document.createElement('img');

div.classList.add('picture-library');
divPictureSmall.classList.add('picture-library__small');
divPictureBig.classList.add('picture-library__big');

body.appendChild(div);
div.append(divPictureSmall, divPictureBig);

const pictures = [
    'https://w0.peakpx.com/wallpaper/926/130/HD-wallpaper-beautiful-scenic-mountain-scenic-view-scenic-scenic-mountain-beautiful-nature-scenic-nature.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
    'https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?w=2000&t=st=1674438360~exp=1674438960~hmac=7da50479c096c70d1190c101bb62a19e96221c9b242ba416642f7718c662ba65',
    'https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?w=2000&t=st=1674438379~exp=1674438979~hmac=e906163864b7737d11bb1dbc4d43cae59c2277c955cdc70452fa29db57180b16',
    'https://w0.peakpx.com/wallpaper/926/130/HD-wallpaper-beautiful-scenic-mountain-scenic-view-scenic-scenic-mountain-beautiful-nature-scenic-nature.jpg',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/great-ocean-road-174028267-1494616481.jpg?crop=1.00xw:1.00xh;0,0&resize=980:*',
    'https://img.freepik.com/free-photo/beautiful-shot-grassy-hills-covered-trees-near-mountains-dolomites-italy_181624-24400.jpg?w=2000&t=st=1674438360~exp=1674438960~hmac=7da50479c096c70d1190c101bb62a19e96221c9b242ba416642f7718c662ba65',
];

function makeGallery() {
    for (key in pictures) {
        const img     = document.createElement('img');
        const divItem = document.createElement('div');
        divItem.classList.add('picture-library__item-small');
    
        img.setAttribute('src', pictures[key]);
        divItem.appendChild(img);
        divPictureSmall.appendChild(divItem);
    
        img.onclick = function() {
            imgBig.setAttribute('src', img.getAttribute('src'));
            divPictureBig.appendChild(imgBig);
        }
    }
}

function getFirstImg(imgs) {
    for (let i = 0; i < imgs.length; i++) {
        imgBig.setAttribute('src', imgs[0]);
        divPictureBig.appendChild(imgBig);
    }
}

getFirstImg(pictures);
makeGallery();
