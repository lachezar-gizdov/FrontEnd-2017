function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks() {
			let sorted = [];
			books.sort((a, b) => a.ID - b.ID);

			if (arguments.length === 0) {
				sorted = books;
			}
			else if (arguments[0].author) {
				sorted = books.filter(book => book.author === arguments[0].author);
			}
			else if (arguments[0].category) {
				sorted = books.filter(book => book.category === arguments[0].category);
			}

			return sorted;
		}

		function addBook(book) {
			book.ID = books.length + 1;

			if (!book.title || book.title.length < 2 || book.title.length > 100) {
				throw new Error('Book title should be atleast 2 symbols and maximum 100.');
			}
			if (books.findIndex(b => b.title === book.title) !== -1) {
				throw new Error('Book with this title already exist.');
			}
			if (!book.author) {
				throw new Error('The author should be non empty string.');
			}
			if (book.isbn.length !== 10 && book.isbn.length !== 13) {
				throw new Error('Book isbn should be 10 or 13 digits long.');
			}
			if (books.findIndex(b => b.isbn === book.isbn) !== -1) {
				throw new Error('Book with this isbn already exist.');
			}
			if (book.category.length < 2 || book.category.length > 100) {
				throw new Error('Book category should be atleast 2 symbols and maximum 100.');
			}
			if (categories.indexOf(book.category) == -1) {
				categories.push(book.category);
			}

			books.push(book);
			return book;
		}

		function listCategories() {
			return categories;
		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	}());
	return library;
}
module.exports = solve;