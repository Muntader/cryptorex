export default function (Vue) {

    Vue.url = {

        get(url,coin,cur) {

            let url_obj = {
                'historical_hourly': 'https://min-api.cryptocompare.com/data/histominute?aggregate=1&fsym='+ coin +'&tsym='+ cur  + '&limit=20',
                'historical_daily': 'https://min-api.cryptocompare.com/data/histominute?aggregate=5&fsym='+ coin +'&tsym='+ cur ,
                'historical_weekly': 'https://min-api.cryptocompare.com/data/histoday?aggregate=2&fsym='+ coin +'&tsym='+ cur ,
                'historical_monthly': 'https://min-api.cryptocompare.com/data/histohour?aggregate=4&fsym='+ coin +'&tsym='+ cur ,
                'historical_yearly': 'https://min-api.cryptocompare.com/data/histoday?aggregate=12&fsym='+ coin +'&tsym='+ cur,
                'live_price': 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='+ coin +'&tsyms='+ cur,
                'exchange': 'https://min-api.cryptocompare.com/data/top/exchanges/full?fsym='+ coin +'&tsym='+ cur + '&limit=10',
                'news': 'https://min-api.cryptocompare.com/data/news/?lang=EN&feeds='+ coin,
                'news_all': 'https://min-api.cryptocompare.com/data/news/?lang=EN',
                'news_providers': 'https://min-api.cryptocompare.com/data/news/providers'
            };

            return url_obj[url];
        }

    },

    // url global
    Object.defineProperties(Vue.prototype, {
        $url: {
            get: () => {
                return Vue.url;
            }
        }
    });
}