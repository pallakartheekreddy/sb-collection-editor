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
  public metaDataFields: any;
  public formOutputData: any;
  public valueChange: boolean;
  public formDataConfig;
  public rootLevelConfig = ['title', 'description', 'board', 'medium', 'gradeLevel', 'subject', 'topic',
  'boardIds', 'gradeLevelIds', 'subjectIds', 'mediumIds', 'topicsIds',
  'targetFWIds', 'targetBoardIds', 'targetGradeLevelIds', 'targetSubjectIds', 'targetMediumIds', 'targetTopicIds'];
  public unitLevelConfig = ['title', 'description', 'keywords', 'topic'];
  @Output() public prevNodeMeatadata: EventEmitter<IeventData> = new EventEmitter();
  constructor(private editorService: EditorService, public treeService: TreeService) { }

  ngOnChanges() {

  }

  ngOnInit() {
    this.editorService.formData$.pipe(takeUntil(this.onComponentDestroy$)).subscribe((data: IeventData) => {
      console.log('incoming data --->', data);
      if (this.valueChange || data.type === 'saveContent') {
        this.prevNodeMeatadata.emit({type: data.type, metadata: this.formOutputData || this.metaDataFields});
        this.valueChange = false;
      }
      this.metaDataFields = data.metadata ? data.metadata : this.metaDataFields;
      this.attachDefaultValues();
    });
  }

  // dataChanged(e) {
  //   this.treeService.setNodeTitle(_.get(this.metaDataFields, 'name'));
  // }

  attachDefaultValues() {
    // tslint:disable-next-line:max-line-length
    // this.formDataConfig = _.map(_.filter(_.cloneDeep(formConfig), data => {
    //   if (this.metaDataFields.visibility === 'Default' && _.includes(this.rootLevelConfig, data.code)) {
    //     return data;
    //   } else if (this.metaDataFields.visibility === 'Parent' && _.includes(this.unitLevelConfig, data.code)) {
    //     console.log('---->//////', data);
    //     return data;
    //   }
    // }), val => {
    //   if (_.get(this.metaDataFields, val.code)) {
    //     val.default = _.get(this.metaDataFields, val.code);
    //   }
    //   if (val.code === 'title' && _.get(this.metaDataFields, 'name')) {
    //     val.default = _.get(this.metaDataFields, 'name');
    //   }
    //   return val;
    // });


    this.formDataConfig = [];

    _.forEach(_.cloneDeep(formConfig), section => {
      _.forEach(section.fields, field => {
        field.default = _.get(this.metaDataFields, field.code);
      });
      this.formDataConfig.push(section);
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
      this.valueChange = true;
      this.formOutputData = {};
      _.forIn(eventData, (val, key) => {
        // tslint:disable-next-line:no-string-literal
        key === 'name' ? this.metaDataFields['name'] = val : this.metaDataFields[key] = val;
      });
      this.treeService.setNodeTitle(_.get(eventData, 'name'));
    }
  }

  ngOnDestroy() {
    this.onComponentDestroy$.next();
    this.onComponentDestroy$.complete();
  }
}
