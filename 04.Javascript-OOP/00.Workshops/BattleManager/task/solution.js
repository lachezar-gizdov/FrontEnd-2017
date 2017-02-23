function solve() {
    'use strict';

    const ERROR_MESSAGES = {
        INVALID_NAME_TYPE: 'Name must be string!',
        INVALID_NAME_LENGTH: 'Name must be between between 2 and 20 symbols long!',
        INVALID_NAME_SYMBOLS: 'Name can contain only latin symbols and whitespaces!',
        INVALID_MANA: 'Mana must be a positive integer number!',
        INVALID_EFFECT: 'Effect must be a function with 1 parameter!',
        INVALID_DAMAGE: 'Damage must be a positive number that is at most 100!',
        INVALID_HEALTH: 'Health must be a positive number that is at most 200!',
        INVALID_SPEED: 'Speed must be a positive number that is at most 100!',
        INVALID_COUNT: 'Count must be a positive integer number!',
        INVALID_SPELL_OBJECT: 'Passed objects must be Spell-like objects!',
        NOT_ENOUGH_MANA: 'Not enough mana!',
        TARGET_NOT_FOUND: 'Target not found!',
        INVALID_BATTLE_PARTICIPANT: 'Battle participants must be ArmyUnit-like!'
    };

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

    let validatorForNames = function (value) {
        if (typeof value !== 'string') {
            throw Error(ERROR_MESSAGES.INVALID_NAME_TYPE);
        }
        if (value.length < 2 || value.length > 20) {
            throw Error(ERROR_MESSAGES.INVALID_NAME_LENGTH);
        }
        if (value.match(!/[A-Za-z ]/)) {
            throw Error(ERROR_MESSAGES.INVALID_NAME_SYMBOLS);
        }
    };

    let validatorInRange = function (value, upperLimit, error) {
        if (value < 1 || value > upperLimit) {
            throw Error(error);
        }
    };

    class Spell {
        constructor(name, manaCost, effect) {
            this.name = name;
            this.manaCost = manaCost;
            this.effect = effect;
        }

        get name() {
            return this._name;
        }
        set name(value) {
            validatorForNames(value);
            this._name = value;
        }

        get manaCost() {
            return this._manaCost;
        }

        set manaCost(value) {
            if (typeof value !== 'number' || value < 0) {
                throw Error(ERROR_MESSAGES.INVALID_MANA);
            }

            this._manaCost = value;
        }

        get effect() {
            return this._effect;
        }

        set effect(value) {
            if (typeof value !== 'function' || value.length !== 1) {
                throw Error(ERROR_MESSAGES.INVALID_EFFECT);
            }

            this._effect = value;
        }

    }
    class Unit {
        constructor(name, alignment) {
            this.name = name;
            this.alignment = alignment;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            validatorForNames(value);
            this._name = value;
        }
        get alignment() {
            return this._alignment;
        }
        set alignment(value) {
            if (value === 'good' || value === 'neutral' || value === 'evil') {
                this._alignment = value;
            } else {
                throw Error('Alignment must be good, neutral or evil!');
            }
        }
    }
    class ArmyUnit extends Unit {
        constructor(name, alignment, damage, health, count, speed) {
            super(name, alignment);
            this._id = Id.getNextID();
            this.damage = damage;
            this.health = health;
            this.count = count;
            this.speed = speed;
        }
        get id() {
            return this._id;
        }
        get damage() {
            return this._damage;
        }
        set damage(value) {
            validatorInRange(value, 100, ERROR_MESSAGES.INVALID_DAMAGE);
            this._damage = value;
        }
        get health() {
            return this._health;
        }
        set health(value) {
            validatorInRange(value, 200, ERROR_MESSAGES.INVALID_HEALTH);
            this._health = value;
        }
        get count() {
            return this._count;
        }
        set count(value) {
            if (typeof value !== 'number' || value < 1) {
                throw Error(ERROR_MESSAGES.INVALID_COUNT);
            }
            this._count = value;
        }
        get speed() {
            return this._speed;
        }
        set speed(value) {
            validatorInRange(value, 100, ERROR_MESSAGES.INVALID_SPEED);
            this._speed = value;
        }
    }
    class Commander extends Unit {
        constructor(name, alignment, mana) {
            super(name, alignment);
            this.mana = mana;
            this._spellbook = [];
            this._army = [];
        }
        get mana() {
            return this._mana;
        }
        set mana(value) {
            if (typeof value !== 'number' || value < 1) {
                throw Error(ERROR_MESSAGES.INVALID_MANA);
            }
            this._mana = value;
        }
        get spellbook() {
            return this._spellbook;
        }
        set spellbook(value) {
            this._spellbook = value;
        }
        get army() {
            return this._army;
        }
        set army(value) {
            this._army = value;
        }
    }
    const battlemanagerData = {
        commanders: [],
        armyUnits: [],
    };
    const battlemanager = {
        getCommander: function (name, alignment, mana) {
            return new Commander(name, alignment, mana);
        },
        getArmyUnit: function (options) {
            const { name, alignment, damage, health, count, speed } = options;
            const unit = new ArmyUnit(name, alignment, damage, health, count, speed);
            battlemanagerData.armyUnits.push(unit);
            return unit;
        },
        getSpell: function (name, manaCost, effect) {
            return new Spell(name, manaCost, effect);
        },
        addCommanders: function (...commanders) {
            battlemanagerData.commanders.push(...commanders);

            return this;
        },
        addArmyUnitTo: function (commanderName, armyUnit) {
            let result = battlemanagerData.commanders.find(c => c.name === commanderName);
            if (typeof result === 'undefined') {
                throw Error('Commander not found');
            }
            battlemanagerData.armyUnits.push(armyUnit);

            return this;
        },
        addSpellsTo: function (commanderName, ...spells) {
            let result = battlemanagerData.commanders.find(c => c.name === commanderName);
            if (typeof result === 'undefined') {
                throw Error('Commander not found');
            }
            result.spellbook.push(...(spells.map(s => new Spell(s.name, s.manaCost, s.effect))));

            return this;
        },
        findCommanders: function (query) {

        },
        findArmyUnitById: function (id) {
            return battlemanagerData.armyUnits.find(u => u.id === id);
        },
        findArmyUnits: function (query) {

        },
        spellcast: function (casterName, spellName, targetUnitId) {

        },
        battle: function (attacker, defender) {

        }
    };

    return battlemanager;
}

module.exports = solve;