import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_integration_hub.css";

import _implicitScopedStylesheets from "./data_integration_hub.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M739 270a71 71 0 00-69 87l-67 44a111 111 0 00-155-16l-110-76c7-29-8-61-36-74-33-15-72-1-87 31s-1 72 31 87c17 8 36 8 53 1l113 79c-5 12-8 26-8 40l2 23-69 25c-9-10-21-18-36-22a74 74 0 00-39 143c39 11 80-12 91-52l2-12 79-28c21 22 50 36 82 36h9l11 56a83 83 0 1059-19l-12-59c28-20 47-54 47-91l-1-17 79-52c10 5 21 8 32 8 39 0 71-32 71-71-1-39-33-71-72-71zM517 546c-40 0-72-32-72-72s32-72 72-72 72 32 72 72c0 39-32 72-72 72z"${3}/><circle cx="518" cy="474" r="32"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8of50che0t";
freezeTemplate(tmpl);
