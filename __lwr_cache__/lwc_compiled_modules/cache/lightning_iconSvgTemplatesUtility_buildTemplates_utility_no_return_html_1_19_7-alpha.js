import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./no_return.css";

import _implicitScopedStylesheets from "./no_return.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M298 128h17l-46 60H150c-8 5-6 10 0 18l49 48c5 6 4 15-2 20l-21 22c-6 6-13 6-19 1L31 170c-5-5-5-13 0-17L157 24c6-6 16-6 20 0l21 21c6 6 6 16 0 20l-48 50c-6 6-6 13 4 13zm61 76l37-48a186 186 0 01-98 344h-80c-9 0-14-6-14-14v-31c0-8 6-15 14-15h80c70 0 125-56 125-126 0-48-26-89-64-110zm94-141c6-8 6-18 0-23l-22-17c-6-5-16-2-22 5L75 456c-6 8-6 18 0 23l22 17c6 5 16 2 22-6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1tlcrrk2598";
freezeTemplate(tmpl);
