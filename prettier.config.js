module.exports = {
  printWidth: 100, //一行的字符数，如果超过会进行换行，默认为80
  tabWidth: 2, // tab缩进大小,默认为2
  semi: true, // 使用分号, 默认true
  singleQuote: false, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  trailingComma: "none", // 行尾逗号,默认none,可选 none|es5|all,es5 包括es5中的数组、对象,all 包括函数对象等所有可选
  arrowParens: "avoid", // 箭头函数参数括号，默认avoid 可选 avoid| always,avoid 能省略括号的时候就省略 例如x => x，always 总是有括号
  endOfLine: "auto"
};
