const BASE_URL_MAP = {
  //'dev': 'http://10.100.9.119:9200',
  'qb': 'http://10.100.9.17:9200',
  'qa': 'http://10.100.9.16:9200',
  'beta': 'https://meilly-api-beta.yingyinglicai.com',
  'prod': 'https://meilly-api.yingyinglicai.com',
}

window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});

//基于约定 如果访问地址为jenkins设置的port 说明是qa环境
export const isQaApi = window.location.host.includes('9.16')

export const isProdApi = window.location.host.includes('com') || window.location.host.includes('cn')

export const isBetaApi = window.location.host.includes('beta')

export const BASE_URL = function () {
  if (isQaApi) {
    return window.location.protocol + '//' + window.location.hostname + ':9200'
  } else if (isBetaApi) {
    return BASE_URL_MAP.beta
  } else if (isProdApi) {
    return BASE_URL_MAP.prod
  }
  return BASE_URL_MAP.prod
}()
