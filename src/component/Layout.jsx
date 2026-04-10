// src/components/Layout.jsx
"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main Content */}
      <SidebarInset>
        <div className="p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}