// Child Component
var counterButon = Vue.extend({
    template: '<span>{{counter}}個<button v-on:click="addToCart">追加</button></span>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        addToCart: function () {
            this.counter += 1
            this.$emit('increment')
        }
    }
})

// Parent Component
new Vue({
    // Vueインスタンスの適用(el)とUIのデータ定義(data)
    el: '#fruits-counter',
    components:{
        'counter-button': counterButon
    },
    data: {
        total: 0,
        fruits: [
            {name: '梨'},
            {name: 'リンゴ'}
        ]
    },
    methods: {
        incrementCartStatus: function () {
            this.total += 1
        }
    }
})
