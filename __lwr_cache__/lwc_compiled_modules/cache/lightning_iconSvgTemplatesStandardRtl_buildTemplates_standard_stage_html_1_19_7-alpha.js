import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage.css";

import _implicitScopedStylesheets from "./stage.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M319 500c0 99 81 180 180 180s180-81 180-180-81-180-180-180-180 81-180 180zm300 0c0 66-54 120-120 120s-120-54-120-120 54-120 120-120 120 54 120 120z"${3}/><circle cx="759" cy="500" r="42"${3}/><circle cx="498" cy="500" r="42"${3}/><circle cx="241" cy="500" r="42"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3tikc6vnnec";
freezeTemplate(tmpl);
