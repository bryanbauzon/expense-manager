import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record.css";

import _implicitScopedStylesheets from "./record.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M361 100V68c0-26-21-48-47-48H204c-26 0-47 22-47 48v32c0 9 7 16 16 16h173c9 0 16-7 15-16zm-321 8v344c0 26 21 48 47 48h346c26 0 47-22 47-48V108c0-26-21-48-47-48h-16c-5 0-8 3-8 8v32c0 35-28 64-63 64H174c-35 0-63-29-63-64V68c0-5-3-8-8-8H87c-26 0-47 22-47 48zm306 280c0-9 7-16 16-16h16c9 0 16 7 16 16v16c0 9-7 16-16 16h-16c-9 0-16-7-16-16zm0-80c0-9 7-16 16-16h16c9 0 16 7 16 16v16c0 9-7 16-16 16h-16c-9 0-16-7-16-16zm0-80c0-9 7-16 16-16h16c9 0 16 7 16 16v16c0 9-7 16-16 16h-16c-9 0-16-7-16-16zM126 388c0-9 7-16 16-16h157c9 0 16 7 16 16v16c0 9-7 16-16 16H142c-9 0-16-7-16-16zm0-80c0-9 7-16 16-16h157c9 0 16 7 16 16v16c0 9-7 16-16 16H142c-9 0-16-7-16-16zm0-80c0-9 7-16 16-16h157c9 0 16 7 16 16v16c0 9-7 16-16 16H142c-9 0-16-7-16-16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-24t2209f3ar";
freezeTemplate(tmpl);
