import { Component, OnInit } from '@angular/core';
import { APIService } from './../api.service';

@Component({
  selector: 'image-details',
  template: `
    <h2>Images List</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let image of images">
      <li>{{image.title}}</li>
      <img src={{image.url}}>
    </ul>
  `,
  styles: []
})
export class ImagesListComponent implements OnInit {

  public images = [];
  public errorMsg;
  constructor(private _apiService: APIService) { }

  ngOnInit() {
    this._apiService.getImages()
      .subscribe(data => this.images = data,
                error => this.errorMsg = error);
  }



}
