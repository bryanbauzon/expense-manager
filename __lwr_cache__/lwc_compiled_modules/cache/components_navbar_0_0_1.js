import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./navbar.html";
class Navbar extends LightningElement {
  constructor(...args) {
    super(...args);
    this.loggedInUser = void 0;
    this.backendUrl = void 0;
  }
  get username() {
    return this.loggedInUser ? this.loggedInUser.display_name : '';
  }
  get logoutUrl() {
    return `${this.backendUrl}/oauth2/logout`;
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