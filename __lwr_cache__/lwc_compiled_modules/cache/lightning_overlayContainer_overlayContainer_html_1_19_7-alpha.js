import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overlayContainer.css";

import _implicitScopedStylesheets from "./overlayContainer.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  attrs: {
    "data-overlay-container": ""
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("div", stc0)];
  /*LWC compiler v3.0.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwc-6g5m5782a6m";
freezeTemplate(tmpl);
