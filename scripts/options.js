new Vue({
  el: '#app',
  data() {
    return {
      items: []
    };
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
