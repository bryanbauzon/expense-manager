import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour.css";

import _implicitScopedStylesheets from "./tour.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M798.7 638.8A112.4 112.4 0 01686.5 751H353.8a99.1 99.1 0 001.9-18.8 98 98 0 00-1.9-18.7h332.7a75 75 0 000-150H312.4a112.3 112.3 0 010-224.5h253.4a196.6 196.6 0 0012.8 37.4H312.4a75 75 0 100 150h374.1a112.1 112.1 0 0144.2 9.1 108.6 108.6 0 0140 30 111.8 111.8 0 0128 73.3zm-92.8-427.2a94.3 94.3 0 00-94.1 94.5c0 65.4 67.3 125.3 88.1 141.1a10 10 0 0012.4 0c20.8-16.1 87.7-75.5 87.7-140.9a94.3 94.3 0 00-93.9-94.7zm0 133.8a40 40 0 1140-40 40 40 0 01-40 40z"${3}/><circle cx="256" cy="732" r="56"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3e5b769qlul";
freezeTemplate(tmpl);
