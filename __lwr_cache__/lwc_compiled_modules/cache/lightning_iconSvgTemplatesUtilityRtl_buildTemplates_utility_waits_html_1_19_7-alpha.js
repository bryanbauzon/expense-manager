import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./waits.css";

import _implicitScopedStylesheets from "./waits.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M500 184c0-8-7-15-15-15H275c-8 0-15 7-15 15v30c0 8 7 15 15 15h143L263 418v1c-2 2-3 5-3 8v30c0 8 7 15 15 15h210c8 0 15-7 15-15v-30c0-8-7-15-15-15H345l152-186c2-3 3-7 3-10zM260 63c0-8-7-15-15-15H35c-8 0-15 7-15 15v30c0 8 7 15 15 15h143L23 297v1c-2 2-3 5-3 8v30c0 8 7 15 15 15h210c8 0 15-7 15-15v-30c0-8-7-15-15-15H105l152-186c2-3 3-7 3-10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3vb90l3o59u";
freezeTemplate(tmpl);
