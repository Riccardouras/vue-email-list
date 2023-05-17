const { createApp } = Vue
createApp({
  data() {
    return {
      emails: []
    };
  },
  methods: {
    start() {
      for (i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then(res => {
            this.emails.push(res.data.response)
          })
      }
    }
  },
  mounted() {
    this.start()
  }
}).mount('#app');



