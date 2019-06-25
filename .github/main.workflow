workflow "New workflow" {
  on = "pull_request"
  resolves = ["Test"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install --production"
}

action "Rebuild SASS" {
  uses = "actions/npm@master"
  needs = ["Install"]
  args = "rebuild node-sass"
}

action "Test" {
  uses = "ianwalter/puppeteer@v2.0.0"
  needs = ["Install"]
  runs = "npm"
  args = "test"
}