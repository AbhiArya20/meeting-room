"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import Link from "next/link";
import { SUPPORT_MENUS } from "../../../_constants/sidebar";
import ProfileIcon from "./profile-icon/profile-icon";

export default function RightSidebar() {
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh !w-[calc(var(--sidebar-width-icon))] lg:flex"
      side="right"
      style={
        {
          "--sidebar-width-icon": "3rem",
        } as React.CSSProperties
      }
    >
      <SidebarHeader className="px-0">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="flex items-center">
              <SidebarMenuItem className="size-9 cursor-pointer">
                <ProfileIcon />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>
        <SidebarGroup className="justify-center px-0">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {SUPPORT_MENUS.map((menu) => (
                <SidebarMenuItem key={menu.title}>
                  <SidebarMenuButton asChild tooltip={menu.title}>
                    <Link className="flex justify-center" href={menu.href}>
                      {menu.icon}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
