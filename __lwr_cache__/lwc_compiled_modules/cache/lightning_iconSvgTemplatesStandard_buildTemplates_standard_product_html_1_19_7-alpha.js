import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product.css";

import _implicitScopedStylesheets from "./product.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M220 660h50c11 0 20-9 20-20V330c0-11-9-20-20-20h-50c-11 0-20 9-20 20v310c0 11 9 20 20 20zm560-350h-50c-11 0-20 9-20 20v310c0 11 9 20 20 20h50c11 0 20-9 20-20V330c0-11-9-20-20-20zM530 660c11 0 20-9 20-20V330c0-11-9-20-20-20h-60c-11 0-20 9-20 20v310c0 11 9 20 20 20zm120 0c11 0 20-9 20-20V330c0-11-9-20-20-20h-20c-11 0-20 9-20 20v310c0 11 9 20 20 20zm-260 0c11 0 20-9 20-20V330c0-11-9-20-20-20h-20c-11 0-20 9-20 20v310c0 11 9 20 20 20zm390 60H220c-11 0-20 9-20 20v20c0 11 9 20 20 20h560c11 0 20-9 20-20v-20c0-11-9-20-20-20zm0-520H220c-11 0-20 9-20 20v20c0 11 9 20 20 20h560c11 0 20-9 20-20v-20c0-11-9-20-20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1uuov005irj";
freezeTemplate(tmpl);
