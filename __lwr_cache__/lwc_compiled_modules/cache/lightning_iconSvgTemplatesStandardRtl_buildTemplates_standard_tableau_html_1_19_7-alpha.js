import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tableau.css";

import _implicitScopedStylesheets from "./tableau.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M600 516h-83v94h-33v-94h-84v-33h83v-93h33v94h84zM430 633h-71v-83h-27v83h-72v25h72v82h27v-82h71zm310-291h-72v-82h-27v82h-71v26h72v82h27v-82h71zM560 718h-48v-58h-23v58h-49v23h49v59h23v-59h48zM430 342h-72v-82h-26v82h-72v25h72v83h26v-83h72zm370 146h-48v-58h-23v58h-49v23h49v59h23v-58h48zm-60 145h-72v-83h-27v83h-71v25h72v82h27v-82h71zM560 257h-51v-57h-19v57h-50v17h51v56h19v-56h50zM320 492h-51v-52h-19v52h-50v16h51v52h19v-52h50z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-qofj802d2h";
freezeTemplate(tmpl);
