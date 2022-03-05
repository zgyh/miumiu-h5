import util from "../utils/util";
import { mapState } from "vuex";

export default {
  methods: {
    util() {
      return util;
    }
  },
  computed: {
    ...mapState(["isMiniProgram"])
  }
};
