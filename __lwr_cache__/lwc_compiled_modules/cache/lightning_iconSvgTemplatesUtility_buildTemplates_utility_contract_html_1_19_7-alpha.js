import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract.css";

import _implicitScopedStylesheets from "./contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M296 240h154c10 0 13-11 5-19l-49-50 90-91c5-5 5-14 0-19l-37-37c-5-4-13-4-19 1l-90 90-51-49c-8-8-19-5-19 5v154c0 7 9 15 16 15zm-72 40H70c-10 0-13 11-5 19l49 50-90 91c-5 5-5 14 0 19l37 37c5 5 13 5 19 0l91-91 51 49c7 9 18 6 18-4V297c0-7-9-17-16-17zm56 16v154c0 10 11 13 19 5l50-49 91 90c5 5 14 5 19 0l37-37c4-5 4-13-1-19l-90-90 49-51c8-8 5-19-5-19H295c-7 0-15 9-15 16zm-40-72V70c0-10-11-13-19-5l-50 49-91-90c-5-5-14-5-19 0L24 61c-5 5-5 13 0 19l91 91-49 51c-9 7-6 18 4 18h153c7 0 17-9 17-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-fbmgiu1gfr";
freezeTemplate(tmpl);
