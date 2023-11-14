import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./favorite.css";

import _implicitScopedStylesheets from "./favorite.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M274 31l46 150c2 6 8 9 14 9h150c15 0 21 20 9 29l-122 90c-5 4-7 11-5 17l58 154c4 14-11 26-23 17l-131-98c-5-4-12-4-18 0l-132 98c-12 9-28-3-23-17l56-154c2-6 0-13-5-17L26 219c-12-9-5-29 9-29h150c7 0 12-2 14-9l47-151c4-14 24-13 28 1z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2hf8vu1402k";
freezeTemplate(tmpl);
