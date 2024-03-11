// export关键字可以把函数导出，供外部导入
export function simpleMessage(msg) {
    console.log(msg)
}

export function complextMessage(msg) {
    console.log(new Date() + "：" + msg)
}

// 可使用这种方式列出所有需要导出的函数，此时在每个函数前不再需要加export
// 可用as关键字来指定别名，此时在导入处也要换成别名
// export {simpleMessage as sm, complextMessage}
// 这种方式表示默认导出，在导入处可随意取个名字，再用.来调用这些导出的函数
export default { simpleMessage, complextMessage }
