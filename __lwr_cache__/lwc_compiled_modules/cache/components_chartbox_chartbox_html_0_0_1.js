import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chartbox.css";

import _implicitScopedStylesheets from "./chartbox.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "chart": true
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
tmpl.stylesheetToken = "lwc-1h98gqf466o";
freezeTemplate(tmpl);
