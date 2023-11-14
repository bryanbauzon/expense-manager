import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_delete.css";

import _implicitScopedStylesheets from "./record_delete.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 320h220c11 0 20-9 20-20v-40c0-33-27-60-60-60H430c-33 0-60 27-60 60v40c0 11 9 20 20 20z"${3}/><path d="M720 250h-20c-6 0-10 4-10 10v40c0 44-36 80-80 80H390c-44 0-80-36-80-80v-40c0-6-4-10-10-10h-20c-33 0-60 27-60 60v430c0 33 27 60 60 60h440c33 0 60-27 60-60V310c0-33-27-60-60-60zM604 706c0 17-13 31-31 31H427c-17 0-31-13-31-31V576c0-5 4-9 9-9h190c5 0 9 4 9 9v130zm24-187c0 5-4 9-9 9H381c-5 0-9-4-9-9v-18c0-5 4-9 9-9h76v-24c0-13 11-24 24-24h37c13 0 24 11 24 24v24h76c5 0 9 4 9 9v18z"${3}/><path d="M476 610h-12c-4 0-6 2-6 6v71c0 4 2 6 6 6h12c4 0 6-2 6-6v-71c0-4-3-6-6-6zm61 0h-12c-4 0-6 2-6 6v71c0 4 2 6 6 6h12c4 0 6-2 6-6v-71c0-4-3-6-6-6zm-25-143h-24c-4 0-6 2-6 6v18h37v-18c-1-4-3-6-7-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7b652ld4b94";
freezeTemplate(tmpl);
