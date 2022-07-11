import { Component, Vue } from "nuxt-property-decorator";

import { COMPONENT_NAME } from "./attributes";
import { CardsInterface } from "./interfaces";

import HomeCard from "../Card/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeCard,
  },
})
export default class HomeCards extends Vue {
  CARDS: Array<CardsInterface> = [
    {
      id: 0,
      name: "Машина #0",
    },
    {
      id: 1,
      name: "Машина #1",
    },
    {
      id: 2,
      name: "Машина #2",
    },
    {
      id: 3,
      name: "Машина #3",
    },
    {
      id: 4,
      name: "Машина #4",
    },
  ];
}
