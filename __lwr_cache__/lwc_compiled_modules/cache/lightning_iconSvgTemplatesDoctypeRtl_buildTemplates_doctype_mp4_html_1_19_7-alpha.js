import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mp4.css";

import _implicitScopedStylesheets from "./mp4.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#730394" d="M512 1A507 507 0 004 508v5384c0 280 227 508 508 508h4577c280 0 508-228 508-508V2032L3706 1z"${3}/><path fill="#3d0157" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#e5b9fe" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M2113 5388c-41 0-74-33-74-74v-925l-403 976c-5 14-20 23-38 23-14 0-29-9-34-23l-402-976v925c0 42-32 74-75 74-42 0-74-32-74-74V4288c0-65 56-121 124-121 49 0 99 29 119 76l344 837 346-837c20-47 68-76 119-76 68 0 124 56 124 121v1026c0 42-33 74-76 74zm884-488h-334l1 414c0 42-33 74-76 74-41 0-74-32-74-74V4284c0-59 49-108 108-108h375c241 0 376 166 376 362s-139 362-376 362zm-18-591h-316l1 458h315c142 0 239-94 239-229s-97-229-239-229zm1391 764h-117v241c0 42-32 74-76 74-41 0-73-32-73-74v-241h-508c-38 0-74-33-74-81 0-16 5-34 15-49l480-722c24-34 65-56 108-56 69 0 128 60 128 126v650h117c34 0 63 29 63 67 0 36-29 65-63 65zm-266-758l-422 626h422z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-50usuhrjg5r";
freezeTemplate(tmpl);
