
const db=require('../util/database');

const Cart = require('./cart');







module.exports = class Product {
  constructor(id, title, imageurll, description, price) {
    this.id = id;
    this.title = title;
    this.imageurll = imageurll;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.execute(
      'INSERT INTO products (title,price,imageurll,description) VALUES (?,?,?,?)',
      [this.title,this.price,this.imageurll,this.description]
    );
    
  }

  static deleteById(id) {
   
    
  }

  static fetchAll() {
   return db.execute('SELECT *FROM products');
    
  }

  static findById(id, cb) {
   
    
  }
};
