const items = [
    {
        name: 'Pencil',
        price: 300,
        quantity: 0
    },
    {
        name: 'Note',
        price: 400,
        quantity: 0
    },
    {
        name: 'Eraser',
        price: 500,
        quantity: 0
    }
]
// Vueインスタンス
let vm = new Vue({
    // Vueインスタンスの適用(el)とUIのデータ定義(data)
    el: '#app',
    data: {
        items: items
    },
    filters: {
        numberWithDelimiter: function (value) {
            if (!value) {
                return '0'
            }
            return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
        }
    },
    methods: {
        doBuy: function () {
            alert(this.totalPriceWithTax + '円のお買い上げ!')
            this.items.forEach(function (item) {
                item.quantity = 0
            })
        }
    },
    computed: {
        totalPrice: function () {
            return this.items.reduce(function (sum, item) {
                return sum + (item.price * item.quantity)
            }, 0)
        },
        totalPriceWithTax: function () {
            return Math.floor(this.totalPrice * 1.08)
        },
        canBuy: function () {
            return this.totalPrice >= 1000 // 1000円以上なら購入可能
        },
        errorMessageStyle: function () {
            // falseのとき赤く表示
            return {
                border: this.canBuy ? '' : '1px solid red',
                color: this.canBuy ? '' : 'red'
            }
        }
    }
})
