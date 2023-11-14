import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./textarea.css";

import _implicitScopedStylesheets from "./textarea.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M20 74V26a6 6 0 016-6h48a6 6 0 016 6v48a6 6 0 01-6 6H26a6 6 0 01-6-6zm49.9-46H30a2 2 0 00-2 2v40c0 1.1.9 2 2 2h39.9a2 2 0 002-2V30a2 2 0 00-2-2zM39 51.5l.8.6 2.8 2.5 4 3.6 1.9 1.9c.5.5.8 1.1.8 1.8a2 2 0 01-2 2h-9.2a2 2 0 01-2-2v-8.7c0-1.1 1-2 2-2l.9.3z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4llj2pukkbf";
freezeTemplate(tmpl);
