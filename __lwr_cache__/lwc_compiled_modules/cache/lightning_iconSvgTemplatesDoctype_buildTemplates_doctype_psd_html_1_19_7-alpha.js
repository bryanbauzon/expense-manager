import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./psd.css";

import _implicitScopedStylesheets from "./psd.scoped.css?scoped=true";

import {parseSVGFragment, registerTemplate} from "lwc";
const $fragment1 = parseSVGFragment`<g${3}><path fill="#0176d3" d="M511 5A507 507 0 004 513v5384c0 280 227 507 507 507h4578c280 0 507-227 507-507V2036L3706 5z"${3}/><path fill="#014486" d="M5598 2035v100H4318s-631-126-613-671c0 1 21 571 600 571z"${3}/><path fill="#aacbff" d="M3707 0v1456c0 166 111 579 611 579h1280z"${3}/><path fill="#fff" d="M1495 4901h-333v414c0 42-32 74-76 74-41 0-73-32-73-74V4285c0-59 48-108 108-108h374c242 0 377 166 377 362s-139 362-377 362zm-18-590h-315v457h315c142 0 240-94 240-229s-98-228-240-228zm1026 1089c-178 0-319-60-421-150a71 71 0 01-24-54c0-36 28-75 71-75 14 0 30 3 43 14 83 74 198 132 337 132 214 0 282-116 282-208 0-309-711-138-711-567 0-198 176-333 412-333 155 0 289 47 386 128 16 14 25 34 25 54 0 36-31 72-70 72-15 0-31-5-44-16a483 483 0 00-307-105c-144 0-247 78-247 191 0 270 711 115 711 564 0 175-119 353-443 353zm1122-22h-303c-59 0-108-48-108-108v-985c0-59 49-108 108-108h303c372 0 615 261 615 602 0 342-243 599-615 599zm0-1068h-261v935h261c291 0 461-209 461-466 0-260-164-469-461-469z"${3}/></g>`;
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
tmpl.stylesheetToken = "lwc-6usos1km0qk";
freezeTemplate(tmpl);
