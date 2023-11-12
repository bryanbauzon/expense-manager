import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datadotcom.css";

import _implicitScopedStylesheets from "./datadotcom.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M425 491h-53c-3-19-5-36-5-51h-1c-25 40-66 60-122 60-48 0-85-16-111-49a200 200 0 01-38-128c0-34 6-64 19-91a150 150 0 01139-88c46 0 83 15 111 44V21h56v396c0 24 2 49 5 74zm-62-145V239a135 135 0 00-45-38c-17-8-36-12-58-12a92 92 0 00-78 37 154 154 0 00-28 96c0 41 9 73 27 97a90 90 0 0076 36c32 0 58-10 77-31 20-20 29-46 29-78z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2absptrmqq9";
freezeTemplate(tmpl);
