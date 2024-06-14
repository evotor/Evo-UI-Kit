module.exports = {
    '*.{js,ts,scss,html,md,json}': 'prettier --write',
    'src/**/*.ts, projects/**/*.ts': ['ng-lint-staged lint --'],
    'src/**/*.scss': ['npm run lint:styles'],
};
