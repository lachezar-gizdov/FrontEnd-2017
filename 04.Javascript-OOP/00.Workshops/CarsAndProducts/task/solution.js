function solve() {
    class Product {
        constructor(productType, name, price) {
            this._productType = productType;
            this._name = name;
            this._price = price;
        }
        get productType() {
            return this._productType;
        }
        set productType(value) {
            if (typeof value !== 'string') {
                throw Error('Must be a string');
            }
            this._productType = value;
        }
        get name() {
            return this._name;
        }
        set name(value) {
            if (typeof value !== 'string') {
                throw Error('Must be a string');
            }
            this._name = value;
        }
        get price() {
            return this._price;
        }
        set price(value) {
            if (typeof value !== 'number') {
                throw Error('Must be a string');
            }
            this._price = value;
        }
    }

    class ShoppingCart {
        constructor() {
            this._products = [];
        }
        get products() {
            return this._products;
        }
        add(product) {
            this.products.push(new Product(product.productType, product.name, product.price));
            return this;
        }
        remove(product) {
            let index = this.products.findIndex(p => p.name === product.name && p.productType === product.productType && p.price === product.price);
            if (index < 0) {
                throw Error('There is no such product!');
            }
            this.products.splice(index, 1);
        }
        showCost() {
            return this.products.reduce((cost, product) => cost + product.price, 0);
        }
        showProductTypes() {
            const uniqueTypes = {};
            this.products.forEach(p => uniqueTypes[p.productType] = true);
            return Object.keys(uniqueTypes).sort();
        }
        getInfo() {
            let groupByName = {};
            this.products.forEach(p => {
                if (groupByName.hasOwnProperty(p.name)) {
                    groupByName[p.name].quantity += 1;
                    groupByName[p.name].totalPrice += p.price;
                } else {
                    groupByName[p.name] = {
                        name: p.name,
                        quantity: 1,
                        totalPrice: p.price
                    };
                }
            });

            let groups = Object.keys(groupByName)
                .sort()
                .map(n => {
                    return {
                        name: n,
                        quantity: groupByName[n].quantity,
                        totalPrice: groupByName[n].totalPrice
                    };
                });

            return {
                products: groups,
                totalPrice: this.showCost()
            };
        }

    }
    return {
        Product, ShoppingCart
    };
}

module.exports = solve;