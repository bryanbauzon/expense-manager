import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic2.css";

import _implicitScopedStylesheets from "./topic2.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M782 343h-79l34-130v-3c0-5-4-10-10-10h-63c-5 0-9 4-10 8l-34 135H462l34-130v-3c0-5-4-10-10-10h-63c-5 0-9 4-10 8l-35 134h-88c-5 0-8 3-10 7l-16 60v2c0 5 4 10 10 10h83l-39 152h-85c-5 0-8 3-10 7l-16 60v2c0 5 4 10 10 10h80l-34 132v2c0 5 4 10 10 10h63c5 0 9-3 10-8l35-137h157l-34 132v2c0 5 4 10 10 10h63c5 0 9-3 10-8l35-137h87c5 0 9-3 10-8l16-60v-2c0-5-4-10-10-10h-82l39-152h84c5 0 9-3 10-8l16-60v-2c0-1-5-5-10-5zM560 575H402l39-152h157z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-1m2kgdnlg0l";
freezeTemplate(tmpl);
