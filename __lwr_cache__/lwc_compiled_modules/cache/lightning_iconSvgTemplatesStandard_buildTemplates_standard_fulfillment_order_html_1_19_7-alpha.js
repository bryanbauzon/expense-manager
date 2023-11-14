import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./fulfillment_order.css";

import _implicitScopedStylesheets from "./fulfillment_order.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M479 630c9 0 17 1 25 4L369 251l-12-37c-4-11-15-16-25-12l-118 38c-11 4-16 15-12 25l12 37c4 11 15 16 25 12l61-20 124 351c16-9 35-15 55-15zm211-91l-124 44c-12 5-27-2-31-15l-44-124c-5-12 2-27 15-31l124-44c12-5 27 2 31 15l44 124c5 12-2 26-15 31zM573 335l-84 29c-12 5-27-2-31-15l-29-84c-5-12 2-27 15-31l84-29c12-5 27 2 31 15l29 84c5 11-2 26-15 31zm226 282l-13-37c-4-11-15-16-25-12l-227 79c24 15 40 40 45 69l209-71c10-5 15-16 11-28zm-320 45c-37 0-69 31-69 69 0 37 31 69 69 69a69 69 0 000-138z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5o1rkk0aq6v";
freezeTemplate(tmpl);
