import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer.css";

import _implicitScopedStylesheets from "./customer.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M303 388h119c3 1 7-2 7-6l21-76c2-4-1-8-5-9l-2-1H260l-3-11c-1-5-6-9-11-9h-20c-6 0-12 5-12 11-1 7 4 12 10 13h13l10 35 27 92c2 5 6 8 12 9h139c6 0 12-5 12-11 1-7-3-12-10-13H303c-5 0-10-3-12-8v-1a12 12 0 0112-15zm-89-42l-4-13c-7-3-14-7-19-13a47 47 0 0136-79h19c16 0 30 7 39 20h51c-15-10-31-19-48-25-29-12-32-24-32-35 1-12 7-24 17-32 17-16 26-39 25-62 0-47-28-87-78-87s-79 40-79 87c0 23 9 45 26 62 10 8 16 20 17 32 0 12-4 23-32 35-43 17-82 38-83 76-1 25 17 46 42 47h105z"${3}/><circle cx="306" cy="480" r="20"${3}/><circle cx="402" cy="480" r="20"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-61l99brqa7n";
freezeTemplate(tmpl);
