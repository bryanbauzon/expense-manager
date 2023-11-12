import _tmpl from "./login.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
const BACKEND_URL = "http://localhost:3002";
class Login extends LightningElement {
  get loginUrl() {
    return `${BACKEND_URL}/oauth2/login`;
  }
  /*LWC compiler v3.0.0*/
}
export default _registerComponent(Login, {
  tmpl: _tmpl,
  sel: "pages-login",
  apiVersion: 59
});