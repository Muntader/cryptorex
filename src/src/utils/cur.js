export default function (Vue) {

    Vue.cur = {

        get() {
            let get = localStorage.getItem('cur');

            if(typeof(get) !== "undefined") {
                return localStorage.getItem('cur');
            }else {
                return 'USD'
            }

        },

        update(cur) {
            localStorage.setItem("cur", cur);
        }

    },

        // url global
        Object.defineProperties(Vue.prototype, {
            $cur: {
                get: () => {
                    return Vue.cur;
                }
            }
        });
}