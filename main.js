const app = Vue.createApp({
  data() {
    return {
      inStock: false,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      // solution
      url: "https://www.vuemastery.com/",
      // solution
      inVentery: 8,
      sale: false,
      details: ["50% cotton", "30% wool", "20% polyster"],
      variants: [
        { id: 1, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      cart: 0,
    };
  },

  methods: {
    deleteCart() {
      if (this.cart == 0) {
        this.cart = 0;
      } else this.cart -= 1;
    },
    UpdateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
