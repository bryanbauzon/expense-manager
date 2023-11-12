import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sync.css";

import _implicitScopedStylesheets from "./sync.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M479 293c0-8-7-15-15-15h-35c-8 0-14 6-14 14l-1 7a148 148 0 01-250 69c-5-4-9-9-12-14-3-8 4-12 13-12h70c8 0 15-7 15-15v-31c0-8-6-14-14-14H53c-7 0-13 6-13 13v182c1 8 8 15 16 15h30c8 0 15-7 15-15v-70c0-9 5-13 12-7l10 10a210 210 0 00262 28 210 210 0 0094-143zM41 227c0 8 7 15 15 15h35c8 0 14-6 14-14l1-7a148 148 0 01250-69c5 4 9 9 12 14 3 8-4 12-13 12h-70c-8 0-15 7-15 15v31c0 8 6 14 14 14h183c7 0 13-6 13-13V43c-1-8-8-15-16-15h-30c-8 0-15 7-15 15v70c0 9-5 13-12 7l-10-10a210 210 0 00-262-28 210 210 0 00-94 143z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2mgvr6hack9";
freezeTemplate(tmpl);
