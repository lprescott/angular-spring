import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo';
  greeting = {};
  constructor(private http: HttpClient) {
    http.get('/api/hello_world').subscribe(data => this.greeting = data);
  }
}
