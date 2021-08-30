import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackByPipe } from './pipes/track-by.pipe';



@NgModule({
  declarations: [
    TrackByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrackByPipe
  ]
})
export class SharedModule { }
