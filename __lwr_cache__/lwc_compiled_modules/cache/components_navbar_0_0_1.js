import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navbar.html";
import LightningConfirm from "lightning/confirm";
class Navbar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.loggedInUser = void 0;
    this.backendUrl = void 0;
  }
  get username() {
    return this.loggedInUser ? this.loggedInUser.display_name : "";
  }
  logout() {
    this.confirmationDialog(`${this.backendUrl}/oauth2/logout`);
  }
  async confirmationDialog(url) {
    const result = await LightningConfirm.open({
      message: "Are you sure do you want to logout?",
      variant: "header",
      label: "Confirmation",
      theme: "warning"
    });
    if (result) {
      window.location.href = url;
    }
    return;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Navbar, {
  publicProps: {
    loggedInUser: {
      config: 0
    },
    backendUrl: {
      config: 0
    }
  }
});
export default _registerComponent(Navbar, {
  tmpl: _tmpl,
  sel: "components-navbar",
  apiVersion: 59
});