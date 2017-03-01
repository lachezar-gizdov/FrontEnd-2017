function solve() {
	function IDGenerator() {
		let id = 0;
		function getNextID() {
			id += 1;
			return id;
		}
		return {
			getNextID: getNextID
		};
	}
	function validateDescription(value) {
		if (typeof value !== 'string') {
			throw Error('Invalid description!');
		}
	}
	function validateStringLength(str, lowerLimit, upperLimit) {
		if (typeof str !== 'string') {
			throw Error('Name must be a string!');
		}
		if (str.length < lowerLimit || str.length > upperLimit) {
			throw Error('Name length must be between 2 and 40 symbols!');
		}
	}
	function validateISBN(value) {
		if (value.length !== 10 && value.length !== 13) {
			throw Error('ISBN must be 10 or 13 digits!');
		}
		if (!(value.match(/^[0-9]+$/))) {
			throw Error('ISBN must contain only digits!');
		}
	}

	function validateDuration(value) {
		if (typeof value !== 'number' || value <= 0) {
			throw Error('Invalid duration!');
		}
	}
	function validateRating(value) {
		if (typeof value !== 'number' || value < 1 || value > 5) {
			throw Error('Invalid rating!');
		}
	}

	class Item {
		constructor(description, name) {
			this.description = description;
			this.name = name;
			this.id = IDGenerator().getNextID();
		}
		get name() {
			return this._name;
		}
		set name(value) {
			validateStringLength(value, 2, 40);
			this._name = value;
		}
		get description() {
			return this._description;
		}
		set description(value) {
			validateDescription(value);
			this._description = value;
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
			validateStringLength(value, 2, 20);
			this._genre = value;
		}
	}

	class Media extends Item {
		constructor(description, name, duration, rating) {
			super(description, name);
			this.duration = duration;
			this.rating = rating;
		}

		get duration() {
			validateDuration(duration);
			return this._duration;
		}
		set duration(value) {
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
			this.id = IDGenerator().getNextID();
		}

		get name() {
			return this._name;
		}

		set name(value) {
			validateStringLength(value, 2, 40);
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
		}

		getSortedByDuration() {

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
