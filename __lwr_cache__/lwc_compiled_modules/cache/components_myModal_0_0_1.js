import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./myModal.html";
class MyModal extends LightningElement {
  constructor(...args) {
    super(...args);
    this.header = void 0;
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(MyModal, {
  publicProps: {
    header: {
      config: 0
    }
  }
});
export default _registerComponent(MyModal, {
  tmpl: _tmpl,
  sel: "components-my-modal",
  apiVersion: 59
});