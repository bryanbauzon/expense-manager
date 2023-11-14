import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_list.css";

import _implicitScopedStylesheets from "./lead_list.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M371 623h399c11 0 20 9 20 20v40c0 11-9 20-20 20H371c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm-121 80h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c1 10-7 19-18 20zm0-179h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c1 10-7 19-18 20zm0-179h-40c-11 0-20-9-20-20v-40c0-11 9-20 20-20h40c11 0 20 9 20 20v40c1 10-7 19-18 20zm121 99h351c11 0 20 9 20 20v40c0 11-9 20-20 20H371c-11 0-20-9-20-20v-40c0-11 9-20 20-20zm0-178h399c11 0 20 9 20 20v40c0 11-9 20-20 20H371c-11 0-20-9-20-20v-40c0-11 9-20 20-20z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4d784u9n4hg";
freezeTemplate(tmpl);
