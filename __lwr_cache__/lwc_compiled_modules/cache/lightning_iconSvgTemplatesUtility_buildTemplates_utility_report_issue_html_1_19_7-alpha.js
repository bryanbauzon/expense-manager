import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./report_issue.css";

import _implicitScopedStylesheets from "./report_issue.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M228 457v10c0 12-9 21-21 21H41c-12 0-21-9-21-21v-10c0-25 30-41 57-53l3-2h7a70 70 0 0076 0h6l3 2c27 13 56 28 56 53zM348 32c-85 0-153 65-153 145 0 25 7 50 20 72l2 8-17 46c-2 6 2 11 7 13h6l45-16c3-1 6-1 8 1 24 14 52 22 80 22 85 0 153-66 153-146 1-80-68-145-151-145zm-11 57h30v70l-3 46h-24l-2-46V89zm15 173c-14 0-18-8-18-18s4-18 18-18 18 8 18 18c1 10-4 18-18 18z"${3}/><ellipse cx="124" cy="337" rx="52" ry="57"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-j80ba4jbgq";
freezeTemplate(tmpl);
