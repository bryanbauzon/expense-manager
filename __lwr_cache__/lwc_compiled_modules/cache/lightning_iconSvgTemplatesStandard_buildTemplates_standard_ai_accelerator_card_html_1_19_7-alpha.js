import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ai_accelerator_card.css";

import _implicitScopedStylesheets from "./ai_accelerator_card.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M773 300H227a27 27 0 00-27 27v346a27 27 0 0027 27h546a27 27 0 0027-27V327a27 27 0 00-27-27zM635 422v70a21 21 0 01-3 12 13 13 0 01-10 6 25 25 0 01-15-4l-10-7h-1l-18 26-25 36-19 24a27 27 0 01-13 11 21 21 0 01-21-4 29 29 0 01-7-9l-30-50-4-6c-1-2 0 0-1 0l-11 16-29 44a26 26 0 01-15 10 52 52 0 01-8 0 16 16 0 01-6-1 22 22 0 01-11-11 27 27 0 010-22 39 39 0 013-7l32-45 28-40a26 26 0 0113-10 21 21 0 0122 4 26 26 0 016 8l28 50 4 7c2 2 1 1 2 0l25-37 15-21v-1l-19-14a16 16 0 01-7-13 14 14 0 017-14 89 89 0 0110-4l27-12 28-14 10-5a19 19 0 0112-1 15 15 0 0111 10 19 19 0 011 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-mt8nkigksg";
freezeTemplate(tmpl);
