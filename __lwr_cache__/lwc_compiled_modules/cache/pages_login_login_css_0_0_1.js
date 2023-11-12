function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".login-wrapper" + shadowSelector + " {display: flex;flex-direction: column;align-items: center;padding: 16px;min-height: 100vh;justify-content: center;}h1" + shadowSelector + " {font-size: 50px;font-weight: 700;color: #1b3e56;}h2" + shadowSelector + " {font-size: 34px;color: #01a479;font-weight: 700;}p" + shadowSelector + " {margin: 16px 0px;}.login-button" + shadowSelector + " {background-color: #01a479;color: white;padding: 8px 50px;font-size: 16px;margin-top: 24px;}.login-button:hover" + shadowSelector + " {text-decoration: none;}.login-img" + shadowSelector + " {max-width: 450px;width: 100%;height: auto;}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];