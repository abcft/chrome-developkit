new Vue({
  el: '#app',
  data() {
    return {
      items: []
    };
  },
  mounted() {
    chrome.storage.sync.get('chrome-developkit.domains', (e) => {
      var items = e['chrome-developkit.domains'];
      this.items = items || [];
    });
  },
  methods: {
    add() {
      this.items.push({ debug: true, enable: true });
    },
    del(inIndex) {
      var len = this.items.length;
      if (len > 1) {
        this.items.splice(inIndex, 1);
      }
    },
    save() {
      chrome.storage.sync.set({ 'chrome-developkit.domains': this.items });
    }
  }
});
