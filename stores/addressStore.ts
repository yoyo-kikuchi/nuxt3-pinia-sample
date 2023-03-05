export interface Address {
  prefecture: string | null;
  city: string | null;
  town: string | null;
}

interface State {
  address: Address;
}

export const useAddressStore = defineStore("addressStore", {
  state: (): State => ({
    address: {
      prefecture: "東京都",
      city: null,
      town: null,
    },
  }),
  getters: {
    fullAddress: (state): string => {
      const city = state.address.city ? state.address.city : "";
      const town = state.address.town ? state.address.town : "";
      return state.address.prefecture + city + town;
    },
  },
  actions: {
    Town() {
      this.address.town = "北町";
    },
  },
});
