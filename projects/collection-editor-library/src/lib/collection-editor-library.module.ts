import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonFormElementsModule } from 'v-dynamic-forms';
import { SuiModule } from 'ng2-semantic-ui';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HttpClientModule } from '@angular/common/http';
import { CollectionEditorLibraryComponent } from './collection-editor-library.component';
import { CollectionTreeComponent, ContentplayerPageComponent, EditorBaseComponent, EditorHeaderComponent,
  FancyTreeComponent, MetaFormComponent } from './components';
import {SunbirdPdfPlayerModule} from '@project-sunbird/sunbird-pdf-player-v8';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v8';

@NgModule({
  declarations: [CollectionEditorLibraryComponent, CollectionTreeComponent, ContentplayerPageComponent, EditorBaseComponent,
    EditorHeaderComponent, FancyTreeComponent, MetaFormComponent],
  imports: [CommonModule, FormsModule, RouterModule.forRoot([]), CommonFormElementsModule, InfiniteScrollModule,
  HttpClientModule, SuiModule, SunbirdPdfPlayerModule, SunbirdVideoPlayerModule],
  exports: [CollectionEditorLibraryComponent, EditorBaseComponent]
})
export class CollectionEditorLibraryModule { }
