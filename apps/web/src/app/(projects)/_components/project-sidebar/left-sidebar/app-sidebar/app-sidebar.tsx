"use client";

import * as React from "react";
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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { APP_MENUS, SUPPORT_MENUS } from "@/project/_constants/sidebar";
import useApp from "@/project/_hooks/use-app";
import AppMenu from "@/project/_components/project-sidebar/left-sidebar/app-menu/app-menu";

export default function AppSidebar() {
  const { app } = useApp();

  return (
    <Sidebar
      collapsible="none"
      className="!w-[calc(var(--sidebar-width-icon))] bg-slate-200 dark:bg-neutral-900"
    >
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarTrigger className="size-9 cursor-pointer" />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="relative gap-4 overflow-auto">
              {APP_MENUS.map((menu, index) => (
                <SidebarMenuItem key={menu.title}>
                  {menu.href === app?.href && (
                    <>
                      <div
                        className={cn(
                          "absolute right-0 h-9 w-1 rounded-l-2xl",
                          menu.highlight,
                        )}
                      ></div>
                      <div
                        className={cn(
                          "absolute left-0 h-9 w-1 rounded-r-2xl",
                          menu.highlight,
                        )}
                      ></div>
                    </>
                  )}
                  <SidebarMenuButton asChild>
                    <AppMenu key={index} menu={menu} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup className="justify-center">
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
