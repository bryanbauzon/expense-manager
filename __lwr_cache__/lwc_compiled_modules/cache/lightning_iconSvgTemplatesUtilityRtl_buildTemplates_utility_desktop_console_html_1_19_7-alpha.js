import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktop_console.css";

import _implicitScopedStylesheets from "./desktop_console.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M15 48v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48a4 4 0 00-4-4h-3c-.6 0-1-.4-1-1v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2c0 .6-.4 1-1 1h-3a4 4 0 00-4 4zM2 6v26a4 4 0 004 4h40a4 4 0 004-4V6a4 4 0 00-4-4H6a4 4 0 00-4 4zm40.5 24h-6V8h6c.8 0 1.5.7 1.5 1.5v19c0 .8-.7 1.5-1.5 1.5zM8 9.5C8 8.7 8.7 8 9.5 8h21v22h-21c-.8 0-1.5-.7-1.5-1.5v-19z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lwc-47crblogn61";
freezeTemplate(tmpl);
