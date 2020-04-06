
    function FindProxyForURL(url, host) {
      if (host.indexOf('getmalus.com') > -1) {
        return 'DIRECT;';
      } else {
        return 'PROXY 127.0.0.1:12307; DIRECT;'
      }
    }
    