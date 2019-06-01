// Create workflow Astagfaar
workflow "Build and Publish" {
  on = "push"
  resolves = ["Publish"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Publish" {
  uses = "actions/npm@master"
  args = "export"
}
