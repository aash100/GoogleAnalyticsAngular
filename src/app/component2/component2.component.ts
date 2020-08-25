import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  public userName: string;
  public age: string;
  public name: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:9000/name/aashish').subscribe((data) => {
      console.log('dataa', data);
      this.userName = data['name'];
    }
    );
    this.http.post('http://localhost:9000/name/saveName', { name: 'Aashish', age: '26' }).subscribe((data) => {
      console.log('post data', data);
      this.age = data['age'];
      this.name = data['name'];

    });
  }

}
