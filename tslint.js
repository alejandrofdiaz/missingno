const path = require('path');

const {
  rules: prettierRules,
} = require('tslint-config-prettier/lib/index.json');

module.exports = {
  extends: ['tslint:recommended', 'tslint-react', 'tslint-plugin-prettier'],
  rulesDirectory: [
    path.join(
      path.dirname(require.resolve('tslint-consistent-codestyle')),
      './',
    ),
    path.join(
      path.dirname(require.resolve('tslint-eslint-rules')),
      'dist/rules',
    ),
    path.join(path.dirname(require.resolve('tslint-microsoft-contrib')), './'),
  ],
  rules: {
    align: false, // prettier
    'array-bracket-spacing': [true, 'never'],
    'array-type': false,
    'arrow-parens': false,
    ban: false,
    'block-spacing': false, // prettier
    'brace-style': false, // prettier
    'class-name': true,
    'comment-format': [true, 'check-space'],
    curly: true,
    eofline: false, // prettier
    forin: true,
    'function-name': [
      true,
      {
        'function-regex': /^[a-z$][\w\d]+$/,
        'method-regex': /^[a-z$][\w\d]+$/,
        'private-method-regex': /^[a-z$][\w\d]+$/,
        'protected-method-regex': /^[a-z$][\w\d]+$/,
        'static-method-regex': /^[a-z$][\w\d]+$/,
      },
    ],
    'import-name': true,
    indent: false, // prettier
    'interface-name': [true, 'never-prefix'],
    'jsdoc-format': true,
    'jsx-boolean-value': [true, 'never'],
    'jsx-key': false,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'label-position': true,
    'max-line-length': false, // prettier
    'member-ordering': [
      true,
      {
        alphabetize: true,
        order: 'statics-first',
      },
    ],
    'no-any': true,
    'no-arg': true,
    'no-bitwise': false,
    'no-boolean-literal-compare': true,
    'no-consecutive-blank-lines': false, // prettier
    'no-console': [
      true,
      'log',
      'error',
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace',
    ],
    'no-construct': true,
    'no-debugger': true,
    'no-default-export': true,
    'no-duplicate-imports': true,
    'no-duplicate-variable': true,
    'no-else-after-return': true,
    'no-empty': true,
    'no-eval': true,
    'function-constructor': true,
    'increment-decrement': true,
    'no-parameter-reassignment': true,
    'no-shadowed-variable': true,
    'no-string-literal': true,
    'no-submodule-imports': false,
    'no-switch-case-fall-through': true,
    'no-this-assignment': [true, 'allow-destructuring'],
    'no-trailing-whitespace': false,
    'no-unused-expression': true,
    'no-use-before-declare': true,
    'no-var-keyword': true,
    'object-curly-spacing': false, // prettier
    'object-literal-shorthand': true,
    'object-literal-sort-keys': false,
    'object-shorthand-properties-first': true,
    'object-literal-key-quotes': false, // prettier
    'one-line': false, // prettier
    'one-variable-per-declaration': [true, 'ignore-for-loop'],
    'ordered-imports': [
      true,
      {
        'grouped-imports': true,
      },
    ],
    'prefer-array-literal': true,
    'prefer-const': true,
    'prefer-template': true,
    prettier: true,
    quotemark: false,
    radix: true,
    semicolon: false, // prettier
    'space-in-parens': false, // prettier
    'switch-default': true,
    'ter-arrow-parens': false, // prettier
    'ter-computed-property-spacing': false, // prettier
    'ter-indent': false, // prettier
    'ter-func-call-spacing': false, // prettier
    'ter-prefer-arrow-callback': [true],
    'trailing-comma': false, // prettier
    'triple-equals': [true, 'allow-null-check'],
    typedef: [true, 'parameter', 'property-declaration'],
    'typedef-whitespace': false, // prettier
    'variable-name': [
      true,
      'allow-leading-underscore',
      'allow-pascal-case',
      'ban-keywords',
      'check-format',
    ],
    whitespace: false, // prettier
    // Add prettier rules at the end just in case
    ...prettierRules,
  },
};
