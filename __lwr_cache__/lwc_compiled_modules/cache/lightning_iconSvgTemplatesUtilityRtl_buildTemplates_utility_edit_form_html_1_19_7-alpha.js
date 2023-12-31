import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit_form.css";

import _implicitScopedStylesheets from "./edit_form.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M237 122V41c0-6-5-11-11-11-3 0-5 1-8 3L116 134c-2 3-3 5-3 8 0 6 5 11 11 11h82c17 0 31-14 31-31zM25 280l119 118 3 1h26c2 0 2-2 2-4v-28L56 248c-7-6-16-6-22 0l-9 9c-7 6-7 15 0 23zm89 173a47 47 0 0046 37h294c25 0 46-21 46-46V76c0-25-21-46-46-46H299c-9 0-16 7-16 15v108c0 25-20 46-46 46H127c-8 0-15 7-15 15v20c0 4 2 8 5 11l95 95c7 5 9 13 9 21v54c0 16-13 29-29 29h-71c-4 0-8 5-7 9zm324-270c0 8-6 15-15 15h-62c-8 0-15-7-15-15v-15c0-8 6-15 15-15h62c8 0 15 7 15 15v15zM284 367v-15c0-8 6-15 15-15h124c8 0 15 7 15 15v15c0 8-6 15-15 15H298c-8 0-15-7-15-15h1zm-31-92v-15c0-8 6-15 15-15h155c8 0 15 7 15 15v15c0 8-6 15-15 15H267c-8 0-15-7-14-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-272hmkokn49";
freezeTemplate(tmpl);
