var fs = require("fs")

module.exports = {
  data: {
    sum: 0, // 文件夹计数
    treeLog: '', // 目录树
  },
  /*无限子节点异步回调创建目录结构*/
   dirCreate: function (mkDir, path, tpl) {
    var self = this

    var rootPath = 'gen-pages/' // 生成文件存放目录
    var valTpl = tpl?tpl:valTpl
    for (var i = 0; i < mkDir.length; i++) {
      var name = mkDir[i].name
      var child = mkDir[i].children
      var path_block = path ? (path + '/' + name) : name;

      // 防止异步回调后变量被污染
      (function (path, child, name) {
          
          fs.mkdir(rootPath + path, function (err) {
           if (err) {
              return console.error(err)
            }
            if (child) { /*判断文件or文件夹 --- 文件夹*/
              self.dirCreate(child, path) /*递归*/
            }

             (function (filePath) { // 创建文件
               fs.appendFile(rootPath + filePath + '/' + name +'.vue', valTpl, 'utf8', function (err) {
                  if (err) {
                     return console.error(err)
                  }
              })
             })(path) 
            
          })

         
      })(path_block, child, name) 
    }
  },

  /*计算总执行次数*/
  dirSum: function (mkDir) { 
    console.log('\x1B[90m' + 'Create file to ' + __dirname + '\x1B[39m')
    var self = this
    function count (mkDir, j) { /*i为次数, j为层级*/
      for (var i = 0; i < mkDir.length; i++) {
        (function (mkDir, i, j) {
          var log = log_j(j)
          var name = mkDir[i].name.lastIndexOf('.') === -1 ? mkDir[i].name : ('\x1B[90m' + mkDir[i].name + '\x1B[39m')
          self.data.treeLog += log + '--' + name + '\n'
          if (mkDir[i].children) {
            count(mkDir[i].children, ++j)
          }
          self.data.sum++
        })(mkDir, i, j ? j : 0)
      }
    }

    function log_j (val) {
      var log = ''
      if (val === 0) return '|'
      for (var i = 0; i < val; i++) {
        log += '　' + '|'
      }
      return '|' + log
    }

    count(mkDir)
  },


   /*异步过程界面化*/
  dirTree: function (mkDir) {
    this.dirSum(mkDir)
      console.log('\x1B[32m' + 'All package installed ' + this.data.sum + ' folder installed from ' + __dirname + '\x1B[39m')
      console.log('\x1B[35m' + 'Project catalogue:' + '\x1B[39m')
      console.log(this.data.treeLog + '------------------------------------')
  }
}
