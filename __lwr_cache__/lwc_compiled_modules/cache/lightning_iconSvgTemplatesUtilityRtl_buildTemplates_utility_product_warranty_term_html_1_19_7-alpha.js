import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_warranty_term.css";

import _implicitScopedStylesheets from "./product_warranty_term.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M388 256c14 0 25 15 38 20s32 3 40 13 8 29 13 42 21 23 21 37-15 26-20 38-3 32-13 42-28 7-41 12-24 20-38 20-26-15-38-20-32-2-41-12-7-29-13-42-20-23-20-38 15-25 20-37 3-32 13-42 28-7 41-12 24-20 38-20zM268 410a48 48 0 013 7c5 12 5 28 9 40H34a15 15 0 01-14-15v-15a15 15 0 0114-17h233zm162-78a6 6 0 00-8 0l-44 50-20-20a6 6 0 00-8 0l-8 7a5 5 0 000 8l28 28a11 11 0 008 4 10 10 0 008-4l52-57a6 6 0 000-8zM66 123a14 14 0 0114 14v223a14 14 0 01-13 14H33a14 14 0 01-13-14V137a14 14 0 0113-14h34zm190 0a14 14 0 0115 14v183c-7 16-27 30-27 48a25 25 0 001 6h-32a14 14 0 01-13-14V137a14 14 0 0115-14h43zm-97 0a15 15 0 0116 14v223a15 15 0 01-16 14h-16a15 15 0 01-16-14V137a15 15 0 0116-14h17zm180 0a15 15 0 0115 14v105a70 70 0 01-15 10 196 196 0 01-32 6V138a15 15 0 0116-15h16zm86 0a14 14 0 0113 14v115h-2c-16-7-30-27-48-27a28 28 0 00-10 2v-90a14 14 0 0114-14h33zm0-84a15 15 0 0113 16v16a15 15 0 01-14 16H34a15 15 0 01-14-16V55a15 15 0 0114-15h390z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6n7eak2r44k";
freezeTemplate(tmpl);
