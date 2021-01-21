import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash-es';
import { UUID } from 'angular2-uuid';
import { editorConfig } from '../../editor.config';
import { TreeService, EditorService } from '../../services';

@Component({
  selector: 'lib-collection-tree-new',
  templateUrl: './collection-tree.component.html',
  styleUrls: ['./collection-tree.component.scss']
})
export class CollectionTreeComponent implements OnInit {

  @Input() public nodes: any;
  config: any = _.cloneDeep(editorConfig);
  @Output() public treeEventEmitter: EventEmitter<any> = new EventEmitter();
  public rootNode: any;
  constructor( public treeService: TreeService) { }

  ngOnInit() {
    this.initialize();
  }

  private initialize() {
    const data = this.nodes.data;
    const treeData = this.buildTree(this.nodes.data);
    this.rootNode = [{
      'id': data.identifier || UUID.UUID(),
      'title': data.name,
      'tooltip': data.name,
      'objectType': data.primaryCategory,
      'metadata': _.omit(data, ['children', 'collections']),
      'folder': true,
      'children': treeData,
      'root': true,
      'icon': _.get(this.config, 'editorConfig.iconClass')
    }];
  }

  buildTree(data, tree?, level?) {
    tree = tree || [];
    if (data.children) { data.children = _.sortBy(data.children, ['index']); }
    data['level'] = level ? (level + 1) : 1;
    _.forEach(data.children, (child) => {
      // const objectType = this.getObjectType(child.contentType);
      console.log(data.level, child.name, _.get(this.config, `editorConfig.hierarchy.level${data.level}.iconClass`), '-------->NNNNNN');
      const childTree = [];
      // if (objectType) {
      tree.push({
        'id': child.identifier || UUID.UUID(),
        'title': child.name,
        'tooltip': child.name,
        'objectType': _.get(this.config, `editorConfig.hierarchy.level.${data.level}.type`),
        'metadata': _.omit(child, ['children', 'collections']),
        'folder': true,
        'children': childTree,
        'root': false,
        'icon': _.get(this.config, `editorConfig.hierarchy.level.${data.level}.iconClass`) || 'fa fa-folder-o'
      });
      if (child.visibility === 'Parent') {
        this.buildTree(child, childTree, data.level);
      }
      // }
    });
    return tree;
  }


  public treeEventListener(event: any) {
    switch (event.type) {
      case 'nodeSelect':
        this.treeEventEmitter.emit({ 'type': 'nodeSelect', 'data': event.data });
        break;
      case 'addChild':
        this.treeEventEmitter.emit({ 'type': 'addChild', 'data': event.data });
        break;
      case 'addSibling':
        this.treeEventEmitter.emit({ 'type': 'addChild', 'data': event.data });
        break;
      default:
        break;
    }
  }

}
