import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

import { IPost } from "../../store/models/post.model";

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.scss"]
})
export class PostComponent implements OnInit {
  @Input() posts: Observable<IPost[]>;
  @Output() goToDetailEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {}

  goToDetail(postId: number) {
    this.goToDetailEvent.emit(postId);
  }
}
