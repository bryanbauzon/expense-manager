import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_required.css";

import _implicitScopedStylesheets from "./product_required.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill-rule="evenodd" d="M338 763h-40a20 20 0 01-20-20v-40a20 20 0 0120-20h40a20 20 0 0120 20v40a19 19 0 01-20 20zm0-179h-40a20 20 0 01-20-20v-40a20 20 0 0120-20h40a20 20 0 0120 20v40a19 19 0 01-20 20zm138-321l-22-21a14 14 0 00-21 0L301 373l-54-52a14 14 0 00-21 0l-21 21a14 14 0 000 21l73 74a30 30 0 0043 0l155-152a17 17 0 000-22z"${3}/><rect x="439" y="683" width="361" height="80" rx="20" ry="20"${3}/><rect x="439" y="504" width="361" height="80" rx="20" ry="20"${3}/><rect x="499" y="326" width="301" height="80" rx="20" ry="20"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5i1alh5c3mu";
freezeTemplate(tmpl);
