import { Outlet } from "react-router-dom";
import DashaboardLayout from "./layout";

const Dashboard = () => {
  return (
    <DashaboardLayout>
      <Outlet />
    </DashaboardLayout>
  );
};

export default Dashboard;
