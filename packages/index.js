import { components } from "./output";

export default {
  install(Vue, options) {
    const keys = Object.keys(components);
    keys.forEach((k) => {
      Vue.component(k, components[k]);
    });
  },
};
