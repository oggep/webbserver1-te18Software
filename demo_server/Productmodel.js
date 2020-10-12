const mongoose=require('mongoose');

const productSchema = new mongoose.Schema({
    productname: String,
    type: String,
    number: Number
  });
  
  const Product = mongoose.model('product', productSchema);
  
  exports.createPerson = (name, type, number) => {
      var Product = new Product({
          productname: name, 
          type: type, 
          number: number
         })
         
         return product
    }