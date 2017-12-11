/**
 * 保持代码整洁优雅，享受编程
 * @author lgzhang08@gmail.com
 * 
 * 组件 文件
 */
const fs = require("fs")
const Utils = require("../gen-file/utils")
// 模版文件夹
const templatePath = __dirname.replace('\\gen-file', '') + '/template/'
module.exports = {
	// 单文件
	createSingle: function(name) {
		fs.readFile(templatePath + 'vue-single.vue', 'utf8', function (err, tpl) {
	        if (err) {
	          return console.error(err);
	        }
	        // 创建文件
	        fs.appendFile(name +'.vue', tpl, 'utf8', function (err) {
                if (err) {
                    return console.error(err)
                }
            })
	    })
	},
	// 多文件
	createMulti: function(name) {
		fs.readFile(templatePath + '/vue-multi/vue-multi.vue', 'utf8', function (err, tpl) {
	        if (err) return console.error(err);
	        fs.appendFile(name +'.vue', tpl, 'utf8', function (err) { if (err) return console.error(err)})
	    })
	    fs.readFile(templatePath + '/vue-multi/vue-multi.less', 'utf8', function (err, tpl) {
	        if (err) return console.error(err);
	        fs.appendFile(name +'.less', tpl, 'utf8', function (err) { if (err) return console.error(err)})
	    })
	    fs.readFile(templatePath + '/vue-multi/vue-multi.js', 'utf8', function (err, tpl) {
	        if (err) return console.error(err);
	        fs.appendFile(name +'.js', tpl, 'utf8', function (err) { if (err) return console.error(err)})
	    })
	}
	
}