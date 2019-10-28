import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {}

  private products = [
    {
      id: 1,
      name: "Fujifilm X100T 16 MP Digital Camera",
      price: 520.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_1.png"
    },
    {
      id: 2,
      name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      price: 610.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_2.png"
    },
    {
      id: 3,
      name: "Blue Yeti USB Microphone Blackout Edition",
      price: 120.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_3.png"
    },
    {
      id: 4,
      name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
      price: 410.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_4.png"
    },
    {
      id: 5,
      name: "Pryma Headphones, Rose Gold & Grey",
      price: 180.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_5.png"
    },
    {
      id: 6,
      name: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      price: 590.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_6.png"
    },
    {
      id: 7,
      name: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      price: 610.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_7.png"
    },
    {
      id: 8,
      name: "Blue Yeti USB Microphone Blackout Edition",
      price: 120.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_8.png"
    },
    {
      id: 9,
      name: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
      price: 590.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_9.png"
    },
    {
      id: 10,
      name: "Pryma Headphones, Rose Gold & Grey",
      price: 180.0,
      decription: "Fujifilm X100T 16 MP Digital Camera",
      imagePath: "/assets/images/product_10.png"
    }
  ];

  getProducts(): Observable<any> {
    // return this.http.get("https://jsonplaceholder.typicode.com/products");
    return of(this.products);
  }

  getProduct(productId: number): Observable<any> {
    return this.http.get(`https://jsonplaceholder.typicode.com/products/${productId}`);
  }
}
