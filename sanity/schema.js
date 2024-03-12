import generic from "./schemas/generic";
import home from "./schemas/home";
import indicator from "./schemas/indicator";
import indicatorSimple from "./schemas/indicator-simple";
import person from "./schemas/person";

export const schema = {
  types: [home, indicator, indicatorSimple, person],
};
