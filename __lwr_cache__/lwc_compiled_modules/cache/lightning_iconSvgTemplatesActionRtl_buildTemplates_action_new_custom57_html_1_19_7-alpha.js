import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom57.css";

import _implicitScopedStylesheets from "./new_custom57.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M284 290v202c0 7 7 10 12 7l158-91c15-9 25-26 25-44V183c0-7-7-10-12-7L292 276c-4 3-8 8-8 14zm-16-57l176-100c6-3 6-11 0-14L285 27c-15-9-35-9-51 0L75 119c-5 3-5 11 1 14l176 100c5 3 11 3 16 0zm-41 42L52 175c-5-3-12 1-12 8v181c0 18 10 35 25 44l158 91c6 3 12-1 12-7V290c1-6-3-11-8-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5sq0t16ehip";
freezeTemplate(tmpl);
