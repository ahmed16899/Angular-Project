import { product } from "src/app/_models/product/product.model";
import { EventEmitter } from '@angular/core';

export class ProductService {

cart : product[]=[];
searched:any;
  productsArray: product[] = [
    {
      id: 1,
      data: [{name:"camera" , description:"test" , lang:{name:"en"}}],
      category:{name:'mateials'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/300',
      count: 1,
      discount:10
    },
    {
      id: 2,
      data: [{name:"tv" , description:"test" , lang:{name:"en"}}],
      category:{name:'mateials'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/301',
      count: 1
    },
    {
      id: 3,
      data: [{name:"camera phone" , description:"test" , lang:{name:"en"}}],
      category:{name:'electionics'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/302',
      count: 1
    },
    {
      id: 4,
      data: [{name:"hp" , description:"test" , lang:{name:"en"}}],
      category:{name:'electionics'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/303',
      count: 1
    },
    {
      id: 5,
      data: [{name:"dell" , description:"test" , lang:{name:"en"}}],
      category:{name:'Clothes'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/304',
      count: 1
    },
    {
      id: 6,
      data: [{name:"pc" , description:"test" , lang:{name:"en"}}],
      category:{name:'Clothes'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/305',
      count: 1
    },
    {
      id: 7,
      data: [{name:"laptop" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/306',
      count: 1
    },
    {
      id: 8,
      data: [{name:"samsung" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/307',
      count: 1
    },
    {
      id: 9,
      data: [{name:"lighter" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/307',
      count: 1
    },
    {
      id: 10,
      data: [{name:"washer" , description:"test" , lang:{name:"en"}}],
      category:{name:'mateials'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/300',
      count: 1,
      discount:10
    },
    {
      id: 11,
      data: [{name:"tv" , description:"test" , lang:{name:"en"}}],
      category:{name:'mateials'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/301',
      count: 1
    },
    {
      id: 12,
      data: [{name:"tobi" , description:"test" , lang:{name:"en"}}],
      category:{name:'electionics'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/302',
      count: 1
    },
    {
      id: 13,
      data: [{name:"farco" , description:"test" , lang:{name:"en"}}],
      category:{name:'electionics'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/303',
      count: 1
    },
    {
      id: 14,
      data: [{name:"parasayte" , description:"test" , lang:{name:"en"}}],
      category:{name:'Clothes'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/304',
      count: 1
    },
    {
      id: 15,
      data: [{name:"toshiba" , description:"test" , lang:{name:"en"}}],
      category:{name:'Clothes'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/305',
      count: 1
    },
    {
      id: 16,
      data: [{name:"fridge" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/306',
      count: 1
    },
    {
      id: 17,
      data: [{name:"book" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/307',
      count: 1
    },
    {
      id: 18,
      data: [{name:"radio" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/307',
      count: 1
    },
    {
      id: 19,
      data: [{name:"radioa" , description:"test" , lang:{name:"en"}}],
      category:{name:'books'},
      tags:[{name:'food'}],
      paymentTypes:[{name:'COD'}],
      price: 10,
      imgUrl: 'https://picsum.photos/200/307',
      count: 1
    },
    

  ]
  newCartChanged: EventEmitter<product[]> = new EventEmitter<product[]>();
  constructor() {

  }

  getAllProducts(): product[] {

    //return this.productsArray.splice(0);
    return this.productsArray;
  }
  /*getSearchProduct() {

    //return this.productsArray.splice(0);
    console.log(search)
  }*/
  addProduct(product1: product) {
    console.log(product1 + "from services");
    if (this.cart.includes(product1)) {
      product1.count!++;

    }
    else {
      this.cart.push(product1);
    }
    this.newCartChanged.emit(this.cart);

  }
  addToView(producT: product) {
    this.productsArray.push(producT);
    this.newCartChanged.emit(this.productsArray);

  }
  getProductById(id:number)
  {
    return this.productsArray.find(product => product.id == id)
  }
  deleteItem(product1 : product){
    //console.log("asasdasdasdasdasd" , product1.data[0].name)
    console.log(this.productsArray.indexOf(product1))
    this.productsArray.splice(this.productsArray.indexOf(product1),1)
    //console.log(this.productsArray)
    //console.log(product1);
    this.newCartChanged.emit(this.productsArray);

  }
  
}