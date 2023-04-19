const root = document.querySelector('#root');
const images = [
    'https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg',
    'https://phonoteka.org/uploads/posts/2021-05/1622404546_17-phonoteka_org-p-peizazh-v-stile-piksel-art-krasivo-26.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg',
    'https://oir.mobi/uploads/posts/2021-06/1622803069_29-oir_mobi-p-peizazh-dlya-nachinayushchikh-priroda-kras-30.jpg',
    'https://static.insales-cdn.com/images/products/1/1609/213943881/lg100.jpg'
];
const container = document.createElement('div');
container.classList.add('container');
const pictures = document.createElement('div');
pictures.classList.add('pictures');
const btns = document.createElement('div');
btns.classList.add('btns');

root.append(container);
container.append(pictures, btns);

images.forEach(elem => {
    let image = document.createElement('div')
    image.classList.add('picture');
    image.style.backgroundImage = `url(${elem})`;
    pictures.append(image);
});

let slideIndex = 0;

for (let i = 0; i < images.length; i++) {
    let btn = document.createElement('button');
    btns.append(btn);

    const btnsChild = btns.children;
    btnsChild[0].classList.add('active');


    btn.onclick = () => {
        slideIndex = i;
        pictures.style.left = `${slideIndex * -500}px`;
        for (let y = 0; y < btnsChild.length; y++) {
            btnsChild[y].classList.remove('active');
        }
        btn.classList.add('active');
    }
}