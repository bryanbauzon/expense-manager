import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sentiment_neutral.css";

import _implicitScopedStylesheets from "./sentiment_neutral.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 20a241 241 0 000 482 241 241 0 000-482zm-90 130c17 0 30 18 30 40s-13 40-30 40-30-18-30-40 13-40 30-40zm210 191c0 11-9 19-19 19H159c-11 0-19-9-19-19v-1c0-11 9-19 19-19h201a20 20 0 0120 20zm-30-111c-17 0-30-18-30-40s13-40 30-40 30 18 30 40-13 40-30 40z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2oot8eamrck";
freezeTemplate(tmpl);
