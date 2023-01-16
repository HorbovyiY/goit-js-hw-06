const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let ingredientsMarkup=[];
for (let i = 0; i < ingredients.length - 1; i += 1) {
  let ingredient=document.createElement('li');
  ingredient.textContent = ingredients[i];
  ingredient.classList.add('item');
  ingredientsMarkup.push(ingredient);
}
document.querySelector('#ingredients').append(...ingredientsMarkup);


