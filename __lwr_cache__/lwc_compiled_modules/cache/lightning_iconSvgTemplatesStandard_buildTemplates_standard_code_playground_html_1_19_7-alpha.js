import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./code_playground.css";

import _implicitScopedStylesheets from "./code_playground.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M738 200H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm-455 62h434c11 0 21 9 21 21v39H262v-39c0-12 9-21 21-21zm434 476H283c-11 0-21-9-21-21V382h476v335c0 12-9 21-21 21zM467 633l-66-66 66-66c4-4 4-10 0-14l-28-28c-4-4-10-4-14 0l-73 73-15 15-13 13c-2 2-3 5-3 7 0 3 1 5 3 7l102 102c4 4 10 4 14 0l28-28c3-5 3-11-1-15zm210-74l-13-13-15-15-73-73c-4-4-10-4-14 0l-28 28c-4 4-4 10 0 14l66 66-66 66c-4 4-4 10 0 14l28 28c4 4 10 4 14 0l102-102c2-2 3-5 3-7z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6qp1sgvdmk7";
freezeTemplate(tmpl);
