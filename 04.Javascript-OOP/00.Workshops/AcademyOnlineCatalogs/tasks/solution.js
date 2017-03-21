function solve() {
	let GetNextID = (function () {
		let id = 0;
		return function () {
			id += 1;
			return id;
		};
	}());

	class Item {
		constructor(description, name) {
			this.id = GetNextID();
			this.description = description;
			this.name = name;
		}

		get description() {
			return this._description;
		}
		set description(description) {
			if (typeof description !== 'string') {
				throw Error('Description have to be string!');
			}
			if (description === '') {
				throw 'Description should not be empty!';
			}
			this._description = description;
		}
		get name() {
			return this._name;
		}
		set name(name) {
			if (typeof name !== 'string') {
				throw Error('Name must be a string!');
			}
			if (name.length < 2 || name.length > 40) {
				throw Error('Name length must be between 2 and 40 symbols!');
			}
			this._name = name;
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
		set isbn(isbn) {
			if (typeof isbn !== 'string') {
				throw Error('ISBN must be string!');
			}
			if (isbn.length !== 10 && isbn.length !== 13) {
				throw Error('ISBN must be 10 or 13 digits!');
			}
			if (!(isbn.match(/^[0-9]*$/))) {
				throw Error('ISBN must contain only digits!');
			}
			this._isbn = isbn;
		}
		get genre() {
			return this._genre;
		}
		set genre(genre) {
			if (typeof genre !== 'string') {
				throw Error('Genre must be a string!');
			}
			if (genre.length < 2 || genre.length > 20) {
				throw Error('Genre length must be between 2 and 20 symbols!');
			}
			this._genre = genre;
		}
	}

	class Media extends Item {
		constructor(description, name, duration, rating) {
			super(description, name);
			this.duration = duration;
			this.rating = rating;
		}

		get duration() {
			return this._duration;
		}
		set duration(duration) {
			if (typeof duration !== 'number' || duration <= 0) {
				throw Error('Invalid duration!');
			}

			this._duration = duration;
		}

		get rating() {
			return this._rating;
		}
		set rating(rating) {
			if (typeof rating !== 'number') {
				throw Error('Invalid rating!');
			}
			if (rating < 1 || rating > 5) {
				throw Error('Invalid rating!');
			}

			this._rating = rating;
		}
	}

	class Catalog {
		constructor(name) {
			this.id = GetNextID();
			this.name = name;
			this.items = [];
		}

		get name() {
			return this._name;
		}

		set name(name) {
			if (typeof name !== 'string') {
				throw Error('Name must be a string!');
			}
			if (name.length < 2 || name.length > 40) {
				throw Error('Name length must be between 2 and 40 symbols!');
			}
			this._name = name;
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
				throw Error('No books!');
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
				throw Error('No media!');
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
			return new Book(description, name, isbn, genre);
		},
		getMedia: function (name, rating, duration, description) {
			return new Media(description, name, duration, rating);
		},
		getBookCatalog: function (name) {
			return new BookCatalog(name);
		},
		getMediaCatalog: function (name) {
			return new MediaCatalog(name);
		}
	};
}

module.exports = solve;