import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./market.css";

import _implicitScopedStylesheets from "./market.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M65 191c0-94 77-171 170-171s172 77 172 171c0 50-22 95-56 127h-18c-6 0-12 0-18 2a30 30 0 00-10-11 138 138 0 0067-100h-45c-3 38-10 72-23 98a30 30 0 00-16-4h-21a210 210 0 0025-95h-40v103a30 30 0 0010 50A172 172 0 0165 190zm261-17h46a138 138 0 00-70-103 253 253 0 0124 103zm-107 0V62c-20 16-37 58-40 112h40zm0 147V208h-40c3 54 20 96 40 113zm34-260v113h40c-4-53-20-96-40-112zM145 175c2-40 11-76 25-103a138 138 0 00-70 103h45zm0 34h-45a138 138 0 0070 103 253 253 0 01-25-103zm190 201h96c3 0 6-1 7-4l17-60c2-5-2-9-6-9H300l-3-9a10 10 0 00-10-7h-15a10 10 0 100 20h9l30 101c2 4 5 7 10 7h114c5 0 10-4 10-9a10 10 0 00-10-10H335a10 10 0 01-9-7c-2-6 3-12 9-12zm2 90a16 16 0 100-32c-10 0-16 7-16 16s7 16 16 16zm78 0c10 0 17-7 17-16s-8-16-17-16-16 7-16 16 7 16 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-t8m9fhn1rm";
freezeTemplate(tmpl);
