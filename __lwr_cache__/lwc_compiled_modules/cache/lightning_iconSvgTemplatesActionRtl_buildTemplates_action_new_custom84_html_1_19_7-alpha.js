import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom84.css";

import _implicitScopedStylesheets from "./new_custom84.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M456 372H64c-13 0-24 10-24 24s10 24 24 24h31l13 68c2 7 8 12 15 12h258c7 0 13-5 15-12l13-68h47c13 0 24-10 24-24s-10-24-24-24zm-330-48h110v-45c-9-6-16-16-16-27 0-18 14-32 31-32s31 14 31 32c0 12-6 22-16 27v45h110c9 0 16-7 16-16v-24c0-49-46-66-82-81-24-10-28-20-28-30s7-20 15-27c14-13 23-31 23-53 0-39-25-74-69-74s-69 34-69 74c0 22 8 39 23 53 8 7 15 17 15 27s-4 19-28 30c-36 15-82 34-82 81v24c1 9 8 16 16 16z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5bl2i97tobc";
freezeTemplate(tmpl);
