import { defineStore } from "pinia";

export const useOrderStore = defineStore("order", {
  state: () => {
    return {
      order: {
        items: [],
        address: "",
        delivery: false,
      },
    };
  },
  actions: {
    addOrderItem(item) {
      this.order.items.push(item);
      this.order.id++;
    },
    removeOrderItem(id) {
      this.order.items = this.order.items.filter((object) => {
        return object.id !== id;
      });
      console.log(id);
    },

    addAddress(address) {
      this.order.address = address;
    },

    addTime(time) {
      this.order.time = time;
    },
    changeDelivery() {
      if (this.order.delivery === true) {
        this.order.delivery = false;
      } else {
        this.order.delivery = true;
      }
    },
  },
  getters: {},
});