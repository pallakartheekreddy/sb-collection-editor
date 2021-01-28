export const toolbarConfig = {
  headerName: 'Edit Collection',
  title: 'Digital-Textbook Editor',
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
              "children": {
                "Content": [
                  "Explanation Content",
                  "Learning Resource",
                  "Teacher Resource",
                  "Course Assessment"
              ],
              "QuestionSet": [
                  "Practice Question Set"
              ],
              "Collection": []
              }
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

export const PLAYER_CONFIG = {
  "playerConfig": {
    "context": {
      "mode": "edit",
      "partner": [],
      "pdata": {
        "id": "sunbird.portal",
        "ver": "1.8.0",
        "pid": "sunbird-portal"
      }
    },
    "config": {
      "showEndPage": false,
      "endPage": [
        {
          "template": "assessment",
          "contentType": [
            "SelfAssess"
          ]
        }
      ],
      "showStartPage": true,
      "host": "",
      "overlay": {
        "showUser": false
      },
      "splash": {
        "text": "",
        "icon": "",
        "bgImage": "assets/icons/splacebackground_1.png",
        "webLink": ""
      },
      "apislug": "/action",
      "repos": [
        "/sunbird-plugins/renderer"
      ],
      "plugins": [
        {
          "id": "org.sunbird.iframeEvent",
          "ver": 1.0,
          "type": "plugin"
        },
        {
          "id": "org.sunbird.player.endpage",
          "ver": 1.1,
          "type": "plugin"
        }
      ]
    }
  },
  "contentType": {
    "Course": "Course"
  },
  "MIME_TYPE": {
    "collection": "application/vnd.ekstep.content-collection",
    "ecmlContent": "application/vnd.ekstep.ecml-archive",
    "genericMimeType": [
      "application/pdf",
      "video/mp4",
      "video/x-youtube",
      "video/youtube",
      "application/vnd.ekstep.html-archive",
      "application/epub",
      "application/vnd.ekstep.h5p-archive",
      "video/webm",
      "text/x-url"
    ],
    "pdf": "application/pdf",
    "mp4": "video/mp4",
    "youtube": "video/x-youtube",
    "pYoutube": "video/youtube",
    "html": "application/vnd.ekstep.html-archive",
    "ePub": "application/epub",
    "h5p": "application/vnd.ekstep.h5p-archive",
    "webm": "video/webm",
    "xUrl": "text/x-url"
  },
  "baseURL": "/content/preview/preview.html?webview=true",
  "localBaseUrl": "/contentPlayer/preview/preview.html?",
  "cdnUrl": "/content/preview/preview_cdn.html?webview=true"
};






