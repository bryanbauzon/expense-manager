import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_signature_task.css";

import _implicitScopedStylesheets from "./record_signature_task.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M773 296a15 15 0 00-10-5 13 13 0 00-10 5l-13 12a4 4 0 000 5l31 31a5 5 0 003 1 4 4 0 003-1l12-12a14 14 0 00-1-21zm-42 27a5 5 0 00-3 0 4 4 0 00-3 0L600 448l-12 41a6 6 0 005 8h2l41-12 125-125a4 4 0 000-5zm51 58l-55 56v192a20 20 0 01-20 20H287a20 20 0 01-20-20V399a20 20 0 0120-20h340l60-60H267a60 60 0 00-60 60v270a60 60 0 0060 60h460a60 60 0 0060-60V376a28 28 0 01-5 5zM548 505l-27 16a38 38 0 01-9 3 6 6 0 000-1 41 41 0 00-49-33 588 588 0 00-66 21 578 578 0 01-70 17 19 19 0 00-13 23 19 19 0 0023 14 588 588 0 0070-18l34-11 20-6a50 50 0 0111-4l2 4 6 14a33 33 0 0028 18c22 1 41-15 60-25 20-12 1-44-20-33z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5er2falsi6e";
freezeTemplate(tmpl);
