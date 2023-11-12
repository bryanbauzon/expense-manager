import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calendar.css";

import _implicitScopedStylesheets from "./calendar.scoped.css?scoped=true";

import _lightningButtonIcon from "lightning/buttonIcon";
import _lightningSelect from "lightning/select";
import _lightningFocusTrap from "lightning/focusTrap";
import {registerTemplate} from "lwc";
const stc0 = {
  "slds-datepicker": true,
  "slds-dropdown": true,
  "slds-dropdown_left": true
};
const stc1 = {
  key: 1
};
const stc2 = {
  classMap: {
    "slds-datepicker__filter": true,
    "slds-grid": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-datepicker__filter_month": true,
    "slds-grid": true,
    "slds-grid_align-spread": true,
    "slds-grow": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-align-middle": true
  },
  key: 4
};
const stc5 = {
  "slds-align-middle": true
};
const stc6 = {
  classMap: {
    "slds-align-middle": true
  },
  key: 7
};
const stc7 = {
  classMap: {
    "slds-shrink-none": true
  },
  key: 9
};
const stc8 = {
  "slds-datepicker__month": true
};
const stc9 = {
  key: 12
};
const stc10 = {
  "slds-day": true
};
const stc11 = {
  "tabindex": "-1",
  "role": "button"
};
const stc12 = {
  "slds-button": true,
  "slds-align_absolute-center": true,
  "slds-text-link": true
};
const stc13 = {
  "name": "today",
  "type": "button"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element, gid: api_scoped_id, d: api_dynamic_text, t: api_text, k: api_key, i: api_iterator, ti: api_tab_index} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6} = $ctx;
  return [api_element("div", {
    classMap: stc0,
    attrs: {
      "aria-hidden": "false",
      "aria-label": $cmp.computedAriaLabel,
      "role": "dialog",
      "tabindex": "-1",
      "part": "overlay dropdown calendar"
    },
    key: 0
  }, [api_custom_element("lightning-focus-trap", _lightningFocusTrap, stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": $cmp.previousMonthIconName,
      "variant": "container",
      "alternativeText": $cmp.i18n.previousMonth
    },
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.goToPreviousMonth))
    }
  })]), api_element("h2", {
    classMap: stc5,
    attrs: {
      "aria-atomic": "true",
      "aria-live": "assertive",
      "role": "alert",
      "id": api_scoped_id("month-title"),
      "data-index": $cmp.monthIndex
    },
    key: 6
  }, [api_text(api_dynamic_text($cmp.computedMonthTitle))]), api_element("div", stc6, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": $cmp.nextMonthIconName,
      "variant": "container",
      "alternativeText": $cmp.i18n.nextMonth
    },
    key: 8,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.goToNextMonth))
    }
  })])]), api_element("div", stc7, [api_custom_element("lightning-select", _lightningSelect, {
    props: {
      "value": $cmp.calendarYear,
      "label": $cmp.i18n.yearSelector,
      "variant": "label-hidden",
      "options": $cmp.computedYearList
    },
    key: 10,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleYearChange)),
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleYearSelectClick))
    }
  })])]), api_element("table", {
    classMap: stc8,
    attrs: {
      "aria-labelledby": api_scoped_id("month-title"),
      "role": "grid"
    },
    key: 11
  }, [api_element("thead", stc9, [api_element("tr", {
    attrs: {
      "id": api_scoped_id("weekdays-element")
    },
    key: 13
  }, api_iterator($cmp.computedWeekdayLabels, function (weekday) {
    return api_element("th", {
      attrs: {
        "id": api_scoped_id(weekday.fullName),
        "scope": "col"
      },
      key: api_key(14, weekday.fullName)
    }, [api_element("abbr", {
      attrs: {
        "title": weekday.fullName
      },
      key: 15
    }, [api_text(api_dynamic_text(weekday.shortName))])]);
  }))]), api_element("tbody", {
    key: 16,
    on: {
      "keydown": _m4 || ($ctx._m4 = api_bind($cmp.handleCalendarKeyDown))
    }
  }, api_iterator($cmp.computedMonth, function (week, index) {
    return api_element("tr", {
      key: api_key(17, week.id)
    }, api_iterator(week.days, function (day) {
      return api_element("td", {
        className: day.className,
        attrs: {
          "role": "gridcell",
          "aria-selected": day.isSelected,
          "aria-current": day.ariaCurrent,
          "tabindex": api_tab_index(day.tabIndex),
          "data-value": day.dateValue,
          "aria-label": day.dateValue
        },
        key: api_key(18, day.dateValue)
      }, [api_element("span", {
        classMap: stc10,
        attrs: stc11,
        key: 19,
        on: {
          "click": _m5 || ($ctx._m5 = api_bind($cmp.handleDateClick))
        }
      }, [api_text(api_dynamic_text(day.dayInMonth))])]);
    }));
  }))]), api_element("button", {
    classMap: stc12,
    attrs: stc13,
    key: 20,
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.handleTodayClick))
    }
  }, [api_text(api_dynamic_text($cmp.i18n.today))])])])];
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
tmpl.stylesheetToken = "lwc-71geokdeko1";
freezeTemplate(tmpl);
