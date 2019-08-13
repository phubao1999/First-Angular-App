import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  readonly ROOT_URL = 'http://jsonplaceholder.typicode.com';
  private apiURL = 'https://api.unsplash.com/photos/?client_id=708471c8147b409e49c8b4580ebae3607ca1d1c87da14d85f09c0c450f5e25cf';
  photos: any = {};

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient) { this.getPhoto(); }
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
  getData() {
    return this.http.get(this.apiURL).pipe(map((response: Response) => response));
  }
  getPhoto() {
    this.getData().subscribe((data) => {
      console.log(data);
      this.photos = data;
    });
  }
}
