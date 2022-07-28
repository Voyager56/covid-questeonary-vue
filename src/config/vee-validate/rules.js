import { defineRule } from "vee-validate";
import { required, min, max } from "@vee-validate/rules";

defineRule("redberry_email", (mail) => {
  if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@redberry.ge/.test(mail)) {
    return "გთხვოთ გამოიყენოთ რედბერის იმეილი (email@redberry.ge)";
  }
  return true;
});
defineRule("min", min);
defineRule("max", max);
defineRule("required", required);
