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
} from "@/components/ui/sidebar";
import useApp from "@/project/_hooks/use-app";
import { ArrowUpCircleIcon } from "lucide-react";
import { APPS } from "@/project/_constants/apps";
import CurrentAppIcon from "@/project/_components/current-app-icon/current-app-icon";
import MailSidebarContent from "./mail-sidebar/mail-sidebar-content";
import ChatSidebarContent from "./chat-sidebar/chat-sidebar-content";
import MeetSidebarContent from "./meet-sidebar/meet-sidebar-content";
import BoardSidebarContent from "./board-sidebar/board-sidebar-content";
import DocsSidebarContent from "./docs-sidebar/docs-sidebar-content";
import CalendarSidebarContent from "./cal-sidebar/cal-sidebar-content";
import MailSidebarFooter from "./mail-sidebar/mail-sidebar-footer";
import ChatSidebarFooter from "./chat-sidebar/chat-sidebar-footer";
import MeetSidebarFooter from "./meet-sidebar/meet-sidebar-footer";
import BoardSidebarFooter from "./board-sidebar/board-sidebar-footer";
import DocsSidebarFooter from "./docs-sidebar/docs-sidebar-footer";
import CalendarSidebarFooter from "./cal-sidebar/cal-sidebar-footer";

export default function CurrentAppSidebar() {
  const { app } = useApp();

  return (
    <Sidebar collapsible="none" className="hidden flex-1 border-r-0! md:flex">
      <SidebarHeader className="p-4">
        <SidebarGroup className="justify-center p-0">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <CurrentAppIcon />
              </SidebarMenuItem>
            </SidebarMenu>
            {/* TODO: Add this back when we have a proper workspace design */}
            {/* <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="data-[slot=sidebar-menu-button]:!p-1.5"
                >
                  <a href="#">
                    <ArrowUpCircleIcon className="h-5 w-5" />
                    <span className="text-base font-semibold">Acme Inc.</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu> */}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent className="scrollbar scrollbar-w-1 scrollbar-thumb-rounded-full scrollbar-thumb-foreground/5 scrollbar-track-rounded-full scrollbar-track-transparent">
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            {app?.app === APPS.MAIL && <MailSidebarContent />}
            {app?.app === APPS.CHAT && <ChatSidebarContent />}
            {app?.app === APPS.MEET && <MeetSidebarContent />}
            {app?.app === APPS.BOARD && <BoardSidebarContent />}
            {app?.app === APPS.DOCS && <DocsSidebarContent />}
            {app?.app === APPS.CAL && <CalendarSidebarContent />}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup className="px-0">
          <SidebarGroupContent>
            {app?.app === APPS.MAIL && <MailSidebarFooter />}
            {app?.app === APPS.CHAT && <ChatSidebarFooter />}
            {app?.app === APPS.MEET && <MeetSidebarFooter />}
            {app?.app === APPS.BOARD && <BoardSidebarFooter />}
            {app?.app === APPS.DOCS && <DocsSidebarFooter />}
            {app?.app === APPS.CAL && <CalendarSidebarFooter />}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
