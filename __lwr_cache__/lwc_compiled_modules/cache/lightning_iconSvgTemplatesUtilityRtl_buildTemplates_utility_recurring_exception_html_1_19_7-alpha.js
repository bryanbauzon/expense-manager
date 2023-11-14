import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recurring_exception.css";

import _implicitScopedStylesheets from "./recurring_exception.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 350L278 239l-8-8-99-99-44-44-48-48c-7-8-18-9-24-3L34 58c-5 5-5 13-1 20l405 406 1 1c7 7 18 8 24 3l21-21c6-6 5-17-3-24l-47-47-44-46zM249 110a150 150 0 01118 58c3 8-4 12-13 12h-73l60 60h126c7 0 13-6 13-13V45c-2-8-9-15-17-15h-30c-8 0-15 7-15 15v70c0 9-5 13-12 7l-10-10a210 210 0 00-229-45l48 48c10-4 22-5 34-5zm20 304a150 150 0 01-118-58c-3-8 4-12 13-12h70l4-1-59-59H52c-7 0-13 6-13 13v182c1 8 8 15 16 15h30c8 0 15-7 15-15v-70c0-9 5-13 12-7l10 10a210 210 0 00229 45l-48-48c-11 3-22 5-34 5z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-gmh02i4732";
freezeTemplate(tmpl);
