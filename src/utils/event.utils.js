import { EventEmitter } from "events";

class event extends EventEmitter {
  popUpSideNavbar(data) {
    this.emit("SideNavbar", data);
  }
  notifSideNavbar(clb) {
    this.on("SideNavbar", clb);
  }
}

export default new event();
