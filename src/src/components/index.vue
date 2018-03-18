<template>

  <div class="home">

    <div class="columns  home__card">
      <div class="column home__live-price">

        <div @click="CHANGE_COIN(history_by,'ETH'); coin = 'ETH'" :class="{active_eth: coin === 'ETH'}" class="is-fullwidth home__live-price home__live-price--eth" >
            <div class="eth-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" viewBox="0 0 256 417" version="1.1" preserveAspectRatio="xMidYMid">
                <g>
                  <polygon fill="#03a9f4" points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32"/>
                  <polygon fill="#16b4fb" points="127.962 0 0 212.32 127.962 287.959 127.962 154.158"/>
                  <polygon fill="#03a9f4" points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866"/>
                  <polygon fill="#16b4fb" points="127.962 416.9052 127.962 312.1852 0 236.5852"/>
                  <polygon fill="#03a9f4" points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587"/>
                  <polygon fill="#16b4fb" points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588"/>
                </g>
              </svg>
            </div>
            <div class="details">
              <div class="price">
                <small>Ethereum</small><br>

                {{sym}} {{ live_eth}}</div>
            </div>
        </div>

        <div @click="CHANGE_COIN(history_by,'BTC'); coin = 'BTC'" :class="{active_btc: coin === 'BTC'}" class="is-fullwidth home__live-price home__live-price--btc" >
          <div class="btc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"   class=""><g><circle style="fill:#16B4FB" cx="256" cy="256" r="256" data-original="#2196F3" class="active-path" data-old_color="#16b4fb"/><path style="fill:#FAFAFA" d="M331.712,249.856C344.224,236.928,352,219.392,352,200c0-36.96-28.096-67.168-64-71.2V112  c0-8.832-7.168-16-16-16s-16,7.168-16,16v16h-32v-16c0-8.832-7.168-16-16-16s-16,7.168-16,16v16h-16c-8.832,0-16,7.168-16,16v224  c0,8.832,7.168,16,16,16h16v16c0,8.832,7.168,16,16,16s16-7.168,16-16v-16h32v16c0,8.832,7.168,16,16,16s16-7.168,16-16v-16h8  c39.68,0,72-32.288,72-72C368,285.344,353.28,262.336,331.712,249.856z M192,160h88c22.048,0,40,17.952,40,40s-17.952,40-40,40h-88  V160z M296,352H192v-80h88h16c22.048,0,40,17.952,40,40S318.048,352,296,352z" data-original="#FAFAFA" class=""/></g> </svg>
          </div>
          <div class="details">
            <div class="price">
              <small>Bitcoin</small><br>
              {{sym}} {{live_btc}}</div>
          </div>
        </div>

        <div @click="CHANGE_COIN(history_by,'XRP'); coin = 'XRP'" :class="{active_xrp: coin === 'XRP'}" class="is-fullwidth home__live-price home__live-price--xrp" >
          <div class="xrp-icon">

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1850 2000" width="100%"><defs><linearGradient id="a" x1="75" x2="1925" gradientUnits="userSpaceOnUse"><stop stop-color="#03a9f4"/><stop offset=".59" stop-color="#03a9f4"/><stop offset="1" stop-color="#03a9f4"/></linearGradient></defs><path d="M1297.93 53.81c-131.41 77.2-209.22 216.61-209.22 363.62 0 77.2 31 155 69.81 224.41 31 62 46.2 170.21-62 224.41-77.21 46.2-178.22 15.4-224.42-62-46.21-62-100.41-124-170.22-170.21-131.41-77.2-286.43-77.2-417.85 0S75 851 75 998.05s77.21 286.41 209 363.82c131.41 77.2 286.43 77.2 417.85 0 69.81-38.8 124-100.4 162.42-170.21 31-54.2 116.21-124 224.42-62 77.21 46.2 100.41 147.21 62 224.41-38.8 69.8-62 147.21-62 224.41 0 147.21 77.21 286.41 209.22 363.62 131.41 77.2 286.43 77.2 417.85 0S1925 1725.49 1925 1578.48s-77.41-286.41-209.22-363.82c-69.81-38.8-147.22-54.2-232.23-54.2-69.81 0-162.42-46.2-162.42-162.41 0-93 69.81-162.41 162.42-162.41 77.21 0 162.42-15.4 232.23-54.2C1847.19 704.24 1925 564.83 1925 417.83s-77.41-286.41-209.22-363.62c-62-38.8-139.22-54.2-209-54.2-69.41-.4-147.22 15.4-208.82 53.8" transform="translate(-75)" fill="url(#a)"/></svg>
          </div>
          <div class="details">
            <div class="price">
              <small>Ripple</small><br>
              {{sym}} {{live_xrp}}</div>
          </div>
        </div           >
      </div>

     <div class="column is-three-fifths">

      <div class="home__btn-group">
      <button class="button" @click="CHANGE_COIN('historical_hourly', coin); history_by = 'historical_hourly'; active_data_button = 1" :class="{active: active_data_button ===1 }">{{$t('hourly')}}</button>
      <button class="button" @click="CHANGE_COIN('historical_daily', coin); history_by = 'historical_daily'; active_data_button = 2" :class="{active: active_data_button ===2 }">{{$t('daily')}}</button>
      <button class="button" @click="CHANGE_COIN('historical_weekly', coin); history_by = 'historical_weekly'; active_data_button = 3" :class="{active: active_data_button ===3 }">{{$t('weekly')}}</button>
      <button class="button" @click="CHANGE_COIN('historical_monthly', coin); history_by = 'historical_monthly'; active_data_button = 4" :class="{active: active_data_button ===4 }">{{$t('monthly')}}</button>
      <button class="button" @click="CHANGE_COIN('historical_yearly', coin); history_by = 'historical_yearly'; active_data_button = 5" :class="{active: active_data_button ===5 }">{{$t('yearly')}}</button>
      </div>

      <historical :data="historical" :options="options"></historical>

    </div>

    </div>

    <div class="columns is-fullwidth home__table">

      <table class="table">
        <thead>
        <tr>
          <th>{{$t('market')}}</th>
          <th>{{$t('price')}}</th>
          <th>{{$t('open')}} ({{$t('h')}})</th>
          <th>{{$t('volume')}} ({{$t('h')}})</th>
          <th>{{$t('change')}} ({{$t('h')}}) </th>
        </tr>
        </thead>
        <tfoot>
        </tfoot>

        <tbody>

        <tr v-for="(item, index) in exchange_data['Exchanges']">
          <td>{{item.MARKET}}</td>
          <td>{{sym}} {{item.PRICE.toFixed(2)}}</td>
          <td>{{sym}} {{item.OPEN24HOUR.toFixed(2)}}</td>
          <td>{{item.VOLUME24HOUR.toFixed(3)}}</td>
          <td>{{item.CHANGE24HOUR.toFixed(3)}}</td>
        </tr>
        </tbody>

      </table>

    </div>

  </div>

