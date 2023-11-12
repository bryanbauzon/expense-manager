import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./change_record_type.css";

import _implicitScopedStylesheets from "./change_record_type.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 375c0-8-7-15-15-15H35c-8 0-15 7-15 15v110c0 8 7 15 15 15h150c8 0 15-7 15-15zM81 220H32c-10 0-15 9-9 14l80 83c4 3 10 3 14 0l80-83c6-6 1-14-9-14h-47c0-50 49-100 99-100V60c-90 0-159 70-159 160zm337-17c-4-3-10-3-14 0l-80 83c-6 6-1 14 9 14h48c0 60-41 100-101 100v60c90 0 161-70 161-160h49c10 0 15-9 9-14zm82-168c0-8-7-15-15-15H335c-8 0-15 7-15 15v110c0 8 7 15 15 15h150c8 0 15-7 15-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-nnrur6al8e";
freezeTemplate(tmpl);
