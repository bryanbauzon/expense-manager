import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_ui.css";

import _implicitScopedStylesheets from "./shift_ui.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M27.8 40.7H48a2 2 0 012 2v5.7a2 2 0 01-2 2H27.8a2 2 0 01-2-2v-5.7c0-1.1.9-2 2-2zM4 17.5h44a2 2 0 012 2v13.6a2 2 0 01-2 2H4a2 2 0 01-2-2V19.5c0-1.1.9-2 2-2zM4 2.3h20.2a2 2 0 012 2V10a2 2 0 01-2 2H4a2 2 0 01-2-2V4.3c0-1.1.9-2 2-2z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_static_fragment($fragment1(), 2)])];
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
tmpl.stylesheetToken = "lwc-3r5l48mmknt";
freezeTemplate(tmpl);
