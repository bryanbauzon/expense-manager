import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./feed.css";

import _implicitScopedStylesheets from "./feed.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M252 430l-11-3c-6-3-11-10-12-16l-57-231-49 110a20 20 0 01-20 14H35c-8 0-15-6-15-14v-15c0-8 7-15 15-15h52l69-157c4-8 13-14 23-13s18 7 20 17l59 234 79-171c4-9 13-14 22-13 8 1 16 7 20 15l39 89h68c8 0 15 7 15 15v14c0 8-7 15-15 15h-82c-9 0-17-5-21-13l-25-57-84 183c-5 7-12 12-22 12z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4pfdt88l875";
freezeTemplate(tmpl);
