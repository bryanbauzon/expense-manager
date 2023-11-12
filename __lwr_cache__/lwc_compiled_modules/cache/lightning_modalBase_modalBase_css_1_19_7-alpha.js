function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".fix-slds-modal" + shadowSelector + " {visibility: visible;z-index: unset;}.fix-slds-backdrop" + shadowSelector + " {z-index: unset;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];