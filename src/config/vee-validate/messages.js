import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";

configure({
  generateMessage: localize("ka", {
    messages: {
      required: `ველი აუცილებელია`,
      min: `ველი უნდა შეიცავდეს მინიმუმ 0:{limit} სიმბოლოს`,
      max: `ველი უნდა შეიცავდეს მაქსიმუმ 0:{limit} სიმბოლოს`,
    },
  }),
});
