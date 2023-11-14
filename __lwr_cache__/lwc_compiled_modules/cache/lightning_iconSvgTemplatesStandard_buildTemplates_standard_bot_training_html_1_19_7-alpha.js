import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bot_training.css";

import _implicitScopedStylesheets from "./bot_training.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M546 610a120 120 0 01-161-148c2-5 8-6 11-3l68 68c5 5 13 5 19 0l48-48c5-5 5-13 0-19l-68-68c-3-4-2-10 3-11a120 120 0 01147 161l126 126c39-46 62-105 62-168-1-155-135-277-301-277-167 0-300 123-300 274 0 48 14 93 36 133 4 6 5 14 3 21l-39 107c-4 10 6 19 16 16l109-41c6-3 14-1 21 3a324 324 0 00320-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-74qucafiur2";
freezeTemplate(tmpl);
