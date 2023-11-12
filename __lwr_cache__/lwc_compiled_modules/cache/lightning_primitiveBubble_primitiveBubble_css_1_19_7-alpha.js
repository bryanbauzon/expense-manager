function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".fix-popover_tooltip_alignment" + shadowSelector + " {min-width: inherit;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];