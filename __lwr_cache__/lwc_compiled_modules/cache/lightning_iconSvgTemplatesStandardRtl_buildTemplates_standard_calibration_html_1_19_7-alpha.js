import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calibration.css";

import _implicitScopedStylesheets from "./calibration.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M319 497l-19 1-19-1c-6-1-11 4-11 10v273c0 11 9 20 20 20h20c11 0 20-9 20-20V507c0-7-5-11-11-10zm200 210l-19 1-19-1c-6-1-11 4-11 10v63c0 11 9 20 20 20h20c11 0 20-9 20-20v-63c0-7-5-11-11-10zm200-150l-19 1-19-1c-6-1-11 4-11 10v213c0 11 9 20 20 20h20c11 0 20-9 20-20V567c0-7-5-11-11-10zM330 307v-87c0-11-9-20-20-20h-20c-11 0-20 9-20 20v87a69 69 0 00-40 63c0 39 31 70 70 70s70-31 70-70c0-28-16-52-40-63zm200 210V220c0-11-9-20-20-20h-20c-11 0-20 9-20 20v297a69 69 0 00-40 63c0 39 31 70 70 70s70-31 70-70c0-28-16-52-40-63zm200-150V220c0-11-9-20-20-20h-20c-11 0-20 9-20 20v147a69 69 0 00-40 63c0 39 31 70 70 70s70-31 70-70c0-28-16-52-40-63z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-323e86fqpdg";
freezeTemplate(tmpl);
