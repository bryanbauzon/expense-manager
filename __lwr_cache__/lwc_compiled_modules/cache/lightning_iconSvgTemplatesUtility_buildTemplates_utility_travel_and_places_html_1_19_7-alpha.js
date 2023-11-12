import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./travel_and_places.css";

import _implicitScopedStylesheets from "./travel_and_places.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M47 21L42.5 8.8A5.5 5.5 0 0037.2 5H14.8a5.7 5.7 0 00-5.4 3.8L5 21c-2 .6-3 2.6-3 4.8v11.6c0 2 2.2 3.9 4 4.6v4c0 1.3.7 2 2 2h5c1.4 0 2-.7 2-2v-4h22v4c0 1.3.7 2 2 2h5c1.3 0 2-.7 2-2v-4c1.8-.7 4-2.4 4-4.6V25.8c0-2.2-1-4.2-3-4.8zM11 34c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm16.6-13H11.8c-.6 0-1-.5-.8-1l3-9c0-.3.3-1 1-1h22c.8 0 1 .8 1 1l3 9c.2.6-.1 1-1 1zM41 34c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2ch29qi53ll";
freezeTemplate(tmpl);
