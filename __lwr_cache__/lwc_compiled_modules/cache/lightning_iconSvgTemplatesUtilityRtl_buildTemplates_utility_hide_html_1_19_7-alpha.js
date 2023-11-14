import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hide.css";

import _implicitScopedStylesheets from "./hide.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M518 251a277 277 0 00-63-84l-85 84v9a110 110 0 01-110 110h-9l-54 54a288 288 0 00320-154c4-7 4-13 1-19zM485 56l-21-21c-6-6-17-5-24 3l-73 73A288 288 0 002 251a20 20 0 000 18c22 45 55 82 96 110l-60 61c-7 7-8 18-3 24l21 21c6 6 17 5 24-3L482 80c8-7 9-18 3-24zM150 260a110 110 0 01164-96l-30 30a100 100 0 00-24-4 70 70 0 00-70 70c0 8 2 16 4 24l-30 30c-9-16-14-34-14-54z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2s737hb4g07";
freezeTemplate(tmpl);
