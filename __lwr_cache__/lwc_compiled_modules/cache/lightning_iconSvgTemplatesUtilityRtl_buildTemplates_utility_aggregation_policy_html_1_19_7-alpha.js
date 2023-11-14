import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./aggregation_policy.css";

import _implicitScopedStylesheets from "./aggregation_policy.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path d="M493 430l-74-73a20 20 0 00-2-2v-31h33a10 10 0 007-3 10 10 0 001-14l-59-70v-1a10 10 0 00-15 2l-59 70a10 10 0 008 16h35v29a23 23 0 00-7 4l-75 74a24 24 0 000 33 25 25 0 0034 0l47-46v58a24 24 0 0048 0v-54l43 43a25 25 0 0034 0 24 24 0 000-34zM143 20H82a60 60 0 00-62 60v48a60 60 0 0061 60h63a60 60 0 0061-60V80a60 60 0 00-61-60zm-23 120h-15a36 36 0 010-72h15a36 36 0 010 72zm257 48a60 60 0 0062-60V80a60 60 0 00-62-60h-62a60 60 0 00-61 60v48a60 60 0 0061 60zm-74-84a36 36 0 0136-36h15a36 36 0 110 72h-15a36 36 0 01-36-36zM143 236H82a60 60 0 00-61 60v48a60 60 0 0061 60h63a60 60 0 0061-60v-48a60 60 0 00-61-60zm-23 120h-15a36 36 0 110-72h15a36 36 0 010 72z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-2phhh57lkcr";
freezeTemplate(tmpl);
