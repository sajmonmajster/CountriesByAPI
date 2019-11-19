import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../app.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})

export class FieldComponent implements OnInit {

  countries: object;

  constructor(private appService: AppService) { }

  hero: string;
  ngOnInit() {
    this.appService.getConfig().subscribe((data) => {
      console.log(data);
      this.countries = data['results'];
    });

}
}

//api https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f74608b24d6446fea8872dc8ec4ef361

// export class FieldComponent implements OnInit {

//   hero: string;

//   constructor(private http: HttpClient) { }

//   configUrl = 'https://jsonplaceholder.typicode.com/photos';

//     getConfig() {
//         let a = this.http.get(this.configUrl);
//         console.log(a);
//         return this.http.get(this.configUrl);
//       }
//     showConfig() {
//       let a = this.http.get(this.configUrl).subscribe
//       console.log(a);
//     }

//   ngOnInit() {
//   }

// }
