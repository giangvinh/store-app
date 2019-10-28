import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { IProduct } from "../../store/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() products: IProduct[];
  @Output() goToDetailEvent: EventEmitter<number> = new EventEmitter<number>();
  @Input() isMobile: boolean;
  constructor() {}

  ngOnInit() {}

  goToDetail(productId: number) {
    this.goToDetailEvent.emit(productId);
  }
}
