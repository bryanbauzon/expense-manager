import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom36.css";

import _implicitScopedStylesheets from "./custom36.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M38.7 72h-4.1a2 2 0 00-1.7 1l-1.4 2.4c-.8 1.4-.5 3.2.8 4.1.5.4 1.1.5 1.7.5 1 0 2-.5 2.6-1.5l3-5c.4-.7-.1-1.5-.9-1.5zm28.4 1a2 2 0 00-1.7-1h-4.1c-.8 0-1.3.8-.9 1.5l3 5A3 3 0 0066 80c.6 0 1.2-.2 1.7-.5 1.3-.9 1.6-2.8.8-4.1L67.1 73zM67 20H33a6 6 0 00-6 6v34a6 6 0 006 6h34a6 6 0 006-6V26a6 6 0 00-6-6zM36 62c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm28 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm3-12a2 2 0 01-2 2H35a2 2 0 01-2-2V30c0-1.1.9-2 2-2h30a2 2 0 012 2v20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2k774d6kj4m";
freezeTemplate(tmpl);
