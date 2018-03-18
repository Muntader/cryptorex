import Vue from 'vue';

const module = {
    state: {
        historical_data: { 'data': [], 'labels':  []},
        live_price_data: [],
        exchange_data: [],
        news_data: [],
        news_providers: [],
        cur: 'USD',
        sym: '$'
    },
    actions: {

        async GET_HISTORICAL({ commit }, {data, sort_by}) {
            axios.get(data).then(res => {
                if(res.data.Response == 'Success') {
                    commit('SET_HISTORICAL', {data: res.data, by: sort_by})
                }

            }, error => {

            })
        },

        async GET_LIVE_PRICE({ commit }, url) {
            axios.get(url).then(res => {
                if(res.status == 200) {
                    commit('SET_LIVE_PRICE', res.data)
                }

            }, error => {

            })
        },

        async GET_EXCHANGE({ commit }, url) {
            axios.get(url).then(res => {
                if(res.data.Response === 'Success') {
                    commit('SET_EXCHANGE', res.data.Data)
                }

            }, error => {

            })
        },

        async GET_NEWS({ commit }, url) {
            axios.get(url).then(res => {
                if(res.status === 200) {
                    commit('SET_NEWS', res.data)
                }

            }, error => {

            })
        },

        async GET_PROVIDERS({ commit }, url) {
            axios.get(url).then(res => {
                if(res.status === 200) {
                    commit('SET_PROVIDERS', res.data)
                }

            }, error => {

            })
        },

    },
    mutations: {

        SET_HISTORICAL(state, data) {


            state.historical_data =  { 'data': [], 'labels':  []};

            if(data.by === 'historical_hourly' || data.by === 'historical_daily') {
                data.data.Data.map(function (value, index) {
                    state.historical_data['data'].push(data.data.Data[index].high);

                    var d = new Date(data.data.Data[index].time * 1000);
                    state.historical_data['labels'].push( d.toLocaleTimeString() );
                });
            } else {
                data.data.Data.map(function (value, index) {
                    state.historical_data['data'].push(data.data.Data[index].high);

                    var w = new Date(data.data.Data[index].time * 1000);
                    state.historical_data['labels'].push(w.toLocaleDateString());
                });
            }
        },

        SET_LIVE_PRICE(state, data) {
            state.live_price_data = data;
        },
        SET_EXCHANGE(state, data) {
            state.exchange_data = data;
        },
        SET_NEWS(state, data) {
            state.news_data = data;
        },
        SET_PROVIDERS(state, data) {
            state.news_providers = data;
        },

        GET_CUR(state) {
            let get = localStorage.getItem('cur');
            if(get !== null) {
                var data =  JSON.parse(localStorage.getItem('cur'))
                state.sym = data['sym'];
                state.cur = data['cur'];
            }else {
                state.sym = '$';
            }
        },

        SET_CUR(state, cur) {
            localStorage.setItem("cur", JSON.stringify(cur));
        },
    },
    getters: {}
};
export default module;