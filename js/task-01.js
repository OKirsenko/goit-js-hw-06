const categories = document.querySelector('#categories');

const categoiesItems = [...categories.querySelectorAll('.item')];

console.log(`Number of categories: ${categoiesItems.length}`);

categoiesItems.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${[...item.querySelectorAll('ul li')].length}`);
});