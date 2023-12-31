export function Sidebar() {
  return (
    <div className=" flex h-screen w-40 flex-col justify-between border-r border-r-indigo-900/40 px-8 pt-5">
      <div>
        <SidebarItem name="yo" />
        <SidebarItem name="yo" />
        <SidebarItem name="yo" />
        <SidebarItem name="yo" />
        <SidebarItem name="yo" />
      </div>
    </div>
  );
}

function SidebarItem({ name }: { name: string }) {
  return <div>{name}</div>;
}
