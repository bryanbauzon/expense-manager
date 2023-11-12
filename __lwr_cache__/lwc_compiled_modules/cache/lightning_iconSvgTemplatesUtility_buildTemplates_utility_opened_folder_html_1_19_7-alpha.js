import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opened_folder.css";

import _implicitScopedStylesheets from "./opened_folder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M440 150a40 40 0 00-40-40H253c-18 0-35-20-35-20l-25-30s-12-20-35-20h-38a40 40 0 00-40 40v90h360v-20zm29 60H51a30 30 0 00-30 38l57 210a31 31 0 0030 22h305c14 0 27-9 30-22l57-210a32 32 0 00-31-38z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-22nbobpka66";
freezeTemplate(tmpl);
