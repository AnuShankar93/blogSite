import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private fetchData: DataserviceService){

  }
  public blogs;

  ngOnInit() {
    this.fetchData.getBlogPost().subscribe(data => this.blogs = data);
    this.fetchData.getCategories().subscribe(data => {
      console.log(data);
    })
  }
  title = 'blogSite';
}
