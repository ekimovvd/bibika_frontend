import { Component, Vue } from "nuxt-property-decorator";
import { COMPONENT_NAME } from "./attributes";

import HomeHeader from "../components/Header/component";
import HomeSearch from "../components/Search/component";
import HomeFilter from "../components/Filter/component";
import HomeCards from "../components/Cards/component";

@Component({
  name: COMPONENT_NAME,
  components: {
    HomeHeader,
    HomeSearch,
    HomeFilter,
    HomeCards,
  },
})
export default class Home extends Vue {}
