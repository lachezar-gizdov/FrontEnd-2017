function solve() {

	let Id = (function () {
		let id = 0;
		function getNextID() {
			id += 1;
			return id;
		}
		return {
			getNextID: getNextID
		};
	})();
	function validateNames(name) {
		if (name.length < 3 || name.length > 25) {
			throw 'Name has to be between 3 and 25 symbols.';
		}
	}
	class Player {
		constructor(name) {
			this.name = name;
			this._playlists = [];
			this.id = Id.getNextID();
		}

		get name() {
			return this._name;
		}

		set name(value) {
			validateNames(value);
			this._name = value;
		}

		get playlists() {
			return this._playlists;
		}
		addPlaylist(playlistToAdd) {
			this._playlists.push(playlistToAdd);

			return this;
		}
		getPlaylistById(id) {
			let result = this._playlists.find(p => p.id === id);
			if (typeof result === 'undefined') {
				return null;
			}
			return result;
		}
		removePlaylist(options) {
			if (typeof options === 'number') {
				let index = this._playlists.indexOf(p => p.id === id);
				if (index < 0) {
					throw Error('Playlist with this ID cannot be found');
				}
				playlists.splice(index, 1);
			}
			if (typeof options === 'object') {
				let result = this._playlists.find(p => p.id === options.id);
				if (typeof result === 'undefined') {
					throw Error('Playlist with provided id is not found');
				}
			}

			return this;
		}
		listPlaylists(page, size) {
			let result = [];
			if (page < 0 || typeof page !== 'number' || typeof page === 'undefined') {
				throw Error('Page cannot be smaller than 0');
			}
			if (size <= 0 || typeof size !== 'number' || typeof size === 'undefined') {
				throw Error('Size cannot be smaller than 1');
			}
			if (page * size > this._playlists.length) {
				throw Error('Page * Size cannot be larger than the collection');
			}
			if (this._playlists.length < size) {
				return this._playlists;
			}
			else {
				let sorted = this._playlists.sort((x, y) => {
					if (x.name === y.name) {
						return x.id - y.id;
					}
					return x.name.localeCompare(y.name);
				});
				result = sorted.slice(page * size, (page + 1) * size);
			}

			return result;
		}
		contains(playable, playlist) {
			playlist.forEach(function(element) {
				if(element === playable){
					return true;
				}
				else{
					return false;
				}
			});
		}
		search(pattern) {
			let result = [];

			//TODO
			// _playlists.forEach(function(element) {
				
			// });

			return result;
		}
	}

	class PlayList {
		constructor(name) {
			this.name = name;
			this.id = Id.getNextID();
			this._playables = [];
		}

		get name() {
			return this._name;
		}
		set name(value) {
			validateNames(value);
			this._name = value;
		}
		get playables() {
			return this._playables;
		}
		set playables(value) {
			this._playables = value;
		}
		addPlayable(playable) {
			this._playables.push(playable);

			return this;
		}
		getPlayableById(id) {
			let result = this._playables.find(p => p.id === id);
			if (typeof result === 'undefined') {
				return null;
			}
			return result;
		}
		removePlayable(options) {
			if (typeof options === 'number') {
				let index = this._playables.findIndex(p => p.id === options);
				if (index < 0) {
					throw Error('Playable with this ID cannot be found');
				}
				return this._playables.splice(index, 1);
			}
			if (typeof options === 'object') {
				let index = this._playables.findIndex(p => p.id === options.id);
				if (index < 0) {
					throw Error('Playable with this ID cannot be found');
				}
				return this._playables.splice(index, 1);
			}
			return this;
		}
		listPlayables(page, size) {
			let result = [];
			if (page < 0 || typeof page !== 'number' || typeof page === 'undefined') {
				throw Error('Page cannot be smaller than 0');
			}
			if (size <= 0 || typeof size !== 'number' || typeof size === 'undefined') {
				throw Error('Size cannot be smaller than 1');
			}
			if (page * size > this._playables.length) {
				throw Error('Page * Size cannot be larger than the collection');
			}
			if (this._playables.length < size) {
				return this._playables;
			}
			else {
				let sorted = this._playables.sort((x, y) => {
					if (x.title === y.title) {
						return x.id - y.id;
					}
					return x.title.localeCompare(y.title);
				});
				result = sorted.slice(page * size, (page + 1) * size);
			}

			return result;
		}
	}
	class Playable {
		constructor(title, author) {
			this.id = Id.getNextID();
			this.title = title;
			this.author = author;
		}
		get title() {
			return this._title;
		}
		set title(value) {
			validateNames(value);
			this._title = value;
		}
		play() {
			return `[${this.id}]. [${this.title}] - [${this.author}]`;
		}
	}
	class Audio extends Playable {
		constructor(title, author, length) {
			super(title, author);
			this.length = length;
		}
		get length() {
			return this._length;
		}
		set length(value) {
			if (value < 1) {
				throw Error('Number must be greater than 0');
			}
			this._length = value;
		}
		play() {
			return `${super.play()} - [${this.length}]`;
		}
	}
	class Video extends Playable {
		constructor(title, author, imdbRating) {
			super(title, author);
			this.imdbRating = imdbRating;
		}
		get imdbRating() {
			return this._imdbRating;
		}
		set imdbRating(value) {
			if (typeof value !== 'number' || value < 1 || value > 5) {
				throw Error('Must be number between 1 and 5');
			}
			this._imdbRating = value;
		}
		play() {
			return `${super.play()} - [${this.imdbRating}]`;
		}
	}
	const module = {
		getPlayer: function (name) {
			// returns a new player instance with the provided name
			return new Player(name);
		},
		getPlaylist: function (name) {
			//returns a new playlist instance with the provided name
			return new PlayList(name);
		},
		getAudio: function (title, author, length) {
			//returns a new audio instance with the provided title, author and length
			return new Audio(title, author, length);
		},
		getVideo: function (title, author, imdbRating) {
			//returns a new video instance with the provided title, author and imdbRating
			return new Video(title, author, imdbRating);
		}
	};
	return module;
}

module.exports = solve;