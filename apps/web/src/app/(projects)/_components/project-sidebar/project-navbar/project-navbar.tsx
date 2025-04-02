import RightProjectNavbar from "@/project/_components/project-sidebar/project-navbar/right-project-navbar/right-project-navbar";
import LeftProjectNavbar from "./left-project-navbar/left-project-navbar";

export default function ProjectNavbar() {
  return (
    <header className="mt-2 flex w-full items-center justify-between gap-2 pl-2">
      <LeftProjectNavbar />
      <RightProjectNavbar />
    </header>
  );
}
