import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  @Input()
  title:string= ""

  @Input()
  skin:string= ""

  constructor() { }

  ngOnInit() {
  }

}
