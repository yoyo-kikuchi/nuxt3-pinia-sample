import { useAddressSetupStore, Address } from "./addressSetupStore";

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

export const useSampleSetupStore = defineStore("sampleSetupStore", () => {
  const initialState: State = {
    count: 0,
    firstName: "太郎",
    lastName: "山田",
    histories: [],
  };

  const count = ref<number>(initialState.count);
  const firstName = ref<string | null>(initialState.firstName);
  const lastName = ref<string | null>(initialState.lastName);
  const histories = reactive<History[]>(initialState.histories);

  const fullName = computed((): string => {
    return lastName.value + "" + firstName.value;
  });

  const fullAddress = computed(() => {
    const store = useAddressSetupStore();
    return store.fullAddress;
  });

  const address = computed(() => {
    const store = useAddressSetupStore();
    return store;
  });

  function changeFirstName() {
    firstName.value = "花子";
  }

  function addHistory() {
    const date = new Date();
    const Y = date.getFullYear();
    const M = ("00" + (date.getMonth() + 1)).slice(-2);
    const D = ("00" + date.getDate()).slice(-2);
    const H = ("00" + date.getHours()).slice(-2);
    const m = ("00" + date.getMinutes()).slice(-2);
    const s = ("00" + date.getSeconds()).slice(-2);
    const history: History = {
      id: count.value++,
      value: Y + "-" + M + "-" + D + " " + H + ":" + m + ":" + s,
    };
    histories.push(history);
  }

  function changeAddress(val: Address) {
    const store = useAddressSetupStore();
    store.$patch({
      prefecture: val.prefecture,
      city: val.city,
      town: val.town,
    });
  }

  function $reset(): void {
    const store = useAddressSetupStore();
    count.value = initialState.count;
    firstName.value = initialState.firstName;
    lastName.value = initialState.lastName;
    histories.splice(0);
    console.log(histories);
    store.$reset();
  }

  return {
    firstName,
    lastName,
    fullName,
    changeFirstName,
    histories,
    addHistory,
    fullAddress,
    changeAddress,
    address,
    $reset,
  };
});
