import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement, createElement } from "lwc";
import _tmpl from "./overlay.html";
import { instanceName } from 'lightning/overlayUtils';
import OverlayContainer from 'lightning/overlayContainer';
const ROOT = 'body';
const OVERLAY_CONTAINER = 'lightning-overlay-container';
function container() {
  // eslint-disable-next-line @lwc/lwc/no-document-query
  let element = document.querySelector(`${ROOT} > ${OVERLAY_CONTAINER}`);
  if (!element) {
    element = createElement(OVERLAY_CONTAINER, {
      is: OverlayContainer
    });
    document.body.appendChild(element);
  }
  return element;
}

/**
 * Extend this component for open/close apis.
 */
class LightningOverlay extends LightningElement {
  /**
   * Open a modal instance
   *
   * @param {Object} apis Set apis directly on the modal instance
   */
  static open(apis) {
    return container().push(this, apis);
  }

  /**
   * The close api is public for testing only.
   *
   * @param {any} result Returned in the promise.
   */
  close(result, promise) {
    container().pop(this.template.host, result, promise);
  }
  /*LWC compiler v3.0.0*/
}
/**
 * Easier to debug when dynamically created.
 */
LightningOverlay[instanceName] = 'lightning-overlay';
_registerDecorators(LightningOverlay, {
  publicMethods: ["close"]
});
export default _registerComponent(LightningOverlay, {
  tmpl: _tmpl,
  sel: "lightning-overlay",
  apiVersion: 59
});