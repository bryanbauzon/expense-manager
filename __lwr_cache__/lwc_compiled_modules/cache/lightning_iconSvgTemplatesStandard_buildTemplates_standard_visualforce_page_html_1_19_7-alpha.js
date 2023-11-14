import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visualforce_page.css";

import _implicitScopedStylesheets from "./visualforce_page.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M554 536c-6 0-12-5-12-12v-73c0-6 5-12 12-12h75c6 0 12 5 12 12v73c0 6-5 12-12 12zm32 43l-43 47c-3 3-3 7 0 10l43 47c3 3 8 3 11 0l43-47c3-3 3-7 0-10l-43-47c-3-3-8-3-11 0zM364 456l38-22c3-2 8-2 11 0l38 22c3 2 6 6 6 10v43c0 4-2 8-6 10l-38 22c-3 2-8 2-11 0l-38-22c-3-2-6-6-6-10v-43c0-4 2-8 6-10zm374-256H262c-34 0-62 28-62 62v476c0 34 28 62 62 62h476c34 0 62-28 62-62V262c0-34-28-62-62-62zm0 517c0 12-9 21-21 21H283c-11 0-21-9-21-21V382h476zm0-395H262v-39c0-12 9-21 21-21h434c11 0 21 9 21 21z"${3}/><circle cx="407" cy="630" r="49"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7tdhdi1l37a";
freezeTemplate(tmpl);
