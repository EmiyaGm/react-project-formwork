export const canUseWebSocket = () => {};

export const userCookieKey = 'logInfo';

export function setCookie(cname, cvalue, exdays = 1) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + d.toGMTString();
  window.document.cookie =
    ' ' + cname + '=' + cvalue + '; ' + expires + '; path=/';
}

export function getCookie(cname) {
  const name = cname + '=';
  const ca = window.document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}

export function delCookie(cname) {
  const expires = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
  window.document.cookie = ' ' + cname + '=; ' + expires + '; path=/';
}

export function getUrlParamObj() {
  const {
    search
  } = window.location;
  if (search === '') return {};

  const result = {};
  const subs = search.substring(1);
  subs.split('&').forEach(ele => {
    const [k, v] = ele.split('=');

    result[k] = v;
  });
  return result;
}

export function base64Decode(data) {
  if (!data) {
    return '';
  }
  try {
    return decodeURIComponent(
      atob(data)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
    );
  } catch (err) {
    return '';
  }
}

export function isPc() {
  const sUserAgent = window.navigator.userAgent.toLowerCase();
  const bIsIpad = sUserAgent.match(/ipad/i) === 'ipad';
  const bIsIphoneOs = sUserAgent.match(/iphone os/i) === 'iphone os';
  const bIsMidp = sUserAgent.match(/midp/i) === 'midp';
  const bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) === 'rv:1.2.3.4';
  const bIsUc = sUserAgent.match(/ucweb/i) === 'ucweb';
  const bIsAndroid = sUserAgent.match(/android/i) === 'android';
  const bIsCE = sUserAgent.match(/windows ce/i) === 'windows ce';
  const bIsWM = sUserAgent.match(/windows mobile/i) === 'windows mobile';

  if (
    bIsIpad ||
    bIsIphoneOs ||
    bIsMidp ||
    bIsUc7 ||
    bIsUc ||
    bIsAndroid ||
    bIsCE ||
    bIsWM
  ) {
    return false;
  } else {
    return true;
  }
}

export function routePush(...args) {
  window.__routerHistory.push(...args);
}

export function loginUser() {
  return getCookie(userCookieKey);
};

export function isLogin() {
  const user = loginUser();
  return user.length > 0;
};

export function getUrlParam(paramName) {
  var reg = new RegExp('(^|&)' + paramName + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) {
    return unescape(r[2])
  } else {
    return null
  }
}