import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LazyLoadedLibraryComponent } from './lazy-loaded-library.component';



@NgModule({
  declarations: [LazyLoadedLibraryComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyLoadedLibraryComponent }
    ])
  ],
  exports: [LazyLoadedLibraryComponent]
})
export class LazyLoadedLibraryModule { }
