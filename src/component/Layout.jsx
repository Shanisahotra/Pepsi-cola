// src/components/Layout.jsx
"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import UsersTable from "./UsersTable";
import Invoice from "./Invoice";
export default function Layout({ children }) {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <SidebarInset>
         <Navbar />
         
         <Dashboard/>
        
         <UsersTable/>
         <Invoice/>
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}