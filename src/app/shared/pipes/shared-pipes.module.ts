import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightPipe } from './highlight.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [HighlightPipe, TruncatePipe],
    exports: [HighlightPipe, TruncatePipe]
})
export class SharedPipesModule { }
