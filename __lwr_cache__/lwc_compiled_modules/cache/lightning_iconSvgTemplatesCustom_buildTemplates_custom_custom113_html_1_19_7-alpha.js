import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom113.css";

import _implicitScopedStylesheets from "./custom113.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M271.6 590.4H729c3.4-.2 6-3 6-6.3v-316c0-6.7-5.2-9.8-11.9-9.8H277.5c-6.3 0-13 3.1-13 9.9v315.7c0 3.2 4 6.4 7.1 6.4v.1zm39-279.5a6 6 0 015.8-5.9H683a6 6 0 016 6v227a6 6 0 01-6 5.8H316.2a6 6 0 01-6-5.9V311h.3zm484 422.5L736.2 615a6.6 6.6 0 00-5.1-3.6H268.8a6.6 6.6 0 00-5 3.6l-58.5 118.4a12.6 12.6 0 0010.5 18.5h568.4a12.6 12.6 0 0010.3-18.5h.1zm-234.8-7.3H440.6a3.9 3.9 0 01-2.7-5.6l17-32.3c1-2 2.9-3.3 5-3.6h80.2c2 .1 4 1.1 5.1 2.8l17 33.1c1.2 2 0 5.6-2.4 5.6z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-7k78ne4kosg";
freezeTemplate(tmpl);
