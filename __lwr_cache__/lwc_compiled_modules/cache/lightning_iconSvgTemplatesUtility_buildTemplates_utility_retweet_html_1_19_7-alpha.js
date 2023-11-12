import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./retweet.css";

import _implicitScopedStylesheets from "./retweet.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M516 288l-21-21c-6-6-15-6-21 0l-27 27c-7 7-17 2-17-7V120a40 40 0 00-40-40H245c-8 0-15 7-15 15v30c0 8 7 15 15 15h110c8 0 15 7 15 15v132c0 9-11 13-18 7l-26-26c-6-6-16-6-21 0l-21 22c-6 6-6 15 0 21l105 105c6 6 15 6 21 0l106-106c5-6 5-16 0-22zm-241 92H165c-8 0-15-7-15-15V233c0-9 11-13 18-7l26 26c6 6 16 6 21 0l21-21c6-6 6-15 0-21L132 104c-6-6-15-6-21 0L4 210c-6 6-6 15 0 21l21 21c6 6 15 6 21 0l27-27c6-6 17-2 17 7v168c0 22 19 40 41 40h145c8 0 15-7 15-15v-30c-1-8-8-15-16-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-33hbclomjee";
freezeTemplate(tmpl);
