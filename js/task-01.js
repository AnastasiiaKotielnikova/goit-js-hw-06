const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

const itemsCategories = categoriesList.querySelectorAll('li.item');
itemsCategories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
})

