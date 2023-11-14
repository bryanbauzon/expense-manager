import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./channel_program_levels.css";

import _implicitScopedStylesheets from "./channel_program_levels.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M779 472l-37-17c-5-3-12-3-17 0l-110 53a177 177 0 01142 13l21-10c17-9 17-31 1-39zM202 369l268 127c12 6 27 6 39 0l269-127c16-8 16-29 0-37L509 205c-12-6-27-6-39 0L202 333c-17 7-17 29 0 36zm0 140l268 128c7 4 15 5 23 4 10-48 39-88 79-114l-62 30c-12 6-27 6-39 0L256 455c-5-3-12-3-17 0l-37 17c-17 8-17 29 0 37zm288 193c-7 0-13-2-19-4L255 595c-5-3-12-3-17 0l-36 17c-16 8-16 29 0 37l268 128c12 6 27 6 39 0l6-3c-13-22-22-46-25-72zm182-140a119 119 0 101 239 119 119 0 00-1-239zm94 107h-31c-1-28-8-53-17-71 26 15 44 41 48 71zm-106-78v78h-27c2-37 13-66 27-78zm0 102v78c-13-11-25-41-27-78h27zm24 78v-78h27c-2 37-14 67-27 78zm0-102v-78c13 11 25 41 27 78h-27zm-58-71c-10 19-15 43-17 71h-31c3-30 22-56 48-71zm-48 95h31c1 28 8 53 17 71a91 91 0 01-48-71zm140 71c10-19 15-43 17-71h31c-4 31-22 57-48 71z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-4ps0ao5ignn";
freezeTemplate(tmpl);
