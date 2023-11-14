import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./iot_orchestrations.css";

import _implicitScopedStylesheets from "./iot_orchestrations.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M390 740a60 60 0 100-120 60 60 0 000 120zm0 60a120 120 0 110-240 120 120 0 010 240zm67.3-386.6A207 207 0 00598 490a20 20 0 104.8-39.7A167 167 0 01488.3 388a20 20 0 10-31 25.3z"${3}/><path d="M432.9 586.2a207 207 0 004.5-160.2 20 20 0 10-37.6 13.8 167 167 0 01-3.5 130.2 20 20 0 1036.6 16.2zm46.7-328.7a133 133 0 01118.3-6.9c40 17 65.7 49.1 75.7 82 5.3 16.6 6.4 27.3 6.4 62.7a20 20 0 1040 0c0-39.1-1.5-53.5-8.2-74.6A171.9 171.9 0 00613 213.6c-53.1-20.7-104.3-17.7-152.6 8.9a20 20 0 0019.2 35zm0 485.3a133 133 0 00118.3 6.9c40-17 65.7-49 75.7-81.9 5.3-16.7 6.4-27.4 6.4-62.8a20 20 0 1140 0c0 39.1-1.5 53.5-8.2 74.6A171.9 171.9 0 01613 786.7c-53.1 20.7-104.3 17.7-152.6-8.9a20 20 0 1119.2-35z"${3}/><circle cx="390" cy="320" r="120"${3}/><circle cx="700" cy="500" r="120"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6ipeu2orhe";
freezeTemplate(tmpl);
