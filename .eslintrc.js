module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'no-unused-vars': ['off', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
        'semi': [2, 'always'],
        'no-useless-escape': 0
    }
};
