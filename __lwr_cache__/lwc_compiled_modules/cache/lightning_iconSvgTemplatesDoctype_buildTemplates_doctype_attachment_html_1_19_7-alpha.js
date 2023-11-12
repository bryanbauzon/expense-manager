import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attachment.css";

import _implicitScopedStylesheets from "./attachment.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#747474" d="M511-3A507 507 0 004 505v5384a507 507 0 00507 507h4578a507 507 0 00507-507V2028L3706-3z"${3}/><path fill="#5c5c5c" d="M5598 2035v100H4318s-631-126-613-671c0 0 21 571 600 571z"${3}/><path fill="#c9c9c9" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2660 4146c113-113 113-299 0-412s-297-113-412 0l-917 916c-113 113-113 299 0 412s299 113 412 0l562-560c32-32 32-85 0-118s-86-32-118 0l-353 353a120 120 0 01-176 0 120 120 0 010-176l351-354c132-130 343-130 472 0 130 132 130 343 0 472l-563 563c-211 216-553 211-766 0-211-213-211-556 0-766l917-917c213-213 556-213 766 0a539 539 0 010 766l-90 90a497 497 0 00-93-261l7-7z"${3}/></g>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 5600 6400",
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
tmpl.stylesheetToken = "lwc-59g8ia19job";
freezeTemplate(tmpl);
