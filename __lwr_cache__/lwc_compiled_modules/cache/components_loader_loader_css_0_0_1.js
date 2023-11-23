function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".loader-wrapper" + shadowSelector + "{background: rgb(0 0 0 / 70%);min-height: 100vh;width: 100%;display: flex;justify-content: center;align-items: center;position: fixed;z-index: 999;}.lds-ripple" + shadowSelector + " {display: inline-block;position: relative;width: 80px;height: 80px;}.lds-ripple" + shadowSelector + " div" + shadowSelector + " {position: absolute;border: 4px solid #fff;opacity: 1;border-radius: 50%;animation: lds-ripple" + suffixToken + " 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;}.lds-ripple" + shadowSelector + " div:nth-child(2)" + shadowSelector + " {animation-delay: -0.5s;}@keyframes lds-ripple" + suffixToken + " {0% {top: 36px;left: 36px;width: 0;height: 0;opacity: 0;}4.9% {top: 36px;left: 36px;width: 0;height: 0;opacity: 0;}5% {top: 36px;left: 36px;width: 0;height: 0;opacity: 1;}100% {top: 0px;left: 0px;width: 72px;height: 72px;opacity: 0;}}";
  /*LWC compiler v3.0.0*/
}
export default [stylesheet];