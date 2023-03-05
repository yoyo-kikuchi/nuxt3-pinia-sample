<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <span>fullName: {{ store.fullName }}</span>
      </v-row>
      <v-row>
        <span>firstName: {{ firstName }}</span>
      </v-row>
      <v-row>
        <span>lastName: {{ lastName }}</span>
      </v-row>
      <v-row>
        <span>prefecture: {{ address.prefecture }}</span>
      </v-row>
      <v-row>
        <span>city: {{ address.city }}</span>
      </v-row>
      <v-row>
        <span>town: {{ address.town }}</span>
      </v-row>
      <v-row>
        <span>fullAddress: {{ store.fullAddress }}</span>
      </v-row>
      <v-row>
        <v-btn @click="onSubmit">名前変更</v-btn>
      </v-row>
      <v-row>
        <v-btn @click="onPatch">住所変更</v-btn>
      </v-row>
      <v-row>
        <v-btn @click="onChangeState">苗字変更</v-btn>
      </v-row>
      <v-row>
        <v-btn @click="onReset" color="red">リセット</v-btn>
      </v-row>
      <v-row v-for="v in histories" :key="v.id">
        <p>変更履歴: {{ v.value }}</p>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";

const store = useSampleStore();
const { firstName, lastName, address, histories } = storeToRefs(store);

const onSubmit = () => {
  store.changeFirstName();
  store.addHistory();
};

const onReset = () => {
  store.reset();
};

const onPatch = () => {
  store.addHistory();
  store.changeAddress({
    prefecture: "東京都",
    city: "府中市",
    town: "大野",
  });
};

const onChangeState = () => {
  store.addHistory();
  store.$state.lastName = "林";
};
</script>
