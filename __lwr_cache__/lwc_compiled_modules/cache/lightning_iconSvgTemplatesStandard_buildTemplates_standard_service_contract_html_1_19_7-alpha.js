import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_contract.css";

import _implicitScopedStylesheets from "./service_contract.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M691 289L559 157c-3-3-6-4-10-4-8 0-14 6-14 14v106c0 22 18 40 40 40h106c8 0 14-6 14-14 0-4-1-7-4-10zm4 104c0-11-9-20-20-20H535c-33 0-60-27-60-60V173c0-11-9-20-20-20H255c-33 0-60 27-60 60v480c0 33 27 60 60 60h203c16 0 20-11 19-28s-7-90 43-148 132-62 144-62 32-1 31-18zM265 279l49-7 3-2 22-45c2-3 6-3 8 0l22 45 3 2 49 7c3 1 5 5 2 7l-36 35-1 4 8 49c1 3-3 6-6 4l-44-23h-4l-44 23c-3 2-7-1-6-4l8-49-1-4-36-35c-1-2 1-6 4-7zm180 334c0 11-9 20-20 20H295c-11 0-20-9-20-20v-20c0-11 9-20 20-20h130c11 0 20 9 20 20zm110-120c0 11-9 20-20 20H295c-11 0-20-9-20-20v-20c0-11 9-20 20-20h240c11 0 20 9 20 20zm108 69a143 143 0 100 286 143 143 0 000-286zm25 156l-12-2-55 54c-4 4-8 5-12 5-5 0-8-1-12-5-6-6-6-17 0-24l55-55-2-11c-2-25 18-48 43-48l12 2c2 0 2 2 1 4l-24 25c-2 1-2 5 0 6l17 17c2 2 5 2 7 0l24-24c1-1 4-1 4 1l2 12c-1 25-22 45-48 43z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5itb1ed4rsg";
freezeTemplate(tmpl);