</template>

<script>
    import historical from "./charts/chart.js";

    import { mapState } from "vuex";
    export default {
        components: {
            "historical": historical,
        },
        data() {
            return {
                historical: null,

                options: {
                    scales: {
                        yAxes: [
                            {
                                id: "Daily",
                                type: "linear",
                                position: "left",
                                ticks: {
                                    beginAtZero: false,
                                    display: true,
                                    callback: function(value) {
                                        var price =  value > 999 ? (value/1000).toFixed(1) + 'k' : value
                                        return price;
                                    }
                                },
                                gridLines: {
                                    display: false
                                }
                            },
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        zAxes: [
                            {
                                ticks: {
                                    display: false
                                }
                            }
                        ]
                    },
                    legend: {
                        display: false
                    },
                    responsive: true,
                    maintainAspectRatio: false
                },

                live_eth: null,
                live_btc: null,
                live_xrp: null,
                coin: 'ETH',
                history_by: 'historical_hourly',
                active_data_button: 1,
            };
        },

        computed: mapState({
            historical_data: state => state.home.historical_data,
            live_price_data: state => state.home.live_price_data,
            exchange_data: state => state.home.exchange_data,
            cur: state => state.home.cur,
            sym: state => state.home.sym
    }),

        watch: {
            historical_data: {
                handler(val){
                    var bar_ctx = document.getElementById('line-chart').getContext('2d');
                    var purple_orange_gradient = bar_ctx.createLinearGradient(0, 0, 0, 600);
                    purple_orange_gradient.addColorStop(0, 'rgba(3, 169, 244, 0.70)');
                    purple_orange_gradient.addColorStop(1, 'rgba(3, 169, 244, 0.1)');
                    this.historical = {
                        perecent: val.data,
                        all: 0,
                        labels: val.labels,
                        datasets: [
                            {
                                label: "Price",
                                yAxisID: "Daily",
                                backgroundColor: purple_orange_gradient,
                                pointBackgroundColor: "#0073ff",
                                borderWidth: 2,
                                borderColor: "#2196F3",
                                pointBorderColor: "#fff",
                                //Data to be represented on y-axis
                                data: val.data
                            }
                        ]
                    }
                },
                deep: true
            },
            live_price_data() {
                this.live_eth = this.live_price_data['ETH'][this.cur];
                this.live_btc = this.live_price_data['BTC'][this.cur];
                this.live_xrp = this.live_price_data['XRP'][this.cur];
            },
            cur() {
                this.$store.dispatch("GET_HISTORICAL", {data:this.$url.get('historical_hourly', this.coin, this.cur), sort_by: 'historical_hourly' } );
                this.$store.dispatch("GET_LIVE_PRICE", this.$url.get('live_price', 'BTC,ETH,XRP', this.cur));
                this.$store.dispatch("GET_EXCHANGE", this.$url.get('exchange', this.coin, this.cur));
            }
        },

        mounted() {
            this.$store.dispatch("GET_HISTORICAL", {data:this.$url.get('historical_hourly', this.coin, this.cur), sort_by: 'historical_hourly' } );
            this.$store.dispatch("GET_LIVE_PRICE", this.$url.get('live_price', 'BTC,ETH,XRP', this.cur));
            this.$store.dispatch("GET_EXCHANGE", this.$url.get('exchange', this.coin, this.cur));
            setInterval( () => {
                this.$store.dispatch("GET_LIVE_PRICE", this.$url.get('live_price', 'BTC,ETH,XRP', this.cur));
            }, 60000);
        },

        methods: {

            CHANGE_COIN(by, name) {
                this.$store.dispatch("GET_HISTORICAL", {data: this.$url.get(by, name, this.cur), sort_by: by});
            }
        }
    };

</script>