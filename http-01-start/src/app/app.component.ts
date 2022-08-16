import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostServive } from "./posts.service";
import { title } from "process";
import { Content } from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostServive) {}

  ngOnInit() {
    this.postsService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createAndStorePost(postData.title, postData.content);
    
  }

  onFetchPosts() {
    // Send Http request
    this.postsService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPost() {
    this.isFetching = true;

  }
}
