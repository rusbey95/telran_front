const section = document.querySelector('#root');
const data = [
    "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_v_lesnoj_tishi_ki200106.jpg",
    "https://ar.culture.ru/attachments/attachment/preview/5d318a999679aa1b2cd218f6-preview.jpg",
    "https://oir.mobi/uploads/posts/2021-05/1622284149_33-oir_mobi-p-prostoi-peizazh-priroda-krasivo-foto-38.jpg",
    "https://fotogora.ru/img/blog/big/2019/12/3/15987.jpg",
    "https://artworld.ru/images/cms/content/catalog2/kartina_v_interier_pejzazh_maslom_rannej_vesnoj_v_lesu_ki200102.jpg",
];

const containerDiv = document.createElement('div');
containerDiv.classList.add('container');
const imagesDiv = document.createElement('div');
imagesDiv.classList.add('smallImgs');
const bigImg = document.createElement('img');
bigImg.classList.add('bigImg');

section.append(containerDiv);
containerDiv.append(bigImg, imagesDiv);

bigImg.setAttribute('src', data[0]);

data.forEach(elem => {
    const img = document.createElement('img');
    img.setAttribute('src', elem);
    imagesDiv.append(img);

    img.onclick = () => {
        bigImg.setAttribute('src', elem);
    };
});