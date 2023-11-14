import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection.css";

import _implicitScopedStylesheets from "./collection.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M120 22h140v235l3 4h6l56-52 4-1h5l52 52 6 1 3-5V20h33a60 60 0 0130 11 52 52 0 0115 29v394a42 42 0 01-8 31 46 46 0 01-37 16H123c-2 0-15 3-34-15a53 53 0 01-14-36v-13H59a31 31 0 01-32-33c0-30 31-30 31-30h17v-80H59a30 30 0 01-32-34 32 32 0 0132-34h16v-76H59a31 31 0 01-32-30 31 31 0 0132-34h16V66a48 48 0 0111-29 51 51 0 0134-15z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7fpgif9lh36";
freezeTemplate(tmpl);
