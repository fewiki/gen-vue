/**
 * 保持代码整洁优雅，享受编程
 * @author lgzhang08@gmail.com
 * 
 * 路由
 */
const fs = require("fs")
const Utils = require("../gen-file/utils")
const MkDir = require('../gen-file/mkDir')
// 模版文件夹
const templatePath = __dirname.replace('\\gen-file', '') + '/template/'
module.exports = {
	
	genRouterFile: function() {
		var routes = ''
	    try{
	        routes = eval(fs.readFileSync('./' + Utils.getQuery('-router'), 'utf8'))

	    } catch(error) {
	        routes = require('../template/router.js')
	    }
	    console.log("routes", Utils.getQuery('-router'))
	    fs.readFile(templatePath + 'vue-single.vue', 'utf8', function (err, tpl) {
	        if (err) {
	          return console.error(err);
	        }
	        // 打印目录树
	        MkDir.dirTree(routes)
	        // 创建文件夹
	        MkDir.dirCreate(routes, '',  tpl)
	    });
	}
}