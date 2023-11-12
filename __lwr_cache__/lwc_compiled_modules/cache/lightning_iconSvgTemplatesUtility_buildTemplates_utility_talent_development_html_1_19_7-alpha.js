import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./talent_development.css";

import _implicitScopedStylesheets from "./talent_development.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M164 296h-2A108 108 0 0059 405v26a13 13 0 0012 13h185a13 13 0 0013-13v-30a105 105 0 00-105-105zm149-18l-41 44a134 134 0 0126 80v30a44 44 0 01-2 12h2a183 183 0 00124-49L314 278zm98-163a184 184 0 00-219-5 102 102 0 0139 174 146 146 0 0121 15l47-50v-76a15 15 0 0115-15h61a15 15 0 0115 15v42a15 15 0 01-15 15h-46v20l113 123a184 184 0 00-31-258z"${3}/><circle cx="164" cy="208" r="72"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7n8t13uc0ui";
freezeTemplate(tmpl);
