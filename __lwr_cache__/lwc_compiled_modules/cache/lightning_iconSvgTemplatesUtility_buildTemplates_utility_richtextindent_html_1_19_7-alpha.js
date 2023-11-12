import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextindent.css";

import _implicitScopedStylesheets from "./richtextindent.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M520 115c0-8-7-15-15-15H335c-8 0-15 7-15 15v30c0 8 7 15 15 15h170c8 0 15-7 15-15zm-40 240c0-8-7-15-15-15H335c-8 0-15 7-15 15v30c0 8 7 15 15 15h130c8 0 15-7 15-15zm40-120c0-8-7-15-15-15H335c-8 0-15 7-15 15v30c0 8 7 15 15 15h170c8 0 15-7 15-15zM280 55c0-8-7-15-15-15h-30c-8 0-15 7-15 15v410c0 8 7 15 15 15h30c8 0 15-7 15-15zM94 153c-6-6-14-1-14 9v58H15c-8 0-15 7-15 15v30c0 8 7 15 15 15h65v59c0 10 9 15 14 9l83-90c3-4 3-10 0-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7kklnjjtj5r";
freezeTemplate(tmpl);
