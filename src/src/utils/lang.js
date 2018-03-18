import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {

    en: {
        market_cap: 'MARKET CAP',
        news: 'NEWS',
        hourly: 'Hourly',
        daily: 'Daily',
        weekly: 'Weekly',
        monthly: 'Monthly',
        yearly: 'Yearly',
        market: 'Market',
        price: 'Price',
        open: 'Open',
        volume: 'Volume',
        change: 'Change',
        h: '24H'
    },

    ar: {
        market_cap: 'قيمة السوقية',
        news: 'الاخبار',
        hourly: 'الحالي',
        daily: 'اليومي',
        weekly: 'الاسبوعي',
        monthly: 'الشهري',
        yearly: 'السنوي',
        market: 'السوق',
        price: 'السعر',
        open: 'الفتتاح',
        volume: 'المقدار',
        change: 'التغيير',
        h: '24س'
    },
}
// Create VueI18n instance with options
export default new VueI18n({
    locale: 'en', // set locale
    messages, // set locale messages
})