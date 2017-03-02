function solve() {
	let GetNextID = (function () {
		let id = 0;
		return function () {
			id += 1;
			return id;
		};
	}());

	function validateDescription(des) {
		if (typeof des !== 'string') {
			throw Error('Description have to be string!');
		}
		if (des === '') {
			throw 'Description should not be empty!';
		}
	}
	function validateName(str) {
		if (typeof str !== 'string') {
			throw Error('Name must be a string!');
		}
		if (str.length < 2 || str.length > 40) {
			throw Error('Name length must be between 2 and 40 symbols!');
		}
	}
	function validateGenre(str) {
		if (typeof str !== 'string') {
			throw Error('Name must be a string!');
		}
		if (str.length < 2 || str.length > 20) {
			throw Error('Genre length must be between 2 and 20 symbols!');
		}
	}
	function validateISBN(isbn) {
		if (typeof isbn !== 'string') {
			throw Error('ISBN must be string!');
		}
		if (isbn.length !== 10 && isbn.length !== 13) {
			throw Error('ISBN must be 10 or 13 digits!');
		}
		if (!(isbn.match(/^[0-9]+$/))) {
			throw Error('ISBN must contain only digits!');
		}
	}

	function validateDuration(dur) {
		if (typeof dur !== 'number' || dur <= 0) {
			throw Error('Invalid duration!');
		}
	}
	function validateRating(rat) {
		if (typeof rat !== 'number') {
			throw Error('Invalid rating!');
		}
		if (rat < 1 || rat > 5) {
			throw Error('Invalid rating!');
		}
	}

	class Item {
		constructor(description, name) {
			this.id = GetNextID();
			this.description = description;
			this.name = name;
		}

		get description() {
			return this._description;
		}
		set description(value) {
			validateDescription(value);
			this._description = value;
		}
		get name() {
			return this._name;
		}
		set name(value) {
			validateName(value);
			this._name = value;
		}
	}

	class Book extends Item {
		constructor(description, name, isbn, genre) {
			super(description, name);
			this.isbn = isbn;
			this.genre = genre;
		}

		get isbn() {
			return this._isbn;
		}
		set isbn(value) {
			validateISBN(value);
			this._isbn = value;
		}
		get genre() {
			return this._genre;
		}
		set genre(value) {
			validateGenre(value);
			this._genre = value;
		}
	}

	class Media extends Item {
		constructor(name, rating, duration, description) {
			super(name, description);
			this.duration = duration;
			this.rating = rating;
		}

		get duration() {
			return this._duration;
		}
		set duration(value) {
			validateDuration(value);
			this._duration = value;
		}

		get rating() {
			return this._rating;
		}
		set rating(value) {
			validateRating(rating);
			this._rating = value;
		}
	}

	class Catalog {
		constructor(name, items) {
			this.name = name;
			this.items = [];
			this.id = GetNextID();
		}

		get name() {
			return this._name;
		}

		set name(value) {
			validateName(value);
			this._name = value;
		}

		add(...items) {
			if (Array.isArray(items[0])) {
				items = items[0];
			}
			if (items.length === 0) {
				Error('No items!');
			}
			this.items.push(...items);
			return this;
		}

		find(options) {
			if (typeof options === 'number') {
				for (let item of this.items) {
					if (item.id === options) {
						return item;
					}
				}
				return null;
			}
			if (typeof options === 'object' && options !== null) {
				return this.items.filter(function (item) {
					return Object.keys(options).every(function (prop) {
						return options[prop] === item[prop];
					});
				});
			}
			throw Error('Invalid params!');
		}

		search(pattern) {
			if (typeof pattern !== 'string' || pattern.length < 1) {
				throw Error('Invalid pattern!');
			}
			return this.items.filter(function (item) {
				return item.name.indexOf(pattern) >= 0 || item.description.indexOf(pattern) >= 0;
			});
		}
	}

	class BookCatalog extends Catalog {
		constructor(name) {
			super(name);
		}

		add(...books) {
			if (Array.isArray(books[0])) {
				books = books[0];
			}
			if (books.length === 0) {
				Error('No books!');
			}

			books.forEach(function (book) {
				if (!(book instanceof Book)) {
					throw Error('There is invalid book!');
				}
			});
			return super.add(...books);
		}

		getGenres() {
			let uniqueGenres = {};
			this.items.forEach(book => uniqueGenres[book.genre.toLowerCase()] = true);
			return Object.keys(uniqueGenres);
		}

		find(options) {
			if (typeof options === 'object') {
				let books = super.find(options);
				if (options.hasOwnProperty('genre')) {
					return books.filter(book => book.genre === options.genre);
				}

				return books;
			}

			return super.find(options);
		}
	}

	class MediaCatalog extends Catalog {
		constructor(name) {
			super(name);
		}

		add(...medias) {
			if (Array.isArray(medias[0])) {
				medias = medias[0];
			}
			if (medias.length === 0) {
				Error('No media!');
			}

			medias.forEach(function (media) {
				if (!(media instanceof Media)) {
					throw Error('There is invalid media!');
				}
			});
			return super.add(...medias);
		}

		getTop(count) {
			if (typeof count !== 'number' || count < 1) {
				throw Error('Invalid count!');
			}

			return this.items
				.sort((x, y) => x.rating - y.rating)
				.reverse()
				.slice(0, count)
				.map(item => {
					return {
						name: item.name,
						id: item.id
					};
				});
		}

		getSortedByDuration() {
			return this.items.sort((x, y) => {
				if (x.duration === y.duration) {
					return x.id - y.id;
				}
				return y.duration - x.duration;
			});
		}

		find(options) {
			if (typeof options === 'object') {
				let medias = super.find(options);

				if (options.hasOwnProperty('rating')) {
					return medias.filter(media => media.rating === options.rating);
				}

				return medias;
			}

			return super.find(options);
		}
	}

	return {
		getBook: function (name, isbn, genre, description) {
			// return a book instance
			return new Book(name, isbn, genre, description);
		},
		getMedia: function (name, rating, duration, description) {
			// return a media instance
			return new Media(name, rating, description);
		},
		getBookCatalog: function (name) {
			// return a book catalog instance
			return new BookCatalog(name);
		},
		getMediaCatalog: function (name) {
			// return a media catalog instance
			return new MediaCatalog(name);
		}
	};
}

module.exports = solve;