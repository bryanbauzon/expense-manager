import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pages.css";

import _implicitScopedStylesheets from "./pages.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#5867e8" d="M511-1A507 507 0 004 507v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2030L3706-1z"${3}/><path fill="#2f2cb7" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#bec7f6" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1496 4901h-333v414c0 41-33 74-76 74-41 0-74-33-74-74V4285c0-60 49-108 108-108h375c241 0 376 165 376 362s-139 362-376 362zm-18-591h-315v457h315c142 0 239-93 239-228s-97-229-239-229zm1206 1091a602 602 0 01-618-623c0-372 276-621 618-621 180 0 317 69 412 164 15 13 20 32 20 50 0 40-29 71-68 71-18 0-35-8-49-22a441 441 0 00-315-130c-263 0-463 202-463 488 0 285 200 490 463 490 144 0 263-70 322-130v-245h-358c-36 0-65-28-65-68 0-36 29-65 65-65h400c59 0 108 49 108 108v238c0 185-260 295-472 295zm1148-2c-178 0-319-59-421-149a71 71 0 01-24-54c0-36 27-76 71-76 14 0 30 4 43 15 83 74 198 131 337 131 214 0 282-115 282-207 0-310-711-139-711-567 0-198 176-333 412-333 155 0 288 47 386 128 16 14 25 34 25 54 0 36-31 72-70 72-15 0-31-6-44-16a482 482 0 00-308-105c-144 0-246 77-246 191 0 270 711 115 711 563 0 175-119 353-443 353z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-3d7et1i2srq";
freezeTemplate(tmpl);
