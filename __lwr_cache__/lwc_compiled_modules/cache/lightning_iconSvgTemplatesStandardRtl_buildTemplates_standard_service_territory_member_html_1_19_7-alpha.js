import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_member.css";

import _implicitScopedStylesheets from "./service_territory_member.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M427.4 422.8A71.2 71.2 0 01500 352a70.8 70.8 0 11-72.8 70.8zM499.1 200a254 254 0 10251.8 255c0-137.9-112.4-255-251.8-255zm10 438.9a14.4 14.4 0 01-18.9 0c-31.5-23.6-135.6-116.5-135.6-215.6a145.1 145.1 0 01290 0c.2 99.2-103.9 190.5-135.4 215.6zM260 642.1h-12.7a47.5 47.5 0 00-47.3 47.4v63.1a47.4 47.4 0 0047.3 47.4h505.4a47.5 47.5 0 0047.3-47.4v-63.1a47.4 47.4 0 00-47.3-47.4h-15.4a301.5 301.5 0 01-477.2 0z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6gkf3f308d7";
freezeTemplate(tmpl);
