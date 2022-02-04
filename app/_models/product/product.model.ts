import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import { Tag } from "./tags.model";

export interface product {
    id?:number;
    data:ProductLang[];
    //name:string;
    price:number;
    discount?:number;
    imgUrl?:string;
    count?:number;
    category?:Category;
    tags?:Tag[];
    paymentTypes?:PaymentType[];
    //description?:string;
}