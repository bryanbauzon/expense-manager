import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./xml.css";

import _implicitScopedStylesheets from "./xml.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#f38303" d="M511-2A507 507 0 004 505v5384c0 280 227 508 507 508h4578c280 0 507-228 507-508V2029L3706-2z"${3}/><path fill="#a96404" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#ffba90" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#371e03" d="M1937 5385c-22 0-41-9-54-27l-373-497-374 497a64 64 0 01-54 27c-40 0-72-31-72-72 0-15 3-31 14-43l389-513-362-483c-9-13-14-27-14-42 0-34 29-72 72-72 21 0 43 11 57 29l344 463 344-465c13-18 33-27 54-27 38 0 74 31 74 72 0 15-4 29-13 42l-362 481 389 514a74 74 0 01-59 115zm1446-2c-42 0-74-32-74-74v-925l-404 976c-5 14-20 23-37 23-15 0-29-9-35-23l-401-976v925c0 42-33 74-76 74-41 0-74-32-74-74V4283c0-65 56-121 125-121 48 0 99 29 118 76l344 837 346-837c20-47 68-76 119-76 68 0 124 56 124 121v1026c0 42-32 74-75 74zm1054-11h-545c-60 0-108-48-108-108V4232c0-39 32-72 77-72 40 0 72 33 72 72v1007h504c36 0 65 29 65 65 0 39-29 68-65 68z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6n1k7pc2ami";
freezeTemplate(tmpl);
