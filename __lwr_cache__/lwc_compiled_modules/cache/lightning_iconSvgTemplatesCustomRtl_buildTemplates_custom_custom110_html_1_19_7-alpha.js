import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom110.css";

import _implicitScopedStylesheets from "./custom110.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M617 202H383a60 60 0 00-61 60v475a61 61 0 0061 61h234a61 61 0 0062-61V262a60 60 0 00-62-60zm-161 35h88c3 0 5 2 5 5a6 6 0 01-5 5h-88a5 5 0 110-10zm78 518a6 6 0 01-7 5h-56a6 6 0 01-5-5v-25c0-2 3-6 5-6h56c4 0 7 2 7 6v25zm109-73a6 6 0 01-7 6H365a6 6 0 01-8-6V287a8 8 0 018-8h272c4 0 7 4 7 8v395z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-tfmci6ftmt";
freezeTemplate(tmpl);
