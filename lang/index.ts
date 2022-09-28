import { createI18n } from "vue-i18n";
import en from "./en";
import ja from "./ja";
const messages = {
  en,
  ja,
};
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") || "en",
  messages,
});

export default i18n;
