import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  readonly ROOT_URL = 'http://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) { }
  getPosts() {
    const headers = new HttpHeaders().set('Authorization', 'auth-token');
    this.posts = this.http.get<Post[]>(this.ROOT_URL + '/posts', { headers });
  }
  createPost() {
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello World'
    };

    this.newPost = this.http.post<Post>(this.ROOT_URL + '/posts', data);
  }
}
