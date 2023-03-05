import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    // ssr: true,
    components,
    directives,
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary900: "#002051",
            primary800: "#00317a",
            primary700: "#0041a3",
            primary600: "#0049b7",
            primary: "#0052cc",
            primary400: "#1963d1",
            primary300: "#4c85dB",
            primary200: "#7fa8e5",
            primary100: "#b2cbef",
            primary50: "#edf3fd",
            secondary900: "#5e420b",
            secondary800: "#a57313",
            secondary700: "#bc8416",
            secondary600: "#d49419",
            secondary: "#eca51c",
            secondary400: "#edae32",
            secondary300: "#f1c060",
            secondary200: "#f5d28d",
            secondary100: "#f9e4ba",
            secondary50: "#fbedd1",
            error: "#d5362d",
            success: "#1c95ec",
            // Supporting
            red: "#f05046",
            yellow: "#e6d119",
            lightBlue: "#15b3d6",
            paleRed: "#ffe7e7",
            // Background
            backgroundWhite: "#ffffff",
            backgroundGray: "#eff2f5",
            // Surface
            white: "#ffffff",
            snackbar: "#0f1a54",
            divider: "#e8e8e8",
            lightGray: "#f5f6f8",
            darkGray: "#c4c4c6",
            // Text
            textHigh: "#080a15",
            textMedium: "#6f707d",
            textLow: "#9495a0",
            // Foreground
            navy: "#002052",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
