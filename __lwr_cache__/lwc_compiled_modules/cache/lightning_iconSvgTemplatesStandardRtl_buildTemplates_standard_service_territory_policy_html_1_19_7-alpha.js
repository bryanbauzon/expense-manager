import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_policy.css";

import _implicitScopedStylesheets from "./service_territory_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M39.8 20H26.6a6.4 6.4 0 00-6.6 6.1v10.1a6.4 6.4 0 006.6 6.1h13.2a6.4 6.4 0 006.6-6V26a6.3 6.3 0 00-6.6-6.1zm-5.5 16.2H32a5.3 5.3 0 01-5.5-5 5.3 5.3 0 015.5-5.1h2.2a5.3 5.3 0 015.5 5 5.3 5.3 0 01-5.5 5.2zm25.2 6.1h13.2a6.4 6.4 0 006.6-6V26a6.4 6.4 0 00-6.6-6.1H59.5A6.3 6.3 0 0053 26v10.1a6.3 6.3 0 006.5 6.1zM65 26.1h2.2a5.3 5.3 0 015.5 5 5.3 5.3 0 01-5.5 5.1H65a5.3 5.3 0 01-5.5-5 5.3 5.3 0 015.5-5zM39.8 48.4H26.6a6.3 6.3 0 00-6.6 6.1v10.1a6.3 6.3 0 006.6 6.1h13.2a6.3 6.3 0 006.6-6V54.4a6.3 6.3 0 00-6.6-6zm-5.5 16.2H32a4.5 4.5 0 01-.9 0 5 5 0 11.9-10h2.2a4.5 4.5 0 01.9 0 5 5 0 11-1 10zm32.2-16.2C59 48.4 53 54 53 61c0 8.7 9.7 16.6 12.7 18.7a1.5 1.5 0 001.7 0c3-2.2 12.6-10 12.6-18.7 0-7-6-12.6-13.5-12.6zm0 17.8a5.3 5.3 0 115.7-5.3 5.5 5.5 0 01-5.7 5.3z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lwc-1h1unjbfvvn";
freezeTemplate(tmpl);
