const categories = document.querySelector('#categories');

const categoiesItems = [...categories.querySelectorAll('.item')];

console.log(categoiesItems.length);

categoiesItems.forEach(item => {
    console.log([...item.querySelectorAll('ul li')].length);
    console.log(item.querySelector('h2').textContent)
});