import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/navbar";

export const Layout = () => {
  return (
    <div className="font-lato p-4 bg-light-gray min-h-screen flex space-x-6">
      <section>
        <div className="text-h2 flex space-x-2 mb-3">
          <img src="./public/logo.svg"/>
          <h1>MFurniture</h1>
        </div>
        <Navbar/>
      </section>
      <section className="bg-white w-full rounded-[16px] py-6 px-8">
        <Outlet />
      </section>
    </div>
  );
};
