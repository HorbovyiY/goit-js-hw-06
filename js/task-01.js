const categories = [...document.querySelector('#categories').children];

console.log("Number of categories:" + categories.length);

categories.forEach(function (category) { 
    console.log("Category: " + category.querySelector('h2').textContent);
    console.log("Elements: " + [...category.querySelectorAll('li')].length)
});