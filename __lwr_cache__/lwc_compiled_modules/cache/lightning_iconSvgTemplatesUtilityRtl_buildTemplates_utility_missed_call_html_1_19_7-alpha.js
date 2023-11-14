import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./missed_call.css";

import _implicitScopedStylesheets from "./missed_call.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M347 403c7 0 12 5 14 11l8 54a33 33 0 0029 28l65 7c20 2 37-13 37-33v-62c0-10-4-18-11-25a347 347 0 00-460 0c-6 6-9 16-9 25v62a30 30 0 0035 33l65-7a33 33 0 0029-28l8-54c1-7 7-11 14-11 0 0 84-7 176 0zm50-277c5-5 14-1 14 6v67c0 7 5 12 12 12h25c7 0 12-5 12-12l1-161c0-7-5-12-12-12H289c-7 0-12 5-12 12v25c0 7 5 12 12 12h67c7 0 11 9 6 14l-94 94c-3 3-9 3-13 0L101 30c-5-5-13-5-18 0L64 48c-5 5-5 13 0 19l188 189c5 6 13 6 19 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3ol4poktr4j";
freezeTemplate(tmpl);
