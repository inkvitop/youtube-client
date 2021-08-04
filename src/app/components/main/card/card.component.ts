import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

import response from "../../../../assets/response.json";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {      
  public data = response;
  public list = this.data.items;

  constructor() {
    
  }

  ngOnInit(): void {
  }
}
