import { useAddressStore, Address } from "./addressStore";

interface History {
  id: number;
  value: string;
}

interface State {
  count: number;
  firstName: string | null;
  lastName: string | null;
  histories: History[];
}

export const useSampleStore = defineStore("sampleStore", {
  state: (): State => ({
    count: 0,
    firstName: "太郎",
    lastName: "山田",
    histories: [],
  }),
  getters: {
    fullName: (state): string => {
      return state.lastName + "" + state.firstName;
    },
    address: () => {
      const store = useAddressStore();
      return store.address;
    },
    fullAddress: () => {
      const store = useAddressStore();
      return store.fullAddress;
    },
  },
  actions: {
    changeFirstName() {
      this.firstName = "花子";
    },
    addHistory() {
      const date = new Date();
      const Y = date.getFullYear();
      const M = ("00" + (date.getMonth() + 1)).slice(-2);
      const D = ("00" + date.getDate()).slice(-2);
      const H = ("00" + date.getHours()).slice(-2);
      const m = ("00" + date.getMinutes()).slice(-2);
      const s = ("00" + date.getSeconds()).slice(-2);
      const history: History = {
        id: this.count++,
        value: Y + "-" + M + "-" + D + " " + H + ":" + m + ":" + s,
      };
      this.histories.push(history);
    },
    changeAddress(val: Address) {
      const store = useAddressStore();
      store.$patch({
        address: val,
      });
    },
    reset() {
      const store = useAddressStore();
      this.$reset();
      store.$reset();
    },
  },
});
