<template>
  <q-page class="justify-center items-center">
    <div class="text-h3 text-center text-bold q-mt-md text-primary">
      CutUrl.go
    </div>
    <div
      class="text-subtitle2 text-center text-bold q-px-md q-mt-md text-secondary"
    >
      Com o nosso serviço de encurtamento de URL, você pode reduzir URLs longas
      em links curtos e gerenciáveis ​​de forma rápida e fácil.
    </div>

    <URLInput :url="url" @update-url="updateUrl" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import URLInput from 'src/components/URLInput.vue';

const url = ref('');

const updateUrl = (newUrl: string) => {
  url.value = newUrl;
};
</script>
