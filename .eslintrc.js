module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': [0, 'always'], // 函数定义时括号前面要不要有空格
    indent: 'off', // 缩进风格
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }], // 解决自结束标签报错
    semi: [2, 'never'], // 不允许有分号
    quotes: [1, 'single'] // 引号类型 `` "" ''
  }
}
