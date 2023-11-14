import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_item.css";

import _implicitScopedStylesheets from "./contract_line_item.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M630 360h106c8 0 14-6 14-14 0-4-1-7-4-10L614 204c-3-3-6-4-10-4-8 0-14 6-14 14v106c0 22 18 40 40 40zm100 60H590c-33 0-60-27-60-60V220c0-11-9-20-20-20H310c-33 0-60 27-60 60v480c0 33 27 60 60 60h380c33 0 60-27 60-60V440c0-11-9-20-20-20zM346 681c-17 0-31-14-31-31s14-31 31-31 31 14 31 31-14 31-31 31zm0-120c-17 0-31-14-31-31s14-31 31-31 31 14 31 31c0 18-14 31-31 31zm49-159l-44 23c-3 2-7-1-6-4l8-49-1-4-36-35c-1-2 1-6 4-7l49-7 3-2 22-45c2-3 6-3 8 0l22 45 3 2 49 7c3 1 5 5 2 7l-36 35-1 4 8 49c1 3-3 6-6 4l-44-23zm275 258c0 11-9 20-20 20H447c-11 0-20-9-20-20v-20c0-11 9-20 20-20h203c11 0 20 9 20 20zm0-120c0 11-9 20-20 20H447c-11 0-20-9-20-20v-20c0-11 9-20 20-20h203c11 0 20 9 20 20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ahu974m2qr";
freezeTemplate(tmpl);
