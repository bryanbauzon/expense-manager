import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./planning_poker.css";

import _implicitScopedStylesheets from "./planning_poker.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M483 100l-62-20v291l78-241a24 24 0 00-15-30zM205 56l-37 12-131 43a24 24 0 00-17 29l102 313a24 24 0 0030 16l140-46 28-9a24 24 0 0016-30L236 71a24 24 0 00-30-15zm168 284V73a24 24 0 00-23-24h-71a60 60 0 013 8l90 277a52 52 0 012 7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5maillfstd4";
freezeTemplate(tmpl);
