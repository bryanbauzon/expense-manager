import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./note.css";

import _implicitScopedStylesheets from "./note.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M713 670l-11 11a66 66 0 01-46 19h-33c-30 0-63-23-63-65v-31c0-25 11-40 18-48l135-136c4-4 7-12 7-17V300c0-33-27-60-60-60H340c-33 0-60 30-60 60h-20c-22 0-40 18-40 40s18 40 40 40h20v80h-20c-22 0-40 18-40 40s18 40 40 40h20v80h-20c-22 0-40 18-40 40s18 40 40 40h20c0 40 27 60 60 60h320c33 0 60-27 60-60v-27c0-6-3-7-7-3zM610 390c0 11-9 20-20 20H390c-11 0-20-9-20-20v-20c0-11 9-20 20-20h200c11 0 20 9 20 20zm-90 240c0 11-9 20-20 20H390c-11 0-20-9-20-20v-20c0-11 9-20 20-20h110c11 0 20 9 20 20zm30-120c0 11-9 20-20 20H390c-11 0-20-9-20-20v-20c0-11 9-20 20-20h140c11 0 20 9 20 20zm264-54l-12-12c-8-8-20-8-28 0L621 599l-1 3v33c0 3 0 5 3 5h33l4-1 154-154c8-9 8-21 0-29z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5dogcssbgvs";
freezeTemplate(tmpl);
