import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal_roles.css";

import _implicitScopedStylesheets from "./portal_roles.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 200H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm-264 74c0-8 8-14 16-14h234c8 0 14 8 14 16v30c0 8-8 14-16 14H488c-8 0-14-8-14-16zm-80-14c17 0 30 13 30 30s-13 30-30 30-30-13-30-30 13-30 30-30zm-104 0c17 0 30 13 30 30s-13 30-30 30-30-13-30-30 13-30 30-30zm450 466c0 8-8 14-16 14H274c-8 0-14-8-14-16V394c0-8 8-14 16-14h450c8 0 14 8 14 16zm-60-203c0 11-9 20-20 20h-76c-11 0-20-9-20-20v-30c0-11 9-20 20-20h76c11 0 20 9 20 20zm0 110c0 11-9 20-20 20h-76c-11 0-20-9-20-20v-30c0-11 9-20 20-20h76c11 0 20 9 20 20zM490 473H336c-8 0-16 6-16 14v150c0 8 6 16 14 16h154c8 0 16-6 16-14V489c0-8-6-16-14-16zm-40 149h-75c-8 0-15-9-15-18 0-13 14-21 28-28 10-4 11-8 11-13s-3-8-6-11c-6-5-9-13-9-22 0-17 10-31 28-31 17 0 28 14 28 31 0 9-3 17-9 22-3 3-6 7-6 11s1 8 11 12c14 6 28 15 28 28 1 10-6 19-14 19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1i12e85h13l";
freezeTemplate(tmpl);
