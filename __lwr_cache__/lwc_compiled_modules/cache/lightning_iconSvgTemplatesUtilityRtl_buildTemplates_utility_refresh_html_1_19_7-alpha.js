import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./refresh.css";

import _implicitScopedStylesheets from "./refresh.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39 55v182c0 7 6 13 13 13h183c8 0 14-6 14-14v-31c0-8-7-15-15-15h-70c-9 0-16-4-13-12a150 150 0 01118-58c52 0 101 27 129 76a152 152 0 01-90 221c-49 12-98 0-134-30-6-5-15-4-20 1l-21 21c-6 6-6 16 1 22a212 212 0 00289-15A212 212 0 00314 65a210 210 0 00-202 67c-7 6-12 2-12-7V55c0-8-7-15-15-15H55c-8 0-15 7-16 15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5e5f5dvpspa";
freezeTemplate(tmpl);
