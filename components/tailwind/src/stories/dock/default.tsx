import { Dock, DockIcon } from "@/ui/dock";
import { TbEdit, TbHome, TbMail, TbSun } from "solid-icons/tb";

export default function DockDemo() {
	return (
		<Dock>
			<DockIcon>
				<TbHome />
			</DockIcon>
      <DockIcon>
				<TbEdit />
			</DockIcon>
      <DockIcon>
				<TbMail />
			</DockIcon>
      <DockIcon>
				<TbSun />
			</DockIcon>
		</Dock>
	);
}
