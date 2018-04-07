import { nest } from "recompose";
import Notifications from "./Notifications";
import User from "./User";

export default nest(Notifications, User);
