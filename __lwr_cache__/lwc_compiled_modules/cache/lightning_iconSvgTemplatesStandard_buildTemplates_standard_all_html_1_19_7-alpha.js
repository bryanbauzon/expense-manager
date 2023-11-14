import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./all.css";

import _implicitScopedStylesheets from "./all.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M570 445c-15 0-27-12-27-27V245c0-15 12-27 27-27h176c15 0 27 12 27 27v173c0 15-12 27-27 27H570zm76 102L543 658c-6 6-6 17 0 23l103 111c7 7 18 7 25 0l103-111c6-6 6-17 0-23L671 547c-7-7-19-7-25 0zM236 257l89-51c8-5 18-5 27 0l89 51c8 5 13 14 13 23v102c0 9-5 18-13 23l-89 51c-8 5-18 5-27 0l-89-51c-8-5-14-14-14-23V280c0-10 6-19 14-23z"${3}/><circle cx="338" cy="666" r="116"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3skoivojf9n";
freezeTemplate(tmpl);
