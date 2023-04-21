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
const prevBtn = document.createElement('button');
prevBtn.classList.add('prev');
const nextBtn = document.createElement('button');
nextBtn.classList.add('next');

root.append(container);
container.append(pictures, btns, prevBtn, nextBtn);

images.forEach(elem => {
    let image = document.createElement('div')
    image.classList.add('picture');
    image.style.backgroundImage = `url(${elem})`;
    pictures.append(image);
});

let slideIndex = 0;

function scrollCarousel(carousel) {
    carousel.style.left = `${slideIndex * -500}px`;
}
function changeCarouselDots(btnContainer, button) {
    for (let y = 0; y < btnContainer.length; y++) {
        btnContainer[y].classList.remove('active');
    }
    button.classList.add('active')
}

for (let i = 0; i < images.length; i++) {
    let btn = document.createElement('button');
    btn.classList.add(i)

    btns.append(btn);

    const btnsChild = btns.children;
    btnsChild[0].classList.add('active');


    btn.onclick = () => {
        slideIndex = i;

        scrollCarousel(pictures);
        changeCarouselDots(btnsChild, btn);
    }

    prevBtn.onclick = () => {
        if (images.length - 1 < slideIndex || slideIndex <= 0) {
            slideIndex = images.length - 1;
        } else {
            slideIndex--;
        }

        scrollCarousel(pictures);
        changeCarouselDots(btnsChild, btnsChild[slideIndex]);
    }

    nextBtn.onclick = () => {
        if (images.length - 1 > slideIndex) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }

        scrollCarousel(pictures);
        changeCarouselDots(btnsChild, btnsChild[slideIndex]);
    }
}