# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
1.安装Node.js
到nodejs.org下载安装包，Vue3要求的最低版本为16
下载msi文件后，安装到一个没有中文和空格的目录下，一路Next
安装完后在cmd输入node -v，如果输出版本号说明安装成功

2.配置npm
npm是Node Package Manager，即Node.js的软件包管理器
以管理员身份打开cmd，执行npm config set prefix "上面安装Node.js的目录"
再执行npm config set registry http://registry.npm.taobao.org 换成国内的镜像仓库
运行npm config get registry输出上面的地址则成功

3.安装Vue官方的项目脚手架工具create-vue
进入需要创建Vue项目的目录，打开cmd
执行npm init vue@latest
第一次安装需要等待几分钟，安装完成后会提示输入项目名称
输入项目名称后回车，再按提示继续回车完成创建
完成后cd进项目目录，执行npm install
等待几分钟安装所需依赖
安装完成后，输入code .
用VS code打开当前目录

4.启动工程
进入工程目录，使用cmd执行npm run dev
或者展开VS code左侧EXPLORER下的NPM SCRIPTS目录
鼠标悬停在dev上，点击右边的三角形图标
如果找不到NPM SCRIPTS，在EXPLORER右边的三个点中打开
打开浏览器，访问地址http://localhost:5173
5173是默认端口号，如果打开后显示You did it页面则表示成功

Vue工程的目录结构
node_modules 下载的第三方包存放目录，一般不需理会
public 公共资源，如图片
src 源码存放目录
-assets 静态资源目录，图片，字体等
-components 组件目录，存放通用组件
-App.vue 根组件
-main.js 入口文件
index.html 默认首页
package-lock.json 项目配置文件，自动生成，不需修改
package.json 项目配置文件，包括项目名，版本号，依赖包，版本等，类似Maven项目的pom文件
vite.config.js 配置信息，如端口号
