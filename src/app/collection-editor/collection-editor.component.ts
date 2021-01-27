import { Component, OnInit } from '@angular/core';
import { editorInput } from '../data';

@Component({
  selector: 'app-collection-editor',
  templateUrl: './collection-editor.component.html',
  styleUrls: ['./collection-editor.component.scss']
})
export class CollectionEditorComponent implements OnInit {
  editorInputData = editorInput;
  constructor() { }

  ngOnInit() {
  }

}
