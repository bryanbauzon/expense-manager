import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./thunder.css";

import _implicitScopedStylesheets from "./thunder.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M304 30a37 37 0 00-54 0L30 251a37 37 0 000 52l117 118a37 37 0 0052 0l221-220a37 37 0 000-53zM122 50a14 14 0 00-20 0l-52 52a14 14 0 000 20l20 20c5 5 14 5 20 0l50-54a14 14 0 000-20l-20-19zm188 313a14 14 0 000 20l113 113c6 5 15 5 20 0l52-52c5-5 5-15 0-20L382 310a14 14 0 00-20 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7htn1chpcnk";
freezeTemplate(tmpl);
