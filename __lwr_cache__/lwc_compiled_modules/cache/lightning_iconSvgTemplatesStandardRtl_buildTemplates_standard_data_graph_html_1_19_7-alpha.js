import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_graph.css";

import _implicitScopedStylesheets from "./data_graph.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M597.5 474.4a154.2 154.2 0 10-192.6.6l-18.6 32.9-39.7 70.1a113.5 113.5 0 1042.4 23.8l39.6-69.9 18.6-32.9a153.9 153.9 0 00108.1-.3l19 33.6 38.5 68a113.5 113.5 0 1042.9-22.9l-39.1-69.1-19.1-33.8zm-284 277a64.9 64.9 0 100-129.8 64.9 64.9 0 000 129.8zm373 0a64.9 64.9 0 100-129.8 64.9 64.9 0 000 129.8z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-6ecsr6cf8ni";
freezeTemplate(tmpl);
