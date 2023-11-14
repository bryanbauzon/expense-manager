import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./immunization.css";

import _implicitScopedStylesheets from "./immunization.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M537.6 312.4a71.9 71.9 0 00-8.5-7 41.3 41.3 0 00-51.5 64.6l8.2 8.2h-.6L350 513c-3 2.8-5.9 5.7-8 7.9a68.5 68.5 0 00-8.6 81.5 2.5 2.5 0 010 .7 160 160 0 0064.2 63.6 62.3 62.3 0 0025.7 8.7 71 71 0 0058.9-21.8L620 515.1a4.6 4.6 0 001.1-1.6l9.1 9.1a41.5 41.5 0 1057.3-60zm243.3-27.9l-66.6-66.6a47.2 47.2 0 00-40-13.8 47.7 47.7 0 00-25.8 82.5c6.9 6.8 3.1 3.6 10 10.7l-31.1 30a8.3 8.3 0 000 11.9l31.1 30.8a8.5 8.5 0 0011.9 0l30-30.7c7.7 7.8 4.9 4.6 11.8 11.4a47.6 47.6 0 1068.1-66.5zM310 662.3L208.3 765.1a17.4 17.4 0 1025 24.3L334.1 688l1.8-2.1-24.7-24.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-oojp1cncjn";
freezeTemplate(tmpl);
