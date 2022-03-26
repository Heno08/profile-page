import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['project']

  connect() {
    console.log("Hello from Modal Controller!")
  }

  launchProject() {
    this.projectTarget.setAttribute("style", "display: block;");
  }

  close() {
    this.projectTarget.removeAttribute("style");
  }
}
