export interface Address {
  prefecture: string | null;
  city: string | null;
  town: string | null;
}

export interface State {
  prefecture: string | null;
  city: string | null;
  town: string | null;
}

export const useAddressSetupStore = defineStore("AddressSetupStore", () => {
  const initialState: State = {
    prefecture: "東京都",
    city: null,
    town: null,
  };

  const prefecture = ref<string | null>(initialState.prefecture);
  const city = ref<string | null>(initialState.city);
  const town = ref<string | null>(initialState.town);

  const fullAddress = computed((): string => {
    const _city = city.value ? city.value : "";
    const _town = town.value ? town.value : "";
    return prefecture.value + _city + _town;
  });

  function Town() {
    town.value = "北町";
  }

  function $reset(): void {
    prefecture.value = initialState.prefecture;
    city.value = initialState.city;
    town.value = initialState.town;
  }

  return {
    prefecture,
    city,
    town,
    fullAddress,
    Town,
    $reset,
  };
});
