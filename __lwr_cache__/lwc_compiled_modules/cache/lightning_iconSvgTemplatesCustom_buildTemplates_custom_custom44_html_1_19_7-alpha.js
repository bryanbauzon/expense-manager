import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom44.css";

import _implicitScopedStylesheets from "./custom44.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M69.7 28.9C64.4 22.3 60.1 20 51 20c-4.1 0-9 1.6-11 2a2 2 0 00-2-2h-4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h4a2 2 0 002-2h2.1c1.6 0 2.9 1.3 2.9 2.9v.1a3 3 0 003 3v16a4 4 0 00-4 4v18a6 6 0 006 6h2a6 6 0 006-6V56a4 4 0 00-4-4V36c1.7 0 3-2.2 3-3.9V32c0-1.5 1.2-2.7 2.7-2.8a10 10 0 017.3 2.3c.6.5 1.6.6 2.2.1 1-.6 1.2-1.8.5-2.7z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-260gf1b9ojl";
freezeTemplate(tmpl);
