// Д.З.
// Завдання 1

// В HTML є список категорій ul#categories.

// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:

// Категорія: ТвариниКількість елементів: 4

const categoriesList = document.querySelectorAll('#categories .item')
console.log(`У списку ${categoriesList.length} категоріi`)

categoriesList.forEach(category => {
	const title = category.querySelector('h2').textContent
	const elementsCount = category.querySelectorAll('ul li').length
	console.log(`Категорія: ${title}`)
	console.log(`Кількість елементів: ${elementsCount}`)
})
// Завдання 2
// В HTML є пустий список ul#ingredients.

// В JS є масив рядків.

const ingredients = [
	'Картопля',
	'Гриби',
	'Часник',
	'Помідори',
	'Зелень',
	'Приправи',
]
const ingredientsList = document.querySelector('#ingredients')
const elements = ingredients.map(ingredients => {
	const itemEl = document.createElement('li')
	itemEl.textContent = ingredients
	return itemEl
})
ingredientsList.append(...elements)
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().

// Завдання 3
// Напиши скрипт для створення галереї зображень по масиву даних.
// В HTML є список ul#gallery.

// <ul id="gallery"></ul>
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().
// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через css-класи.

const images = [
	{
		url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'White and Black Long Fur Cat',
	},
	{
		url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
	},
	{
		url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
		alt: 'Group of Horses Running',
	},
]
const galleryList = document.querySelector('#gallery')

galleryList.insertAdjacentHTML(
	'beforeend',
	images
		.map(
			image =>
				`<li class="gallery-item"><img src="${image.url}" alt="${image.alt}" width="300"/></li>`
		)
		.join('')
)
