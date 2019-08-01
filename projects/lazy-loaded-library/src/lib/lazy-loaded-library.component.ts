import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-lazy-loaded-library',
  template: `
    <p>
      lazy-loaded-library works!
    </p>
  `,
  styles: []
})
export class LazyLoadedLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
