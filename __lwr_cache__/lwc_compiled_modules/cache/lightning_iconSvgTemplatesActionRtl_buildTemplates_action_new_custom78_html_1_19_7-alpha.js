import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom78.css";

import _implicitScopedStylesheets from "./new_custom78.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M486 95L342 23c-6-3-14-3-22 0L188 89 54 23c-7-4-16-4-23 0-7 5-11 13-11 21v360c0 9 5 18 14 22l144 72c6 3 14 3 22 0l133-66 134 66c3 2 7 2 10 2l13-3c7-5 11-13 11-21V116c-1-9-6-17-15-21zm-34 46v190c0 11-11 19-22 15-37-14-8-76-34-110-25-31-58 1-88-48-30-47 10-81 46-99 5-2 10-2 14 0l74 38c7 2 10 8 10 14zM248 419c-6 3-13 2-18-2-10-9-18-23-18-37 0-24-40-16-40-64 0-38-47-50-86-46-10 1-18-6-18-16V109c0-12 13-20 23-14l86 43 2 1 3 2c36 21 29 38 14 64-17 29-24 0-48-8s-48 8-40 24 32 0 48 16 16 40 64 24 56-8 72 8 24 48 0 72c-14 14-20 43-26 64-2 4-4 8-8 10z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7krh3sc0hc5";
freezeTemplate(tmpl);
