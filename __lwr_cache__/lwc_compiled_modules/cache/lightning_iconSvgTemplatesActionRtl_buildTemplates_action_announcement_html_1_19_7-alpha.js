import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./announcement.css";

import _implicitScopedStylesheets from "./announcement.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M227 454l-13-10c-14-10-14-30-14-40v-29c0-8-7-15-15-15h-60c-8 0-15 7-15 15v77c0 27 16 48 41 48h49c29 0 31-20 31-20s5-18-4-26zm223-274V43c0-24-30-31-46-15l-89 84a76 76 0 01-50 17H113c-52 1-93 46-93 98v2c0 52 41 91 93 91h152c19 0 37 8 51 20l88 86c16 16 46 10 46-14V276c30 0 48-21 48-48s-18-48-48-48z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7ompdebgt1n";
freezeTemplate(tmpl);
