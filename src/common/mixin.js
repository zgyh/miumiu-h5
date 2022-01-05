import util from "../utils/util";
import { mapState } from "vuex";

export default {
  methods: {
    util() {
      return util;
    }
  },
  computed: {
    ...mapState(["isMiniProgram"]),
    ...mapState("user", ["user"]),
    isAdmin() {
      const admins = ["20176028", "20126028", "36570627"];
      return admins.includes(this.user.account_code);
    },
    isDirector() {
      return this.user.doctor_info.doctor_type === 1;
    }
  }
};
