import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal_roles.css";

import _implicitScopedStylesheets from "./portal_roles.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M200 262v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62H262c-34 0-62 28-62 62zm326 42c0 8-6 16-14 16H278c-8 0-16-6-16-14v-30c0-8 6-16 14-16h234c8 0 16 6 16 14zm110-14c0 17-13 30-30 30s-30-13-30-30 13-30 30-30 30 13 30 30zm104 0c0 17-13 30-30 30s-30-13-30-30 13-30 30-30 30 13 30 30zM260 396c0-8 6-16 14-16h450c8 0 16 6 16 14v330c0 8-6 16-14 16H276c-8 0-16-6-16-14zm60 97c0-11 9-20 20-20h76c11 0 20 9 20 20v30c0 11-9 20-20 20h-76c-11 0-20-9-20-20zm0 110c0-11 9-20 20-20h76c11 0 20 9 20 20v30c0 11-9 20-20 20h-76c-11 0-20-9-20-20zm176-114v150c0 8 8 14 16 14h154c8 0 14-8 14-16V487c0-8-8-14-16-14H510c-8 0-14 8-14 16zm40 114c0-13 14-22 28-28 10-4 11-8 11-12s-3-8-6-11c-6-5-9-13-9-22 0-17 11-31 28-31 18 0 28 14 28 31 0 9-3 17-9 22-3 3-6 6-6 11s1 9 11 13c14 7 28 15 28 28 0 9-7 18-15 18h-75c-8 0-15-9-14-19z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-42bfd0eeus";
freezeTemplate(tmpl);
