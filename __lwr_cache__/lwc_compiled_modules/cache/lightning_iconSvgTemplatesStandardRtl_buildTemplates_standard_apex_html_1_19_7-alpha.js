import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex.css";

import _implicitScopedStylesheets from "./apex.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M780 675H444c-10 0-19 9-19 19v37c0 10 9 19 19 19h336c10 0 19-9 19-19v-37c0-11-9-19-19-19zM492 448L251 254c-7-6-19-5-25 4l-21 30c-6 9-4 20 4 26l171 137c6 5 6 15 0 20L208 609c-7 6-10 19-4 26l21 32c6 9 17 10 25 4l242-193c10-8 10-23 0-30z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-11pkagdr1sv";
freezeTemplate(tmpl);
