import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./primitiveCellActions.html";
import labelLoadingActions from '@salesforce/label/LightningPrimitiveCellActions.loadingActions';
import labelShowActions from '@salesforce/label/LightningPrimitiveCellActions.showActions';
import { normalizeString } from 'lightning/utilsPrivate';
const DEFAULT_MENU_ALIGNMENT = 'auto-right';
const VALID_MENU_ALIGNMENT = ['auto-right', 'auto-left', 'auto', 'left', 'center', 'right', 'bottom-left', 'bottom-center', 'bottom-right'];
const i18n = {
  loadingActions: labelLoadingActions,
  showActions: labelShowActions
};

/**
 * A cell-level action.
 */
class PrimitiveCellActions extends LightningElement {
  constructor(...args) {
    super(...args);
    // Tracked objects
    this.containerRect = void 0;
    this._actions = [];
    this._isLoadingActions = void 0;
    this._menuAlignment = DEFAULT_MENU_ALIGNMENT;
    /************************** PUBLIC ATTRIBUTES ***************************/
    this.rowKeyValue = void 0;
    this.colKeyValue = void 0;
    this.rowActions = void 0;
    this.internalTabIndex = void 0;
  }
  /**
   * Defines the current menu alignment
   * See `VALID_MENU_ALIGNMENT` for valid menu alignment values
   * See `DEFAULT_MENU_ALIGNMENT` for the default menu alignment
   *
   * @type {string}
   */
  get menuAlignment() {
    return this._menuAlignment;
  }
  set menuAlignment(value) {
    this._menuAlignment = normalizeString(value, {
      fallbackValue: DEFAULT_MENU_ALIGNMENT,
      validValues: VALID_MENU_ALIGNMENT
    });
  }

  /************************** PUBLIC METHODS ***************************/

  /**
   * Sets focus on a lightning-button-menu
   */
  focus() {
    if (this._connected) {
      this.template.querySelector('lightning-button-menu').focus();
    }
  }

  /**
   * Clicks a lightning-button-menu
   */
  click() {
    if (this._connected) {
      // focus/click without changing tabindex doesnt work W-6185168
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      setTimeout(() => {
        this.template.querySelector('lightning-button-menu').click();
      }, 0);
    }
  }

  /************************** PRIVATE GETTERS **************************/

  /**
   * Returns the computed menu alignment value
   *
   * @return {string} Current computed menu alignment
   */
  get computedMenuAlignment() {
    return this.menuAlignment;
  }

  /**
   * Returns the button alternative text in the appropriate language
   *
   * @return {string} Language-specific button alternative text
   */
  get buttonAlternateText() {
    return `${i18n.showActions}`;
  }

  /**
   * Returns the spinner alternative text in the appropriate language
   *
   * @return {string} Language-specific spinner alternative text
   */
  get spinnerAlternateText() {
    return `${i18n.loadingActions}`;
  }

  /************************ EVENT DISPATCHERS **************************/

  /**
   * Handles selecting an action
   *
   * @param {Event} event
   */
  handleActionSelect(event) {
    this.dispatchEvent(new CustomEvent('privatecellactiontriggered', {
      composed: true,
      bubbles: true,
      cancelable: true,
      detail: {
        rowKeyValue: this.rowKeyValue,
        colKeyValue: this.colKeyValue,
        action: event.detail.value
      }
    }));
  }

  /**
   * Handles the opening of an action menu
   */
  handleMenuOpen() {
    this.elementRect = this.template.querySelector('lightning-button-menu').getBoundingClientRect();
    const detail = {
      rowKeyValue: this.rowKeyValue,
      colKeyValue: this.colKeyValue,
      doneCallback: this.finishLoadingActions.bind(this),
      saveContainerPosition: containerRect => {
        this.containerRect = containerRect;
      }
    };
    if (typeof this.rowActions === 'function') {
      this._isLoadingActions = true;
      this._actions = [];
      detail.actionsProviderFunction = this.rowActions;
      // This callback should always be async
      Promise.resolve().then(() => {
        this.dispatchEvent(new CustomEvent('privatecellactionmenuopening', {
          composed: true,
          bubbles: true,
          cancelable: true,
          detail
        }));
      });
    } else {
      this._actions = this.rowActions;
    }
  }

  /************************** LIFECYCLE HOOKS **************************/

  connectedCallback() {
    this._connected = true;
  }
  disconnectedCallback() {
    this._connected = false;
  }

  /************************* HELPER FUNCTIONS **************************/

  /**
   * Resets loading state when all actions have been loaded
   *
   * @param {object} actions - Actions displayed in the menu
   */
  finishLoadingActions(actions) {
    this._isLoadingActions = false;
    this._actions = actions;
  }
  /*LWC compiler v3.0.0*/
}
// Private variables
PrimitiveCellActions.delegatesFocus = true;
_registerDecorators(PrimitiveCellActions, {
  publicProps: {
    rowKeyValue: {
      config: 0
    },
    colKeyValue: {
      config: 0
    },
    rowActions: {
      config: 0
    },
    internalTabIndex: {
      config: 0
    },
    menuAlignment: {
      config: 3
    }
  },
  publicMethods: ["focus", "click"],
  track: {
    containerRect: 1,
    _actions: 1
  },
  fields: ["_isLoadingActions", "_menuAlignment"]
});
export default _registerComponent(PrimitiveCellActions, {
  tmpl: _tmpl,
  sel: "lightning-primitive-cell-actions",
  apiVersion: 59
});