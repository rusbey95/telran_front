const root = document.querySelector('#root');
const dataTexts = [
    {
      id: 1,
      title: "1О компании",
      text: "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur."
    },
    {
      id: 2,
      title: "2О компании",
      text: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
      id: 3,
      title: "3О компании",
      text: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
      id: 4,
      title: "4О компании",
      text: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
      id: 5,
      title: "5О компании",
      text: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
    {
      id: 6,
      title: "6О компании",
      text: "6Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas pariatur enim in reprehenderit. Quae, itaque quaerat. Sapiente qui harum velit cum repellat nihil ratione cumque? Aperiam vel provident iusto pariatur.",
    },
];
const container = document.createElement('div');
container.classList.add('container');
const texts = document.createElement('ul');
texts.classList.add('text-list');
const btns = document.createElement('div');
btns.classList.add('btns');
const prevBtn = document.createElement('button');
prevBtn.classList.add('prev');
const nextBtn = document.createElement('button');
nextBtn.classList.add('next');

root.append(container);
container.append(texts, btns, prevBtn, nextBtn);

dataTexts.forEach(elem => {
    let textBox = document.createElement('li');
    textBox.classList.add('text-item');
    if (elem['title']) {
        const title = document.createElement('h3');
        title.innerHTML += elem['title'];
        title.classList.add('title');
        textBox.append(title);
    }
    if (elem['text']) {
        const text = document.createElement('p');
        text.innerHTML += elem['text'];
        text.classList.add('text');
        textBox.append(text);
    }

    textBox.style.backgroundImage = `url(${elem})`;
    texts.append(textBox);
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

for (let i = 0; i < dataTexts.length; i++) {
    let btn = document.createElement('button');
    btn.classList.add(i)
    btns.append(btn);

    const btnsChild = btns.children;
    btnsChild[0].classList.add('active');

    btn.onclick = () => {
        slideIndex = i;

        scrollCarousel(texts);
        changeCarouselDots(btnsChild, btn);
    }

    prevBtn.onclick = () => {
        if (dataTexts.length - 1 < slideIndex || slideIndex <= 0) {
            slideIndex = dataTexts.length - 1;
        } else {
            slideIndex--;
        }

        scrollCarousel(texts);
        changeCarouselDots(btnsChild, btnsChild[slideIndex]);
    }

    nextBtn.onclick = () => {
        if (dataTexts.length - 1 > slideIndex) {
            slideIndex++;
        } else {
            slideIndex = 0;
        }

        scrollCarousel(texts);
        changeCarouselDots(btnsChild, btnsChild[slideIndex]);
    }
}