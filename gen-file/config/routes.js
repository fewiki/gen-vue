/*------------------------注意事项------------------------
1、文件夹名称不可相同、文件名称相同的情况下后缀名不可相同
2、文件夹内方可创建child子项目目录，文件下创建child对象不执行
3、文件夹名称不可包含'.'字符
----------------------------END--------------------------*/

module.exports =  [
  {
    // path: '/router',
    name: 'router'
    // component: Router
  },
  {
    // path: '/details',
    name: 'details',
    // component: Details,
    children: [{
      // path: '/details/teacher',
      name: 'teacher'
      // component: ThemeTeacher
    },{
      // path: 'details/student',
      name: 'student'
      // component: ThemeStudent
    }]
  },
  {
    // path: '/test-weui',
    name: 'test-weui'
    // component: TestUI
  },
  {
    // path: '/teach',
    name: 'teach',
    // component: Teach,
    children: [{
      // path: '/teach/teach-reply',
      name: 'teach-reply'
      // component: TeachReply
    }]
  }
]
