import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_photo_video.css";

import _implicitScopedStylesheets from "./add_photo_video.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M260 200c-44 0-80 36-80 80s36 80 80 80 80-36 80-80-36-80-80-80zm200-60h-52c-14 0-26-7-34-18l-23-35c-7-17-24-27-42-27h-98c-18 0-35 10-43 27l-23 35c-7 11-20 18-34 18H60c-22 0-40 18-40 40v240c0 22 18 40 40 40h400c22 0 40-18 40-40V180c0-22-18-40-40-40zM260 400c-66 0-120-54-120-120s54-120 120-120 120 54 120 120-54 120-120 120z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2eqdfkinhd3";
freezeTemplate(tmpl);
