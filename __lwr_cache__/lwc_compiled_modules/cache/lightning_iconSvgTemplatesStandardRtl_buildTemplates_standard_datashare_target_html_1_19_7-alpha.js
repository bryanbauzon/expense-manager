import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datashare_target.css";

import _implicitScopedStylesheets from "./datashare_target.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M660 527c23-33 37-74 37-116 0-112-90-211-202-211s-202 99-202 211c0 43 14 82 37 115l38-38c-16-25-25-55-25-87 0-88 63-152 152-152s153 64 153 152c0 32-10 62-25 86l37 39zm-57-60a121 121 0 10-215 0l40-39c-4-9-5-18-5-27 0-44 27-71 72-71s71 27 71 71c0 9-1 17-4 26zm80 131H579c-6 0-10 3-10 8v14c0 5 4 9 10 9h100v46H311v-46h99c6 0 10-4 10-9v-14c0-5-4-9-10-9l-103 1c-21 0-37 12-37 28v151c0 13 13 23 31 23h388c18 0 31-10 31-23V626c0-16-16-28-37-28z"${3}/><path d="M466 542v100c0 7 7 14 15 14h30c8 0 15-7 15-14V542h68c10 0 15-8 9-13L502 415c-4-3-10-3-14 0L387 529c-6 4-1 13 9 13z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-5agotp6fgj0";
freezeTemplate(tmpl);
