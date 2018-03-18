<template>

    <div class="news">

        <div class="column is-fullwidth is-hidden-mobile">

            <div style="float: right;">
                <a class="navbar-item" :class="{'is-active': category === 'ALL'}" @click="GET_BY_CATEGORY('ALL'); category = 'ALL'">
                    ALL
                </a>
                <a class="navbar-item" v-for="(item, index) in news_providers" :class="{'is-active': category === item.key}" @click="GET_BY_CATEGORY(item.key); category = item.key">
                    {{item.name}}
                </a>
            </div>
        </div>

        <div class="column is-fullwidth is-hidden-tablet " style="height: 90px;">
            <div class="dropdown is-active is-right" style="float:  right;margin:  10px;">
                <div class="dropdown-trigger">
                    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu" @click="show_dropdown = !show_dropdown">
                        <span>{{category}}</span>
                    </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu" role="menu" v-if="show_dropdown">
                    <div class="dropdown-content">
                        <a class="navbar-item" v-for="(item, index) in news_providers" @click="GET_BY_CATEGORY(item.key); category = item.key; show_dropdown = false ">
                            {{item.name}}
                        </a>
                    </div>
                </div>
            </div>

        </div>

        <div class="columns is-multiline is-mobile" >

            <div class="column is-half-mobile is-one-third-tablet news__item" v-for="(item, index) in news_data" @click="CHANGE_DATE(index)">
                <div class="news__item--img">
                    <transition name="fade">
                      <img :src="item.imageurl" alt="" width="100%" @load="onLoad">
                    </transition>
                </div>
                <strong><p>{{item.title}}</p>
                </strong>
            </div>

        </div>


        <div class="column news__details is-hidden-mobile" v-if="show_item != null">

            <div class="is-fullwidth news__details--img">
                <img :src="news_data[show_item].imageurl" :alt="news_data[show_item].title" width="100%">
            </div>

            <div class="news__details--info">
                <h5><strong>{{news_data[show_item].title}}</strong></h5>
                <small><strong>Publish Date: </strong>{{news_data[show_item].published_on}}</small>
                <p v-html="news_data[show_item].body "></p>
                <a :href="news_data[show_item].guid">Read More</a>

            </div>
        </div>

        <div class="column news__details news__details_mobile is-hidden-tablet" v-if="show_item != null">
            <div class="exit-button" @click="show_item = null">

                <svg version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                    <circle style="fill:#E21B1B;" cx="255.999" cy="255.999" r="255.999"/>
                    <g>

                            <rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="24" height="271.988"/>

                            <rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="24"/>
                    </g>
                </svg>

            </div>

            <div class="is-fullwidth news__details--img">
                <img :src="news_data[show_item].imageurl" :alt="news_data[show_item].title" width="100%">
            </div>

            <div class="news__details--info">
                <h5><strong>{{news_data[show_item].title}}</strong></h5>
                <small><strong>Publish Date: </strong> {{news_data[show_item].published_on}}</small>
                <p v-html="news_data[show_item].body "></p>
                <a :href="news_data[show_item].guid">Read More</a>
            </div>
        </div>

        <div class="shadow" v-if="show_item != null"  @click="show_item = null">

            <div class="exit-button" @click="show_item = null">

                <svg version="1.1" width="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve">
                    <circle style="fill:#E21B1B;" cx="255.999" cy="255.999" r="255.999"/>
                    <g>

                            <rect x="244.002" y="120.008" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0397 256.0022)" style="fill:#FFFFFF;" width="24" height="271.988"/>

                            <rect x="120.008" y="244.007" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -106.0428 256.0035)" style="fill:#FFFFFF;" width="271.988" height="24"/>
                    </g>
                </svg>

            </div>

        </div>
    </div>

</template>

<script>

    import { mapState } from "vuex";
    export default {
        data() {
            return {
                show_item: null,
                category: 'ALL',
                item_data: [],
                onLoad: false,
                show_dropdown: false
            }
        },

        computed: mapState({
            news_data: state => state.home.news_data,
            news_providers: state => state.home.news_providers,

        }),


        mounted() {
            this.$store.dispatch("GET_NEWS", this.$url.get('news_all'));
            this.$store.dispatch("GET_PROVIDERS", this.$url.get('news_providers')  );
        },

        methods: {

            GET_BY_CATEGORY(cat) {
                if(cat === 'ALL') {
                    this.$store.dispatch("GET_NEWS", this.$url.get('news_all'));
                }else {
                    this.$store.dispatch("GET_NEWS", this.$url.get('news', cat));
                }
            },

            CHANGE_DATE(index) {
                this.show_item = index;
                var h = new Date(this.news_data[index].published_on * 1000);
                this.news_data[index].published_on = h.toLocaleTimeString();
            }
        }
    };

</script>