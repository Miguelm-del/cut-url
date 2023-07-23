import { defineStore } from 'pinia';
import { Notify } from 'quasar';

export const useUrlsStore = defineStore('urls', {
  state: () => ({
    url: '',
  }),
  getters: {},
  actions: {
    createNewCutUrl(url: string) {
      this.url = url;
      Notify.create({
        type: 'positive',
        position: 'top-right',
        message: 'URL encurtada com sucesso!' + url,
      });
    },
  },
});
