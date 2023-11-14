import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal_roles_and_subordinates.css";

import _implicitScopedStylesheets from "./portal_roles_and_subordinates.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M320 461c0-11 9-20 20-20h186c11 0 20 9 20 20v30c0 11-9 20-20 20H340c-11 0-20-9-20-20zm286 0c0-11 9-20 20-20h34c11 0 20 9 20 20v30c0 11-9 20-20 20h-34c-11 0-20-9-20-20zM200 262v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62H262c-34 0-62 28-62 62zm326 42c0 8-6 16-14 16H278c-8 0-16-6-16-14v-30c0-8 6-16 14-16h234c8 0 16 6 16 14zm110-14c0 17-13 30-30 30s-30-13-30-30 13-30 30-30 30 13 30 30zm104 0c0 17-13 30-30 30s-30-13-30-30 13-30 30-30 30 13 30 30zM260 396c0-8 6-16 14-16h450c8 0 16 6 16 14v330c0 8-6 16-14 16h-46V591c0-11-9-20-20-20H340c-11 0-20 9-20 20v149h-44c-8 0-16-6-16-14z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qshqjl2cvk";
freezeTemplate(tmpl);
