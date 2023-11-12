import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom17.css";

import _implicitScopedStylesheets from "./custom17.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M430 289c3 7 10 11 18 11h102c8 0 15-4 18-11l40-74c3-7-2-14-9-14H401c-7 0-12 8-9 14zm129 71H440c-99 0-180 81-180 180v200c0 33 27 60 60 60h359c33 0 61-27 61-60V540c0-99-82-180-181-180zm-29 336v34c0 6-6 10-12 10h-40c-6 0-8-4-8-10v-33c-30-6-55-19-62-25-8-7-10-14-4-23l13-20c3-5 9-8 15-8 4 0 7 1 10 3h1c20 12 38 18 51 18 14 0 25-7 25-15 0-6-4-16-42-29-34-12-76-33-76-79 0-27 18-59 68-69v-30c0-6 3-10 8-10h40c6 0 12 4 12 10v30c20 5 42 15 49 20 4 2 6 7 7 12s-1 10-4 13l-15 18c-4 5-11 9-17 9l-9-2c-20-11-37-17-48-17-17 0-24 8-24 13 0 7 4 15 38 27 42 14 89 36 89 83 1 32-25 61-65 70z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5d4tru0d0i1";
freezeTemplate(tmpl);
