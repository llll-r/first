const app = new Vue({

    el: "#app",
    data: {
        books: [
            {
                id : "1",
                name: "<<编程珠玑>>",
                date: "2008-10-1",
                price: 39.00,
                count:1
            }, {
                id : "2",
                name: "<<代码大全>>",
                date: "2005-10-1",
                price: 80.00,
                count:1
            }, {
                id : "3",
                name: "<<编程世界>>",
                date: "2001-10-1",
                price: 39.00,
                count:1
            }, {
                id : "4",
                name: "<<编程艺术>>",
                date: "2006-10-1",
                price: 99.00,
                count:1
           } 
        ]
    },
    methods: {
        // getFinalPrice(price) {
        //     return "￥"+price.toFixed(2)
        // },
        del(id) {
            
        },
        increase(index) {
            this.books[index].count++
        },
        decrease(index) {
            this.books[index].count--
        },
        remove(index) {
            this.books.splice(index,1)
            
        }
    },
    computed: {
        totalPrice() {
            // let totalPrice = 0
            // for (let i = 0; i < this.books.length; i++)
            // {
            //     totalPrice +=this.books[i].price*this.books[i].count
            // }    
            // this.books.forEach(item => {
            //     totalPrice += item.count*item.price
            // });

          return this.books.reduce((t, l)=>{
               return t+ l.price*l.count
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return "￥"+price.toFixed(2)
        }
    }
})