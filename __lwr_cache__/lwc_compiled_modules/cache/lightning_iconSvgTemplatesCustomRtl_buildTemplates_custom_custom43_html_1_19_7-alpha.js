import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom43.css";

import _implicitScopedStylesheets from "./custom43.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M817 432l2-6v-14l-1-3-1-2-2-3-1-2-120-170c-5-7-14-12-24-12H310c-10 0-19 5-25 13L165 403l-1 2-2 3-1 2-1 3v14l2 5v1l2 4 1 2 2 2 300 330 1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1h21l1-1 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-1 300-330 2-2 1-2c6-1 7-2 7-4zm-327-42h-48l48-81 48 81zm0 60h60l-60 197-60-197zm52-170h75l-28 80zm-151 80l-28-80h75zm-23 90l55 181-165-181zm244 0h110L557 631zm120-60h-90l30-85zm-424-85l30 85h-90z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5e7q06ch76c";
freezeTemplate(tmpl);
