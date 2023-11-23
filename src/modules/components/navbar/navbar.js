import { LightningElement, api } from "lwc";

import LightningConfirm from "lightning/confirm";
export default class Navbar extends LightningElement {
  @api loggedInUser;
  @api backendUrl;

  get username() {
    return this.loggedInUser ? this.loggedInUser.display_name : "";
  }

   logout() {
    this.confirmationDialog(`${this.backendUrl}/oauth2/logout`)
  }

  async confirmationDialog(url) {
    const result = await LightningConfirm.open({
      message: "Are you sure do you want to logout?",
      variant: "header",
      label: "Confirmation",
      theme: "warning",
    });
    if (result) {
      window.location.href = url;
    }
    return 
  }
}
