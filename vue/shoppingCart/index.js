const app = new Vue({
  el:"#app",
  data:{
    books:[
      {
        id:1,
        name:"深入理解计算机系统",
        price:109.80,
        count:1
      },
      {
        id:2,
        name:"算法导论",
        price:99.40,
        count:1
      },
      {
        id:3,
        name:"计算机网络",
        price:70.30,
        count:1
      },
      {
        id:4,
        name:"系统分析与设计",
        price:131.60,
        count:1
      }
    ]
  },
  filters:{
    showPrice(price) {
      return `¥${price.toFixed(2)}`;
    }
  },
  methods:{
    decrease(index) {
      this.books[index].count--;
    },
    increase(index) {
      this.books[index].count++;
    },
    removeElements(index) {
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPrice() {
      return this.books.reduce((prev,cur)=>{
        return cur.price*cur.count+prev;
      },0);
    }
  }
});