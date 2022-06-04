import { getUserRole } from "../../api/User/tokenValidator.js";
import { StudentSidebar } from "./student.jsx";
import { SupervisorSidebar } from "./supervisor.jsx";
import { AdminSidebar } from "./admin.jsx";

export const Sidebar = () => {
  console.log(getUserRole());
  if (getUserRole().toUpperCase() === "STUDENT") {
    return <StudentSidebar />;
  } else if (getUserRole().toUpperCase() === "SUPERVISOR") {
    return <SupervisorSidebar />;
  } else if (getUserRole().toUpperCase() === "ADMIN") {
    return <AdminSidebar />;
  }
};
