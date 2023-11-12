import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nonsortableHeader.css";

import _implicitScopedStylesheets from "./nonsortableHeader.scoped.css?scoped=true";

import _lightningIcon from "lightning/icon";
import _lightningPrimitiveHeaderActions from "lightning/primitiveHeaderActions";
import _lightningPrimitiveResizeHandler from "lightning/primitiveResizeHandler";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-th__action": true
};
const stc1 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-has-flexi-truncate": true
  },
  key: 2
};
const stc2 = {
  "slds-icon_container": true,
  "slds-m-right_xx-small": true
};
const stc3 = {
  "slds-truncate": true
};
const stc4 = {
  "data-navigation": "enable"
};
const stc5 = {
  "slds-resizable": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element, ti: api_tab_index} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    style: $cmp.columnStyles,
    key: 0
  }, [api_element("span", {
    classMap: stc0,
    style: $cmp.thActionStyles,
    key: 1
  }, [$cmp.def.iconName ? api_element("div", stc1, [api_custom_element("lightning-icon", _lightningIcon, {
    classMap: stc2,
    props: {
      "iconName": $cmp.def.iconName,
      "size": "x-small",
      "alternativeText": $cmp.def.label,
      "title": $cmp.def.label
    },
    key: 3
  }), !$cmp.def.hideLabel ? api_element("span", {
    className: $cmp.getHeaderLabelStyle,
    key: 4
  }, [api_text(api_dynamic_text($cmp.def.label))]) : null]) : null, !$cmp.def.iconName ? $cmp.def.label ? api_element("span", {
    className: $cmp.getHeaderLabelStyle,
    attrs: {
      "title": $cmp.def.label
    },
    key: 5
  }, [api_text(api_dynamic_text($cmp.def.label))]) : null : null, !$cmp.def.iconName ? !$cmp.def.label ? api_element("span", {
    classMap: stc3,
    attrs: {
      "title": $cmp.def.ariaLabel
    },
    key: 6
  }) : null : null, $cmp.hasActions ? api_custom_element("lightning-primitive-header-actions", _lightningPrimitiveHeaderActions, {
    attrs: stc4,
    props: {
      "colKeyValue": $cmp.def.colKeyValue,
      "actions": $cmp.actions,
      "tabIndex": api_tab_index($cmp.internalTabIndex)
    },
    key: 7
  }) : null, $cmp.isResizable ? api_custom_element("lightning-primitive-resize-handler", _lightningPrimitiveResizeHandler, {
    classMap: stc5,
    attrs: stc4,
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
    key: 8
  }) : null])])];
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
tmpl.stylesheetToken = "lwc-2f6p69606su";
freezeTemplate(tmpl);
