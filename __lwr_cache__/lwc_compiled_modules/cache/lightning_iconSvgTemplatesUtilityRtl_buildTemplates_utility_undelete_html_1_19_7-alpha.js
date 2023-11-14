import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./undelete.css";

import _implicitScopedStylesheets from "./undelete.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M415 200H105c-8 0-15 7-15 15v235a50 50 0 0050 50h240a50 50 0 0050-50V215c0-8-7-15-15-15zM260 460v-40c33 0 60-27 60-60s-27-60-60-60a60 60 0 00-42 18l24 24c3 3 1 9-4 9h-73c-3 0-5-2-5-5v-73c0-4 5-7 9-4l21 21a100 100 0 01171 71 100 100 0 01-101 99zm195-360H330V60a40 40 0 00-40-40h-60a40 40 0 00-40 40v40H65c-8 0-15 7-15 15v30c0 8 7 15 15 15h390c8 0 15-7 15-15v-30c0-8-7-15-15-15zm-165 0h-60V70c0-6 4-10 10-10h40c6 0 10 4 10 10v30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5rro5dadbcu";
freezeTemplate(tmpl);
