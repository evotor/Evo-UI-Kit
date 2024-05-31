module.exports = {
  "src/**/*.ts, projects/**/*.ts": ["ng-lint-staged lint --"],
  "src/**/*.scss": ["npm run lint:styles"]
};
