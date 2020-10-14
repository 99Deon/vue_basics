const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      // solution
      url: "https://www.vuemastery.com/",
      // solution
      inVentery: 8,
      sale: false,
      details: ["50% cotton", "30% wool", "20% polyster"],
      variants: [
        { id: 1, color: "red" },
        { id: 2, color: "green" },
        { id: 3, color: "yellow" },
      ],
    };
  },
});
