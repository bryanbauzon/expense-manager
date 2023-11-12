import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./answer_private.css";

import _implicitScopedStylesheets from "./answer_private.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-opacity=".65" d="M890 840a20 20 0 00-20 20v10h40v-10a20 20 0 00-20-20zm110 160V620l-380 380zm-50-65a15 15 0 01-15 15h-90a15 15 0 01-15-15v-50a15 15 0 0115-15h5v-10c0-22 18-40 40-40s40 18 40 40v10h5a15 15 0 0115 15z"${3}/><path d="M499 220c-166 0-300 125-300 280 0 50 14 96 38 137 3 5 4 11 2 16l-28 89c-5 16 10 30 26 25l88-31a20 20 0 0117 2 310 310 0 00158 42c166 0 300-125 300-280-1-155-134-280-301-280zm145 218L491 591a29 29 0 01-42 0l-74-74c-6-6-6-15 0-21l21-21c6-6 15-6 21 0l53 53 132-132c6-6 15-6 21 0l21 21c5 6 5 16 0 21z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1f6fqr8b1ml";
freezeTemplate(tmpl);
