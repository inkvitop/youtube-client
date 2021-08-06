import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  status: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleSort() {
    this.status = !this.status;
    const header = document.querySelector('.header');
    if (this.status) {
      header?.classList.add('sort-open');
    } else {
      header?.classList.remove('sort-open');
    }
  }
}
