import { Header } from "../components/Header/index.jsx";
import { Sidebar } from "../components/Sidebar/index.jsx";
import { Dashboard } from "./Dashboard/index.jsx";

export const Home = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />

      <div className="flex flex-col w-full">
        <Header />
        <div className="p-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};
