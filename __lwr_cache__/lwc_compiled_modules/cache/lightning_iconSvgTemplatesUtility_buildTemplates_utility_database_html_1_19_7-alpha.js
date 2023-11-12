import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./database.css";

import _implicitScopedStylesheets from "./database.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M454 90c0-38-87-69-194-69S66 52 66 90v24c0 38 87 69 194 69s194-31 194-69zM66 170c0 30 87 54 194 54s194-24 194-54v49c0 38-87 69-194 69S66 257 66 219z"${3}/><path d="M66 170c0 30 87 54 194 54s194-24 194-54v49c0 38-87 69-194 69S66 257 66 219zm0 105c0 30 87 54 194 54s194-24 194-54v49c0 38-87 69-194 69S66 363 66 325zm0 106c0 30 87 54 194 54s194-24 194-54v49c0 38-87 69-194 69S66 468 66 430z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6v7l4mpkf00";
freezeTemplate(tmpl);
