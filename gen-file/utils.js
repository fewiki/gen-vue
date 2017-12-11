/**
 * 保持代码整洁优雅，享受编程
 * @author lgzhang08@gmail.com
 * 
 * 工具类
 */
const queryArray = process.argv.splice(2)
module.exports = {
	// 获取 nodejs process传参
	getQuery: function(type) {
		//process是一个全局对象，argv返回的是一组包含命令行参数的数组。
		//第一项为”node”，第二项为执行的js的完整路径，后面是附加在命令行后的参数
		console.log("query:", queryArray)
		if(queryArray.indexOf(type) == -1) {
			console.log('参数异常，请修改')
			return false
		}
		return queryArray[queryArray.indexOf(type) + 1]
	}
	
}