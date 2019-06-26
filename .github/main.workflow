workflow "PRs workflow" {
  on = "pull_request"
  resolves = ["Test"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install --production"
}

action "Test" {
  uses = "ianwalter/puppeteer@v2.0.0"
  needs = ["Install"]
  runs = "npm"
  args = "run test:ci"
}