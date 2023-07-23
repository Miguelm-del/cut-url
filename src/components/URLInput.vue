<script setup lang="ts">
import { ref, watch } from 'vue';
import { useUrlsStore } from 'src/stores/urls';

const props = defineProps({
  url: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update-url']);

const store = useUrlsStore();

const text = ref(props.url);

const createNewCutUrl = () => {
  store.createNewCutUrl(text.value);
};

watch(text, () => {
  emit('update-url', text.value);
});
</script>

<template>
  <div class="q-ma-md">
    <div class="row justify-center">
      <div class="col-9">
        <q-input
          color="deep-purple-8"
          outlined
          v-model="text"
          placeholder="Preencha a URL que deseja encurtar"
          clearable
          :rules="[(val) => !!val || 'Preencha a URL que deseja encurtar']"
          lazy-rules
        />
      </div>
      <div class="col-2 q-ml-sm">
        <q-btn
          color="white"
          text-color="primary"
          label="Gerar"
          size="lg"
          @click="createNewCutUrl"
          :disable="!text"
        />
      </div>
    </div>
  </div>
</template>
