module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // https://www.npmjs.com/package/eslint-config-airbnb-base
  // Airbnb Javascript Style Guide: https://github.com/airbnb/javascript
  extends: 'airbnb-base',
  // We are targeting on node for this project
  "env": {
    "browser": true,
    "jquery": true
  },
  // add your custom rules here
  // REF: http://blog.javascripting.com/2015/09/07/fine-tuning-airbnbs-eslint-config/
  'rules': {
    "quote-props": [1, "consistent-as-needed"],    // 属性上不强制使用引号，但是前后必须一致
    "no-cond-assign": [2, "except-parens"],        // if和while的条件中不可用等号复制，除非强制用括号包围
    "space-infix-ops": 0,                          // 在复杂表达式中，运算符边上可以不用空格
    // 无用变量可以存在于参数中，有时为了API的需求，同样的，本地变量也可能存在这种情况，主要是为开发考虑
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "default-case": 0,        // 同意作者的看法，switch中的控制我们需要考虑清楚，并不是说default case是必须的
    "no-else-return": 0,      // 允许if里面有return的时候，else中仍然有语句，这样可以增加可读性，我赞成这条
    "no-param-reassign": 0,   // 允许在函数中更改设置传入的参数
    "quotes": 0,               // 字符串引号不做单引号和双引号的限制
    "new-cap": [2, {
      "capIsNewExceptions": ["Immutable.Map", "Immutable.Set", "Immutable.List"]
    }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
