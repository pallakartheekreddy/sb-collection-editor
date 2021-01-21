export const toolbarConfig = {
  headerName: 'Edit Course',
  title: 'Course Editor',
  buttons: [{
    name: 'Save as draft',
    type: 'saveContent',
    buttonType: 'button',
    style: 'sb-btn sb-btn-normal sb-btn-outline-primary mr-10',
  },
  {
    name: 'Submit',
    type: 'submitContent',
    buttonType: 'button',
    style: 'sb-btn sb-btn-normal sb-btn-primary mr-10',
    slot: `<i class="trash alternate outline icon"></i>`
  },
  // {
  //   name: 'Add Resource',
  //   type: 'addResource',
  //   buttonType: 'button',
  //   style: 'sb-btn sb-btn-normal sb-btn-primary',
  //   slot: `<i class="trash alternate outline icon"></i>`
  // }
  ]
};

export const questionToolbarConfig = {
  headerName: 'Edit Question',
  title: 'Q1 | MCQ',
  buttons: [{
    name: 'Preview',
    type: 'previewContent',
    buttonType: 'button',
    style: 'sb-btn sb-btn-normal sb-btn-outline-primary mr-10',
    slot: `icon eye`
  }, {
    name: 'Cancel',
    type: 'cancelContent',
    buttonType: 'button',
    style: 'sb-btn sb-btn-normal sb-btn-outline-primary mr-10',
  },
  {
    name: 'Save',
    type: 'saveContent',
    buttonType: 'button',
    style: 'sb-btn sb-btn-normal sb-btn-primary'
  }
  ]
};


export const templateList = [
    { questionCategory : 'VSA', type: 'reference' },
    { questionCategory : 'SA', type: 'reference' },
    { questionCategory : 'LA', type: 'reference' },
    { questionCategory : 'MCQ' , type: 'mcq'},
    { questionCategory : 'CuriosityQuestion', type: 'reference' }
];

export const editorConfig = {
    'nodeDisplayCriteria': {
      'contentType': ['QuestionSet', 'Question']
    },
    'keywordsLimit': 500,
     'editorConfig': {
      "maxDepth": 2,
      "objectType": "Collection",
      'primaryCategory': 'Digital Textbook',
      'isRoot': true,
      'iconClass': 'fa fa-book',
      "children": {},
      "hierarchy": {
          "level1": {
              "name": "Chapter",
              "type": "Unit",
              'iconClass': 'fa fa-folder-o',
              "children": {}
          },
          "level2": {
              "name": "Sub-Chapter",
              "type": "Unit",
              'iconClass': 'fa fa-folder-o',
              "children": {
                  "Content": [
                      "Explanation Content",
                      "Learning Resource",
                      "eTextbook",
                      "Teacher Resource",
                      "Course Assessment"
                  ],
                  "QuestionSet": [
                      "Practice Question Set"
                  ],
                  "Collection": []
              }
          }
      },
        'mode': 'Edit'
      }
    // {
    //   'rules': {
    //     'levels': 4,
    //     'objectTypes': [
    //       {
    //         'type': 'QuestionSet',
    //         'label': 'QuestionSet',
    //         'isRoot': true,
    //         'editable': true,
    //         'childrenTypes': [
    //           'QuestionSet', 'Question'
    //         ],
    //         'addType': 'Editor',
    //         'iconClass': 'fa fa-book'
    //       },
    //       {
    //         'type': 'Question',
    //         'label': 'Question',
    //         'isRoot': false,
    //         'editable': true,
    //         'childrenTypes': [],
    //         'addType': 'Editor',
    //         'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //         // 'type': 'Course',
    //         // 'label': 'Course',
    //         'type': 'TextBook',
    //         'label': 'TextBook',
    //         'isRoot': true,
    //         'editable': true,
    //         'childrenTypes': [
    //             // 'CourseUnit'
    //             'TextBookUnit'
    //         ],
    //         'addType': 'Editor',
    //         'iconClass': 'fa fa-book'
    //       },
    //       {
    //           // 'type': 'CourseUnit',
    //           // 'label': 'Course Unit',
    //           'type': 'TextBookUnit',
    //           'label': 'TextBook Unit',
    //           'isRoot': false,
    //           'editable': true,
    //           'childrenTypes': [
    //               //'CourseUnit'
    //               'TextBookUnit',
    //               'Collection',
    //               'Resource',
    //               'SelfAssess',
    //               'FocusSpot',
    //               'LearningOutcomeDefinition',
    //               'PracticeQuestionSet',
    //               'CuriosityQuestions',
    //               'MarkingSchemeRubric',
    //               'ExplanationResource',
    //               'ExperientialResource'
    //           ],
    //           'addType': 'Editor',
    //           'iconClass': 'fa fa-folder-o'
    //       },
    //       {
    //           'type': 'Collection',
    //           'label': 'Collection',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'Resource',
    //           'label': 'Resource',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'SelfAssess',
    //           'label': 'SelfAssess',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'FocusSpot',
    //           'label': 'FocusSpot',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'LearningOutcomeDefinition',
    //           'label': 'LearningOutcomeDefinition',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'PracticeQuestionSet',
    //           'label': 'PracticeQuestionSet',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'CuriosityQuestions',
    //           'label': 'CuriosityQuestions',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'MarkingSchemeRubric',
    //           'label': 'MarkingSchemeRubric',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'ExplanationResource',
    //           'label': 'ExplanationResource',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       },
    //       {
    //           'type': 'ExperientialResource',
    //           'label': 'ExperientialResource',
    //           'isRoot': false,
    //           'editable': false,
    //           'childrenTypes': [],
    //           'addType': 'Browser',
    //           'iconClass': 'fa fa-file-o'
    //       }
    //     ]
    //   },
    //   'mode': 'Edit'
    // }
};

export const rootMenuTemplate = `<span class="ui dropdown sb-dotted-dropdown" autoclose="itemClick" suidropdown="" tabindex="0">
<span id="contextMenu" class="p-0 w-auto"><i class="icon ellipsis vertical sb-color-black"></i></span>
<span id= "contextMenuDropDown" class="menu transition hidden" suidropdownmenu="" style="">
  <div id="addchild" class="item">Add Child</div>
</span>
</span>
<span id= "removeNodeIcon"> <i class="fa fa-trash-o" type="button"></i> </span>`;

export const folderMenuTemplate = `<span class="ui dropdown sb-dotted-dropdown" autoclose="itemClick" suidropdown="" tabindex="0">
<span id="contextMenu" class="p-0 w-auto"><i class="icon ellipsis vertical sb-color-black"></i></span>
<span id= "contextMenuDropDown" class="menu transition hidden" suidropdownmenu="" style="">
  <div id="addsibling" class="item">Add Sibling</div>
  <div id="addchild" class="item">Add Child</div>
  <div id="delete" class="item">Delete</div>
</span>
</span>
<span id= "removeNodeIcon"> <i class="fa fa-trash-o" type="button"></i> </span>`;


