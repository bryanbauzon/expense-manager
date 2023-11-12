import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./password_unlock.css";

import _implicitScopedStylesheets from "./password_unlock.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M100 181v4-4zm320 49H160v-47c0-53 40-100 93-103 49-3 90 28 103 72 1 4 5 8 10 8h41c6 0 11-6 10-12-16-76-84-132-165-128-85 4-150 77-152 161v49c-22 0-40 18-40 40v190c0 22 18 40 40 40h320c22 0 40-18 40-40V270c0-22-18-40-40-40zM306 427c2 6-3 13-10 13h-73c-7 0-12-6-10-13l18-60a46 46 0 01-20-48c4-19 19-34 39-38 32-6 60 17 60 47 0 16-8 31-21 39z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1ppaar6ima2";
freezeTemplate(tmpl);
