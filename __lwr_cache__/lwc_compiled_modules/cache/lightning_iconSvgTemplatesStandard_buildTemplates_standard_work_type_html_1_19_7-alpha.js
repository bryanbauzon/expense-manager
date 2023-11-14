import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_type.css";

import _implicitScopedStylesheets from "./work_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M759 293l-90-89a11 11 0 00-9-4 14 14 0 00-14 14v64a39 39 0 0039 38h64a14 14 0 0013-13 17 17 0 00-3-10zM296 626V316a58 58 0 00-58 58v367a59 59 0 0058 59h292a58 58 0 0058-57H413c-64 0-117 0-117-117zm447-252h-98a58 58 0 01-59-58v-97a18 18 0 00-18-19H413a58 58 0 00-59 58v367a58 58 0 0059 58h291a58 58 0 0059-58V394a20 20 0 00-20-20zM499 622a25 25 0 01-25 25h-50a25 25 0 01-24-25v-50a25 25 0 0125-25h50a25 25 0 0125 25zm0-137a25 25 0 01-25 25h-50a25 25 0 01-24-25v-50a25 25 0 0125-25l50 1a25 25 0 0125 24zm137 137a25 25 0 01-25 25h-50a25 25 0 01-25-25v-50a25 25 0 0125-25h50a25 25 0 0125 25zm0-137a25 25 0 01-25 25h-50a25 25 0 01-25-25v-50a25 25 0 0125-25h50a25 25 0 0125 25z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 1000 1000",
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
tmpl.stylesheetToken = "lwc-29dvp6csgs4";
freezeTemplate(tmpl);
