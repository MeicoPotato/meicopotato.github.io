const App = {
  setup() {
    const state = Vue.reactive({
      zoomScale: 1, // Represents the scale of the zoom
      // ... other state properties
    });

    const checkScroll = () => {
      const maxScale = 5; // Maximum scale value when fully zoomed in
      const scrollRange = 800; // Range of scroll over which the zoom effect takes place

      // Update the zoom scale based on the scroll position
      const newScale = 1 + Math.min(window.scrollY / scrollRange, maxScale);
      state.zoomScale = newScale;
    };

    Vue.onMounted(() => {
      window.addEventListener('scroll', checkScroll);
    });

    Vue.onBeforeUnmount(() => {
      window.removeEventListener('scroll', checkScroll);
    });

    return { state };
  }
};

Vue.createApp(App).mount('#app');

