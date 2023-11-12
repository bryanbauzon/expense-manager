import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sortableHeader.css";

import _implicitScopedStylesheets from "./sortableHeader.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import _lightningPrimitiveIcon from "lightning/primitiveIcon";
import _lightningPrimitiveHeaderActions from "lightning/primitiveHeaderActions";
import _lightningPrimitiveResizeHandler from "lightning/primitiveResizeHandler";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 3
};
const stc2 = {
  "slds-icon_container": true,
  "slds-m-right_xx-small": true
};
const stc3 = {
  classMap: {
    "slds-icon_container": true
  },
  props: {
    "svgClass": "slds-icon slds-icon-text-default slds-is-sortable__icon",
    "iconName": "utility:arrowdown",
    "size": "x-small"
  },
  key: 6
};
const stc4 = {
  classMap: {
    "slds-icon_container": true
  },
  props: {
    "svgClass": "slds-icon slds-icon-text-default slds-is-sortable__icon",
    "iconName": "utility:arrowdown",
    "size": "x-small"
  },
  key: 8
};
const stc5 = {
  classMap: {
    "slds-assistive-text": true
  },
  attrs: {
    "aria-live": "polite",
    "aria-atomic": "true"
  },
  key: 9
};
const stc6 = {
  "data-navigation": "enable"
};
const stc7 = {
  "slds-resizable": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {ti: api_tab_index, b: api_bind, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  const {_m0} = $ctx;
  return [api_element("span", {
    className: $cmp.computedClass,
    style: $cmp.columnStyles,
    attrs: {
      "tabindex": api_tab_index($cmp.internalTabIndex)
    },
    key: 0
  }, [api_element("a", {
    className: $cmp.computedSortClass,
    style: $cmp.columnStyles,
    attrs: {
      "href": "javascript:void(0);",
      "role": $cmp.headerRole,
      "tabindex": api_tab_index($cmp.internalTabIndex),
      "data-navigation": "enable",
      "data-action-triggers": "enter"
    },
    key: 1,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleSortingClick))
    }
  }, [api_element("span", stc0, [api_text(api_dynamic_text($cmp.i18n.sort))]), $cmp.def.iconName ? api_element("div", stc1, [api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc2,
    props: {
      "iconName": $cmp.def.iconName,
      "size": "x-small",
      "alternativeText": $cmp.def.label,
      "title": $cmp.def.label
    },
    key: 4
  }), !$cmp.def.hideLabel ? api_element("span", {
    className: $cmp.getHeaderLabelStyle,
    key: 5
  }, [api_text(api_dynamic_text($cmp.def.label))]) : null, api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc3)]) : null, !$cmp.def.iconName ? api_element("span", {
    className: $cmp.getHeaderLabelStyle,
    attrs: {
      "title": $cmp.def.label
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.def.label))]) : null, !$cmp.def.iconName ? api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, stc4) : null]), api_element("span", stc5, [api_text(api_dynamic_text($cmp.sortedOrderLabel))]), $cmp.hasActions ? api_custom_element("lightning-primitive-header-actions", _lightningPrimitiveHeaderActions, {
    attrs: stc6,
    props: {
      "colKeyValue": $cmp.def.colKeyValue,
      "actions": $cmp.actions,
      "tabIndex": api_tab_index($cmp.internalTabIndex)
    },
    key: 10
  }) : null, $cmp.isResizable ? api_custom_element("lightning-primitive-resize-handler", _lightningPrimitiveResizeHandler, {
    classMap: stc7,
    attrs: stc6,
    props: {
      "value": $cmp.columnWidth,
      "minWidth": $cmp.def.minWidth,
      "maxWidth": $cmp.def.maxWidth,
      "internalTabIndex": $cmp.internalTabIndex,
      "label": $cmp.def.label,
      "tabIndex": api_tab_index($cmp.internalTabIndex),
      "colIndex": $cmp.colIndex,
      "step": $cmp.resizeStep
    },
    key: 11
  }) : null])];
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
tmpl.stylesheetToken = "lwc-4s624japj9g";
freezeTemplate(tmpl);
