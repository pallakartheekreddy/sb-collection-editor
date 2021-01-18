import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EditorService, TreeService } from '../../services';
import { IeventData } from '../../interfaces';
import * as _ from 'lodash-es';
import {formConfig} from './form-config';

@Component({
  selector: 'lib-meta-form',
  templateUrl: './meta-form.component.html',
  styleUrls: ['./meta-form.component.scss']
})
export class MetaFormComponent implements OnInit, OnChanges, OnDestroy {

  private onComponentDestroy$ = new Subject<any>();
  public metaDataFields: {};
  public formDataConfig;
  @Output() public prevNodeMeatadata: EventEmitter<IeventData> = new EventEmitter();
  constructor(private editorService: EditorService, public treeService: TreeService) { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.editorService.formData$.pipe(takeUntil(this.onComponentDestroy$)).subscribe((data: IeventData) => {
      console.log('incoming data --->', data);
      this.prevNodeMeatadata.emit({type: data.type, metadata: this.metaDataFields});
      this.metaDataFields = data.metadata ? data.metadata : this.metaDataFields;
      this.attachDefaultValues();
    });
  }

  // dataChanged(e) {
  //   this.treeService.setNodeTitle(_.get(this.metaDataFields, 'name'));
  // }

  attachDefaultValues() {
    this.formDataConfig = _.map(_.get(_.find(_.cloneDeep(formConfig), config => config.name === 'First Section'), 'fields'), val => {
      if (_.get(this.metaDataFields, val.code)) {
        val['default'] = _.get(this.metaDataFields, val.code);
      }
      if (val.code === 'title' && _.get(this.metaDataFields, 'name')) {
        val['default'] = _.get(this.metaDataFields, 'name');
      }
      return val;
    });
    // console.log('config--->', this.formDataConfig);
  }

  outputData(eventData) {
    if (eventData) {
      console.log('eventData outputData------>', eventData.value);
      // this.metaDataFields = eventData.value;
      // this.treeService.setNodeTitle(_.get(this.metaDataFields, 'name'));
    }
  }

  onStatusChanges(eventData) {
    // if (eventData) {
    //   console.log('eventData statusChanges------>', eventData);
    //   this.metaDataFields = eventData.value;
    //   this.treeService.setNodeTitle(_.get(this.metaDataFields, 'name'));
    // }
  }

  valueChanges(eventData) {
    if (eventData) {
      _.forIn(eventData, (val, key) => {
        // tslint:disable-next-line:no-string-literal
        key === 'title' ? this.metaDataFields['name'] = val : this.metaDataFields[key] = val;
      });
      this.treeService.setNodeTitle(_.get(eventData, 'title'));
    }
  }

  ngOnDestroy() {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete();
  }
}
