import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trailhead.css";

import _implicitScopedStylesheets from "./trailhead.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M123 370l-26 30h51zm24 61h51l-26-29zm205-21l25-29 26 29zM268 22c-4-2-9-2-14 0A380 380 0 0022 380v34c0 5 2 10 7 14a430 430 0 00233 72h9c79-3 157-27 223-72 4-3 7-8 7-14v-34A380 380 0 00268 22zM139 148c58-69 123-92 123-92 14 6 169 67 202 264h-41l-78-113c-5-7-16-9-24-4l-4 4-20 28-55-79c-5-7-16-9-24-4l-4 4-112 163-41 1c12-75 43-130 78-172zm242 172H280l26-38 24-36zM237 209l40 57-38 53h-96l41-61 43-64zm38 231l-15 26a400 400 0 01-204-60v-25l1-26h176a44 44 0 0015 62l5 3 16 7c6 2 8 8 6 13zm193-35a430 430 0 01-81 39l-7 2a700 700 0 01-49 13l-28 4 3-5c13-22 5-49-17-62l-4-2-16-7a10 10 0 01-5-14l1-2 15-17h187l1 26z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-50qdn635nma";
freezeTemplate(tmpl);
