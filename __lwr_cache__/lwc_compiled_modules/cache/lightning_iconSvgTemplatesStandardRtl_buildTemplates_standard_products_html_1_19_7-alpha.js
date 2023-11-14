import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./products.css";

import _implicitScopedStylesheets from "./products.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M576 674h77a18 18 0 0019-19V345a18 18 0 00-19-19h-77a18 18 0 00-19 19v310a18 18 0 0019 19zm174 0h39a18 18 0 0019-19V345a18 18 0 00-19-19h-39a18 18 0 00-19 19v310a18 18 0 0019 19zm-263 0a18 18 0 0020-19V345a18 18 0 00-19-19h-1a18 18 0 00-19 19v310a17 17 0 0019 19zm-109 0h19a18 18 0 0019-19V345a18 18 0 00-19-19h-19a18 18 0 00-19 19v310a17 17 0 0019 19zm-167 0h77a18 18 0 0019-19V345a18 18 0 00-19-19h-77a18 18 0 00-19 19v310a18 18 0 0019 19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ahjnppv634";
freezeTemplate(tmpl);
