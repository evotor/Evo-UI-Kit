workflow "New workflow" {
  on = "pull_request"
  resolves = ["Test"]
}

action "Test" {
  uses = "actions/npm@master"
  args = "test"
}
