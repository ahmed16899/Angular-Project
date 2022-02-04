import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/product/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryArray:Category[]=[
    {id:1 , name:'mateials'},
    {id:2 , name:'electionics'},
    {id:3 , name:'Clothes'},
    {id:4 , name:'books'},
    {id:5 , name:'baby'},
    {id:6 , name:'toys'},
    {id:7 , name:'sports'},
  ]
    constructor() { }
    getAllCategories () :Category[]
    {
      return this.categoryArray;
    }
  }
