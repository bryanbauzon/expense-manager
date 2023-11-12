import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom77.css";

import _implicitScopedStylesheets from "./new_custom77.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M115 196h31c5 0 8-3 8-8v-12c0-61 45-108 102-108s102 47 102 108v12c0 5 3 8 8 8h31c5 0 8-3 8-8v-12c0-87-65-156-149-156S107 89 107 176v12c0 5 3 8 8 8zm298 48H107c-26 0-47 22-47 48v160c0 26 21 48 47 48h306c26 0 47-22 47-48V292c0-26-21-48-47-48zM298 373c-7 11-11 24-8 37l5 24c2 9-5 18-14 18h-50c-9 0-16-10-14-18l5-25c3-13-1-26-8-36s-10-23-8-36c4-19 20-34 39-38 32-6 60 18 60 47 0 10-3 19-7 27z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-ssct14ki4n";
freezeTemplate(tmpl);
