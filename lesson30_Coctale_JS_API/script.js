const form = document.querySelector('#form');
const input = document.querySelector('#nameCoct');
const receptContainer = document.querySelector('#recept');

async function getCocktail(name) {
    name = name.trim();
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    if (!response.ok) {
        throw new Error(`Error ${response.status}`);
    }

    let data = await response.json();
    return data.drinks;
}

function fillCoctail(cocktail) {
    receptContainer.innerHTML = '';
    if (!cocktail) {
        receptContainer.innerHTML = '<p>Нет рецептов с таким названием</p>';
        return;
    };
    cocktail.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('panel');

        const divText = document.createElement('div');
        divText.classList.add('text');

        const divImg = document.createElement('div');
        divImg.classList.add('img');

        const h2 = document.createElement('h2');
        h2.innerText = element.strDrink;
        const img = document.createElement('img');
        img.setAttribute('src', element.strDrinkThumb);
        const p = document.createElement('p');
        p.innerText = element.strInstructions;
        const ingridients = document.createElement('ul');

        for (let i = 0; i < 15; i++) {
            const li = document.createElement('li');
            const ingridient = element[`strIngredient${i}`]
            const measure = element[`strMeasure${i}`];
            if (ingridient && measure) {
                li.innerText = `${ingridient} - ${measure}`;
                ingridients.append(li);
            }
        }
        
        divText.append(h2, p, ingridients);
        divImg.append(img);
        div.append(divImg, divText);
        receptContainer.append(div);
    });
}

// getCocktail('margarita');

form.onsubmit = async (e) => {
    e.preventDefault();
    const amount = input.value;
    // console.log(amount);
    try {
        const request = await getCocktail(amount);
        console.log(request);
        fillCoctail(request);
    } catch (e){
        console.error(e);
    }
}