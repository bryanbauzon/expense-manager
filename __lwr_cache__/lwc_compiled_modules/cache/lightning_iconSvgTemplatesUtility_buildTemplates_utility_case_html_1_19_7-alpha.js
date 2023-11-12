import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case.css";

import _implicitScopedStylesheets from "./case.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M172 113h29c4 0 7-3 7-7V84h103v22c0 4 3 7 7 7h29c4 0 7-3 7-7V84c0-24-20-44-44-44H209c-24 0-44 20-44 44v22c0 4 2 7 7 7zm264 44H84c-24 0-44 20-44 44v235c0 24 20 44 44 44h352c24 0 44-20 44-44V201c0-24-20-44-44-44z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-72tq94aofal";
freezeTemplate(tmpl);
