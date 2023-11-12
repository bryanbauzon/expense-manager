import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./listen.css";

import _implicitScopedStylesheets from "./listen.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M506 302c0-144-109-262-244-262S17 158 17 302c0 34 6 68 18 100a100 100 0 0091 68c12 0 22-10 22-22V323c0-12-10-22-22-22a100 100 0 00-59 20l-1-20c0-118 88-213 196-213s196 96 196 213l-1 20a92 92 0 00-59-21c-12 0-22 10-22 22v124c0 12 10 22 22 22 24 0 49-9 65-27 17-18 25-38 32-62s11-50 11-77z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-64775fga1ot";
freezeTemplate(tmpl);
