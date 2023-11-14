import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reward.css";

import _implicitScopedStylesheets from "./reward.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M467 634L350 800l-30-80h-80l102-139c20 12 41 14 56 17l14 2 10 8c12 8 27 20 45 26zm191-53c-20 12-41 14-56 17l-15 2-10 8c-11 8-25 20-44 26l117 166 30-80h80zM500 320c-39 0-70 31-70 70s31 70 70 70 70-31 70-70-31-70-70-70zm190 70c0 24-26 43-35 64-9 22-4 54-21 70-16 16-48 12-70 21-21 9-40 35-64 35s-43-26-64-35c-22-9-54-4-70-21-16-16-12-48-21-70-9-21-35-40-35-64s26-43 35-64c9-22 4-54 21-70 16-16 48-12 70-21 21-9 40-35 64-35s43 26 64 35c22 9 54 4 70 21 16 16 12 48 21 70 9 21 35 40 35 64zm-60 0a130 130 0 10-260 0 130 130 0 10260 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-g08jc7l5g2";
freezeTemplate(tmpl);
