import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./log_a_call.css";

import _implicitScopedStylesheets from "./log_a_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M429 20H127c-27 0-49 24-49 48v16H62c-18 0-32 14-32 32s14 32 32 32h16v80H62c-18 0-32 14-32 32s14 32 32 32h16v80H62c-18 0-32 14-32 32s14 32 32 32h16v16c0 24 22 48 49 48h302c27 0 51-24 51-50V66c0-27-24-46-51-46zm-29 322l-22 22c-5 5-12 8-18 7-53-3-103-27-138-62s-59-85-62-138c0-7 2-14 7-18l22-22c10-10 28-10 37 2l21 26c7 9 7 21 1 30l-18 26c-2 3-2 8 1 10l37 41 41 37c3 3 7 3 10 1l25-18c9-6 22-6 31 1l26 21c9 6 10 24-1 34z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 520 520",
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
tmpl.stylesheetToken = "lwc-6fahc3v4gt8";
freezeTemplate(tmpl);
