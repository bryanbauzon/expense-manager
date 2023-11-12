import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./internal_share.css";

import _implicitScopedStylesheets from "./internal_share.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M23 379v2c0 8 6 14 14 14 4 0 7-1 10-4 0 0 101-109 225-76v110c0 8 6 14 14 14l7-2 201-171c3-3 5-7 5-11s-2-8-4-10L294 82l-8-2c-8 0-14 6-14 14v103c-1 0-199-30-249 182z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-j7ffddjltd";
freezeTemplate(tmpl);
