const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao Vue!',
        srcImg:"https://thumbs.dreamstime.com/b/programmatore-frustrato-un-con-gli-occhiali-sta-seduto-su-portatile-e-guarda-la-telecamera-delusione-concetto-di-fallimento-171235776.jpg",
        altImg:"desperate"

      }
    }
  }).mount('#container')