# vue 代码生成器

> 可根据routes.js生成项目结构

> 可生成单文件结构或多文件结构

## 快速安装
```
	npm i gen-vue -g
```

## 根据 router.js生成项目结构

```
	// router.js为 路由文件，参考template下的router.js
	gen-vue -router router.js 

```

## 单文件

```
	gen-vue -com test-com

```

## 多文件

```
	gen-vue -coms test-coms

```

## TODO
- 根据引入的组件生成相应的文件