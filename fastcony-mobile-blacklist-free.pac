var _httpMap = {
  white: {
    any: [],
    "clientlog.music.163.com": [/^\//i]
  },
  proxy: {
    any: [
      /^[^/]*\.ssports\.com\//i,
      /^[^/]*\.cupid\.iqiyi\.com\//i,
      /^[^/]*\.video\.qq\.com\/get/i,
      /^[^/]*\.video\.qq\.com\/fcgi\-bin\//i,
      /^[^/]*\.pptv\.com\//i,
      /^[^/]*\.ip138\.com\//i,
      /^[^/]*\.dpool\.sina\.com\.cn\/iplookup/i,
      /^[^/]*\.letv\.com\/mms\/out\/video\/play/i,
      /^[^/]*\.api\.tv\.itc\.cn\//i,
      /^[^/]*\.letv\.cn\/vod\/v2\//i
    ],
    "v.zhibo.tv": [/^\//i],
    "www.zhibo.tv": [/^\//i],
    "v.api.hunantv.com": [/^\//i, /^\/player\/video/i],
    "live.gslb.letv.com": [/^\//i, /^\/gslb\?/i],
    "ac.qq.com": [/^\//i, /^\/Comic/i, /^\/Jump/i],
    "ssports.com": [/^\//i],
    "ssports.smgbb.cn": [/^\//i],
    "www.bilibili.com": [/^\//i],
    "interface.bilibili.com": [/^\//i],
    "bangumi.bilibili.com": [/^\//i],
    "kandian.com": [/^\/player\/getEpgInfo/i],
    "u.y.qq.com": [/^\/cgi\-bin\//i, /^\//i],
    "acs.youku.com": [/^\//i],
    "pl-ali.youku.com": [/^\//i],
    "list.youku.com": [
      /^\/category\//i,
      /^\/show\/module\?/i,
      /^\/show\/point\?/i,
      /^\/show\/episode\?/i
    ],
    "api.youku.com": [/^\/player\//i],
    "play.youku.com": [/^\/play\/get\.json/i],
    "play-dxk.youku.com": [/^\/play\/get\.json/i],
    "play-ali.youku.com": [/^\/play\/get\.json/i],
    "ups.youku.com": [/^\/ups\/get\.json/i],
    "video.tudou.com": [/^\/v\//i],
    "www.tudou.com": [
      /^\/a\//i,
      /^\/v\//i,
      /^\/outplay\/goto\//i,
      /^\/tvp\/alist\.action/i,
      /^\/programs\/view\//i,
      /^\/albumplay\//i,
      /^\/listplay\//i
    ],
    "s.plcloud.music.qq.com": [/^\/fcgi\-bin\/p\.fcg/i],
    "i.y.qq.com": [/^\/.*\/fcg\-bin\//i, /^\/.*\/fcgi\-bin\//i],
    "c.y.qq.com": [/^\/.*\/fcg\-bin\//i, /^\/.*\/fcgi\-bin\//i, /^\//i],
    "api.unipay.qq.com": [/^\/cgi\-bin\/get_pay_info\.fcg\?/i],
    "acc.music.qq.com": [/^\/base\/fcgi\-bin\/getsession/i],
    "hot.vrs.sohu.com": [/^\//i],
    "live.tv.sohu.com": [/^\/live\/player/i],
    "pad.tv.sohu.com": [/^\/playinfo/i],
    "my.tv.sohu.com": [/^\/play\/m3u8version\.do/i],
    "api.appsdk.soku.com": [/^\//i],
    "hot.vrs.letv.com": [/^\//i],
    "api.le.com": [/^\/mms\/out\/video\//i],
    "player.pc.le.com": [/^\/mms\/out\/video\//i],
    "player-pc.le.com": [/^\/mms\/out\/video\//i],
    "www.iqiyi.com": [/^\//i],
    "live.video.iqiyi.com": [/^\//i],
    "so.iqiyi.com": [/^\/so\//i],
    "v.iqiyi.com": [/^\/index\//i],
    "data.video.qiyi.com": [/^\//i],
    "data.video.iqiyi.com": [/^\//i],
    "cache.vip.qiyi.com": [/^\//i],
    "cache.video.qiyi.com": [/^\//i],
    "cache.vip.iqiyi.com": [/^\//i],
    "cache.video.iqiyi.com": [/^\//i],
    "iplocation.geo.qiyi.com": [/^\/cityjson/i],
    "iplocation.geo.iqiyi.com": [/^\/cityjson/i],
    "mobile.api.hunantv.com": [/^\/v5\/video\/getSource/i, /^\//i],
    "v.api.mgtv.com": [/^\/player\/video/i],
    "pcweb.api.mgtv.com": [/^\/player\//i],
    "mpp.liveapi.mgtv.com": [/^\/v1\/epg\/turnplay\/getLivePlayUrlMPP/i],
    "182.254.116.117": [/^\//i],
    "app.bilibili.com": [/^\/bangumi\//i],
    "122.72.82.31": [/^\//i],
    "211.151.158.155": [/^\//i],
    "aid.video.qq.com": [/^\/fcgi\-bin\/userip\?/i],
    "aidbak.video.qq.com": [/^\/fcgi\-bin\/userip\?/i],
    "pay.video.qq.com": [/^\/fcgi\-bin\/paylimit/i],
    "paybak.video.qq.com": [/^\/fcgi\-bin\/paylimit/i],
    "info.zb.qq.com": [/^\/\?/i],
    "info.zb.video.qq.com": [/^\/\?/i],
    "qzs.qq.com": [/^\/tencentvideo_v1\//i],
    "vd.l.qq.com": [/^\//i],
    "vi.l.qq.com": [/^\//i],
    "dispatcher.video.sina.com.cn": [/^\//i],
    "geo.js.kankan.com": [/^\//i],
    "ip.kankan.com": [/^\//i],
    "music.sina.com.cn": [
      /^\/yueku\/intro\//i,
      /^\/radio\/port\/webFeatureRadioLimitList\.php/i
    ],
    "v.iask.com": [/^\/v_play\.php/i, /^\/v_play_ipad\.cx\.php/i],
    "tv.weibo.com": [/^\/player\//i],
    "wtv.v.iask.com": [
      /^\/.*\.m3u8/i,
      /^\/mcdn\.php$/i,
      /^\/player\/ovs1_idc_list\.php/i
    ],
    "video.sina.com.cn": [/^\/interface\/l\/u\/getFocusStatus\.php/i],
    "vxml.56.com": [/^\/json\//i],
    "web-play.pptv.com": [/^\//i],
    "v.pptv.com": [/^\/show\//i],
    "web-play.pplive.cn": [/^\//i],
    "tools.aplusapi.pptv.com": [/^\/get_ppi\?/i],
    "live.pptv.com": [/^\/api\/subject_list\?/i],
    "inner.kandian.com": [/^\//i],
    "player.aplus.pptv.com": [/^\//i],
    "v.pps.tv": [/^\/ugc\/ajax\/aj_html5_url\.php/i],
    "dyn.ugc.pps.tv": [/^\//i],
    "ipservice.163.com": [/^\//i],
    "so.open.163.com": [/^\/open\/info\.htm/i],
    "zb.s.qq.com": [/^\//i],
    "play.baidu.com": [/^\/data\/music\/songlink/i],
    "www.yinyuetai.com": [/^\/insite\//i, /^\/main\/get\-/i],
    "www.kugou.com": [/^\/interface\/geoip\//i],
    "www.kuwo.cn": [/^\/yy\/PlayCheckIp\?callback=checkIpCallback&_=/i],
    "antiserver.kuwo.cn": [/^\/anti\.s\?/i],
    "ipcheck.kuwo.cn": [/^\/ip_check\.kuwo/i],
    "api.letv.com": [
      /^\/streamblock/i,
      /^\/mms\/out\/video\/play/i,
      /^\/mms\/out\/common\/geturl/i,
      /^\/geturl/i,
      /^\/api\/geturl/i
    ],
    "api.www.letv.com": [/^\/mms\/out\/video\/playJson\?/i],
    "st.live.letv.com": [/^\/live\//i],
    "live.g3proxy.lecloud.com": [/^\/gslb\?/i],
    "api.live.letv.com": [/^\/crossdomain\.xml$/i],
    "static.itv.letv.com": [/^\/api/i],
    "ip.apps.cntv.cn": [/^\/js\/player\.do/i],
    "vdn.apps.cntv.cn": [/^\/api\/get/i],
    "vdn.live.cntv.cn": [/^\/api2\//i],
    "cctv1.vtime.cntv.cloudcdn.net": [/^\/cache\//i],
    "cctv5.vtime.cntv.cloudcdn.net": [/^\/cache\//i],
    "cctv5plus.vtime.cntv.cloudcdn.net": [/^\/cache\//i],
    "cctv13.vtime.cntv.cloudcdn.net": [/^\/cache\//i],
    "sports1pull.live.wscdns.com": [/^\/live\/aoyun2$/i],
    "vip.sports.cntv.cn": [
      /^\/check\.do/i,
      /^\/play\.do/i,
      /^\/servlets\/encryptvideopath\.do/i
    ],
    "211.151.157.15": [/^\//i],
    "play.taihe.com": [/^\/data/i],
    "pv.sohu.com": [/^\/cityjson$/i],
    "www.zhangyu.tv": [/^\/channel\/info/i],
    "www.missevan.com": [/^\/sound\/getsound/i, /^\/sound\/getimages/i],
    "api.aixifan.com": [/^\/plays\//i],
    "www.acfun.cn": [/^\/video\/getVideo/i, /^\/rest/i],
    "www.youku.com": [/^\/show_page\//i],
    "v.youku.com": [/^\/v_show\//i],
    "www.soku.com": [/^\/search_video\//i],
    "search.api.3g.youku.com": [/^\//i],
    "search.api.3g.tudou.com": [/^\//i],
    "api.tv.sohu.com": [/^\//i],
    "live.qq.com": [/^\//i],
    "live.api.hunantv.com": [/^\/pc\/getSourceById/i],
    "www.qie.tv": [/^\//i],
    "api.bilibili.com": [/^\//i],
    "douban.fm": [/^\//i],
    "www.xiami.com": [/^\//i],
    "lixian.xunlei.com": [/^\//i],
    "lixian.vip.xunlei.com": [/^\//i],
    "dynamic.cloud.vip.xunlei.com": [/^\//i],
    "cloud.vip.xunlei.com": [/^\//i],
    "36.110.222.105": [/^\//i],
    "36.110.222.119": [/^\//i],
    "36.110.222.146": [/^\//i],
    "36.110.222.156": [/^\//i],
    "123.125.89.6": [/^\//i],
    "123.125.89.101": [/^\//i],
    "123.125.89.102": [/^\//i],
    "123.125.89.103": [/^\//i],
    "123.125.89.157": [/^\//i],
    "123.125.89.159": [/^\//i],
    "123.126.32.134": [/^\//i],
    "123.59.122.75": [/^\//i],
    "123.59.122.76": [/^\//i],
    "123.59.122.77": [/^\//i],
    "123.59.122.104": [/^\//i],
    "111.206.208.36": [/^\//i],
    "111.206.208.37": [/^\//i],
    "111.206.208.38": [/^\//i],
    "111.206.208.61": [/^\//i],
    "111.206.208.62": [/^\//i],
    "111.206.208.163": [/^\//i],
    "111.206.208.164": [/^\//i],
    "111.206.208.166": [/^\//i],
    "111.206.211.145": [/^\//i],
    "111.206.211.146": [/^\//i],
    "111.206.211.147": [/^\//i],
    "111.206.211.148": [/^\//i],
    "111.206.211.129": [/^\//i],
    "111.206.211.130": [/^\//i],
    "111.206.211.131": [/^\//i],
    "220.181.153.113": [/^\//i],
    "14.152.77.32": [/^\//i],
    "14.152.77.26": [/^\//i],
    "14.152.77.25": [/^\//i],
    "14.152.77.22": [/^\//i],
    "183.232.229.22": [/^\//i],
    "183.232.229.21": [/^\//i],
    "183.232.229.25": [/^\//i],
    "183.232.229.32": [/^\//i],
    "115.182.200.51": [/^\//i],
    "115.182.200.50": [/^\//i],
    "115.182.200.54": [/^\//i],
    "115.182.200.53": [/^\//i],
    "115.182.200.52": [/^\//i],
    "115.182.63.51": [/^\//i],
    "115.182.63.93": [/^\//i],
    "ark.letv.com": [/^\/s/i],
    "search.lekan.letv.com": [/^\//i],
    "pay.youku.com": [/^\/buy\/redirect\.html/i],
    "pay.tudou.com": [/^\/buy\/redirect\.html/i],
    "chrome.2345.com": [/^\/dianhua\/index\.php\?m=call&f=check&/i],
    "music.163.com": [/^\//i, /^\/api\//i, /^\/eapi\//i],
    "m10.music.126.net": [/^\//i],
    "migu.cn": [/^\//i],
    "miguvideo.com": [/^\//i],
    "ac.dun.163yun.com": [/^\//i],
    "pingfore.qq.com": [/^\//i],
    "y.qq.com": [/^\//i],
    "shc.y.qq.com": [/^\//i],
    "shu.y.qq.com": [/^\//i],
    "szu.y.qq.com": [/^\//i],
    "stat.y.qq.com": [/^\//i],
    "101.227.139.217": [/^\//i],
    "103.7.30.79": [/^\//i],
    "qbwup.imtt.qq.com": [/^\//i],
    "s.video.qq.com": [/^\//i],
    "dldir1.qq.com": [/^\//i],
    "access.video.qq.com": [/^\//i],
    "video.qq.com": [/^\//i],
    "puui.qpic.cn": [/^\//i]
  }
};
var _httpsMap = {
  white: {
    any: []
  },
  proxy: {
    any: [/^[^/]*\.video\.qq\.com\//i, /^[^/]*\.music\.126\.net\//i],
    "pstream.api.mgtv.com": [/^\//i],
    "u.y.qq.com": [/^\//i],
    "dmd-fifajs-h5-ikuweb.youku.com": [/^\//i],
    "dmd-fifa-h5-ikuweb.youku.com": [/^\//i],
    "dmd-fifajs-h5-ikuweb-hb.youku.com": [/^\//i],
    "acs.youku.com": [/^\//i],
    "pl-ali.youku.com": [/^\//i],
    "ups.youku.com": [/^\/$/i],
    "c.y.qq.com": [/^\//i],
    "api.unipay.qq.com": [/^\//i],
    "hot.vrs.sohu.com": [/^\//i],
    "www.iqiyi.com": [/^\//i],
    "data.video.qiyi.com": [/^\//i],
    "data.video.iqiyi.com": [/^\//i],
    "cache.video.iqiyi.com": [/^\//i],
    "live.video.iqiyi.com": [/^\//i],
    "v.api.mgtv.com": [/^\//i],
    "pcweb.api.mgtv.com": [/^\//i],
    "mpplive.api.mgtv.com": [/^\//i],
    "info.zb.qq.com": [/^\//i],
    "info.zb.video.qq.com": [/^\//i],
    "qzs.qq.com": [/^\//i],
    "vd.l.qq.com": [/^\//i],
    "vi.l.qq.com": [/^\//i],
    "www.halihali.tv": [/^\//i],
    "sports.pptv.com": [/^\//i],
    "web-play.pptv.com": [/^\//i],
    "ppi.api.pptv.com": [/^\//i],
    "web-play.pplive.cn": [/^\//i],
    "player.aplus.pptv.com": [/^\//i],
    "zb.s.qq.com": [/^\//i],
    "imgsa.baidu.com": [/^\//i],
    "mips.kugou.com": [/^\//i],
    "pv.sohu.com": [/^\//i],
    "v.youku.com": [/^\//i],
    "ac.qq.com": [/^\//i],
    "www.bilibili.com": [/^\//i],
    "interface.bilibili.com": [/^\//i],
    "bangumi.bilibili.com": [/^\//i],
    "manga.bilibili.com": [/^\//i],
    "api.bilibili.com": [/^\//i],
    "api.live.bilibili.com": [/^\//i],
    "douban.fm": [/^\//i],
    "www.xiami.com": [/^\//i],
    "emumo.xiami.com": [/^\//i],
    "music.163.com": [/^\//i, /^\/api\//i, /^\/eapi\//i],
    "manhua.163.com": [/^\//i],
    "c.open.163.com": [/^\//i],
    "migu.cn": [/^\//i],
    "miguvideo.com": [/^\//i],
    "top.zhan.com": [/^\//i],
    "ac.dun.163yun.com": [/^\//i],
    "wup.browser.qq.com": [/^\//i],
    "203.205.255.185": [/^\//i],
    "120.209.135.184": [/^\//i],
    "103.7.31.186": [/^\//i],
    "103.7.30.89": [/^\//i],
    "120.204.23.187": [/^\//i],
    "121.51.23.172": [/^\//i],
    "117.169.16.51": [/^\//i],
    "pingfore.qq.com": [/^\//i],
    "y.qq.com": [/^\//i],
    "shc.y.qq.com": [/^\//i],
    "shu.y.qq.com": [/^\//i],
    "szu.y.qq.com": [/^\//i],
    "101.227.139.217": [/^\//i],
    "113.96.208.169": [/^\//i],
    "183.3.225.60": [/^\//i],
    "61.147.221.123": [/^\//i],
    "203.205.151.50": [/^\//i],
    "115.231.37.162": [/^\//i],
    "14.18.245.250": [/^\//i],
    "180.152.105.148": [/^\//i],
    "116.211.185.176": [/^\//i],
    "101.91.63.187": [/^\//i]
  }
};
var _ipCidr = [];
// var _proxyStr = "PROXY 127.0.0.1:12307; DIRECT;";
// var _proxyStr = "DIRECT; SOCKS 127.0.0.1:57256;";
// var _direct = " DIRECT";
// var _direct = "SOCKS 127.0.0.1:57256";

var _direct = "DIRECT; SOCKS 127.0.0.1:57256;";
var _proxyStr = "SOCKS 127.0.0.1:57256";

function _checkRegexList(regexList, str) {
  if (str.slice(0, 4) === ":80/") str = str.slice(3);
  for (var i = 0; i < regexList.length; i++)
    if (regexList[i].test(str)) return true;
  return false;
}

function _checkPatterns(patterns, hostname, fullUrl, protoLen) {
  if (
    patterns.hasOwnProperty(hostname) &&
    _checkRegexList(
      patterns[hostname],
      fullUrl.slice(protoLen + hostname.length)
    )
  )
    return true;
  if (_checkRegexList(patterns.any, fullUrl.slice(protoLen))) return true;
  return false;
}

function _cidrToMask(bitCount) {
  var mask = [];
  for (var i = 0; i < 4; i++) {
    var n = Math.min(bitCount, 8);
    mask.push(256 - Math.pow(2, 8 - n));
    bitCount -= n;
  }
  return mask.join(".");
}

function _findProxy(urlMap, host, url, protoLen) {
  if (_checkPatterns(urlMap.white, host, url, protoLen)) return _proxyStr;
  if (_checkPatterns(urlMap.proxy, host, url, protoLen)) return _direct;
  return false;
}

function _findIP(host) {
  for (var i = 0; i < _ipCidr.length; i++) {
    var ipParts = _ipCidr[i].split("/");
    var ip = ipParts[0];
    var mask = _cidrToMask(parseInt(ipParts[1], 10));
    if (isInNet(dnsResolve(host), ip, mask)) return _direct;
  }
  return false;
}

function FindProxyForURL(url, host) {
  var prot = url.slice(0, 6);
  var proxyStr = null;

  if (prot === "http:/") {
    proxyStr = _findProxy(_httpMap, host, url, 7);
  } else if (prot === "https:") {
    proxyStr = _findProxy(_httpsMap, host, url, 8);
  }

  return proxyStr || _findIP(host) || _proxyStr;
}
