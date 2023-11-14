import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bill_of_materials.css";

import _implicitScopedStylesheets from "./bill_of_materials.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M370 200H260a60 60 0 00-43 18c-5 6-10 13-13 20s-4 15-4 23v103a62 62 0 0037 56c7 3 15 5 23 5h110a60 60 0 0043-18c5-6 10-12 13-20 3-7 4-15 4-23V261a61 61 0 00-60-61zm-50 164h-10a51 51 0 01-49-52 52 52 0 0149-51h10a52 52 0 0138 14 51 51 0 0116 37 52 52 0 01-34 49c-6 2-13 3-20 3zm230 61h110a60 60 0 0043-18c5-6 10-12 13-20 3-7 4-15 4-23V261a60 60 0 00-60-61H550a60 60 0 00-43 18c-5 6-10 13-13 20-3 8-4 15-4 23v103a62 62 0 0037 56c7 4 15 5 23 5zm50-164h10a51 51 0 0149 52 52 52 0 01-49 51h-10a51 51 0 01-49-51 52 52 0 0149-52zM370 487H260a61 61 0 00-60 61v102a61 61 0 0060 62h110a61 61 0 0060-62V548a61 61 0 00-60-61zm-50 163h-10a52 52 0 01-46-51 51 51 0 0146-51h10a52 52 0 0146 51 51 51 0 01-46 51zm471-37l-23-2-2-1-1-2-10-25v-4l14-20a10 10 0 00-1-14l-26-26-6-3-7 3-20 14-1 1v1h-2c-9-3-15-8-24-11l-2-1-1-2-2-22-2-7-5-4-2-1h-38c-3-1-5 0-7 1-3 3-7 7-7 11a134 134 0 01-3 24l-2 1c-9 3-15 8-24 11h-2l-2-2a294 294 0 00-27-17c-4 0-4 1-8 3l-26 26c-1 2-3 4-3 7l2 7c4 6 10 12 14 20l1 1-1 2c-2 10-7 16-10 26v1l-2 1c-8 1-15 1-22 3l-7 2-3 6v45c2 4 5 7 10 8a127 127 0 0124 4v2c3 9 8 16 10 25 0 1 2 3 0 4l-14 20-2 7 3 6 26 27c3 3 4 3 8 3l7-3 20-15 2-1h2c9 3 15 8 24 11h2l1 2 2 24c2 8 4 10 10 10h38c7 0 9-3 10-10l3-24v-1l1-1h2l25-11h1l1 1v1l20 14c2 2 4 3 7 3l8-3 26-26 3-7-2-7c-4-6-10-12-14-20l-1-2 1-1c2-10 8-16 10-26l1-1 1-1 24-3c8-1 9-4 9-11v-37c0-10-2-12-9-14zm-145 91a58 58 0 01-58-58v-2a59 59 0 0159-56 59 59 0 0158 56 62 62 0 01-58 60z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-8ge2p4gc17";
freezeTemplate(tmpl);
