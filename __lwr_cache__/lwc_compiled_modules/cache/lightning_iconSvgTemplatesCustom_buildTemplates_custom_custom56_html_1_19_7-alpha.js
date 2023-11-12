import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom56.css";

import _implicitScopedStylesheets from "./custom56.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M627 303c-63 63-139-14-209 56L217 560a59 59 0 000 83l70 70 70 70c23 23 60 23 83 0l202-202c70-70-7-146 56-209l16-16c4-4 4-10 0-14l-55-55c-4-4-10-4-14 0zm-48 257l-70 70c-8 8-20 8-28 0l-56-56-56-56c-8-8-8-20 0-28l70-70c8-8 20-8 28 0l56 56 56 56c8 8 8 20 0 28zm215-313l-21-21-21-21c-8-8-20-8-28 0l-26 26c-4 4-4 10 0 14l55 55c4 4 10 4 14 0l26-26c9-6 9-19 1-27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7so7nrmlkf3";
freezeTemplate(tmpl);
