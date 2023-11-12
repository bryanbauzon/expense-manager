import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_item.css";

import _implicitScopedStylesheets from "./contract_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M410 320V214c0-8-6-14-14-14-4 0-7 1-10 4L254 336c-3 3-4 6-4 10 0 8 6 14 14 14h106c22 0 40-18 40-40zM250 440v300c0 33 27 60 60 60h380c33 0 60-27 60-60V260c0-33-27-60-60-60H490c-11 0-20 9-20 20v140c0 33-27 60-60 60H270c-11 0-20 9-20 20zm373 210c0-17 14-31 31-31s31 14 31 31-14 31-31 31-31-14-31-31zm0-120c0-17 14-31 31-31s31 14 31 31-14 31-31 31-31-13-31-31zm-22-128l-44 23c-3 2-7-1-6-4l8-49-1-4-36-35c-3-2-1-6 2-7l49-7 3-2 22-45c2-3 6-3 8 0l22 45 3 2 49 7c3 1 5 5 4 7l-36 35-1 4 8 49c1 3-3 6-6 4l-44-23zM330 640c0-11 9-20 20-20h203c11 0 20 9 20 20v20c0 11-9 20-20 20H350c-11 0-20-9-20-20zm0-120c0-11 9-20 20-20h203c11 0 20 9 20 20v20c0 11-9 20-20 20H350c-11 0-20-9-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6dq1uiv4log";
freezeTemplate(tmpl);
