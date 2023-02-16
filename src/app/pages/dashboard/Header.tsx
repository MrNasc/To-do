

import { NewTodoPopover } from "./Popover";
import logoImage from "/assets/logo.png";



export function Header(data: any) {
  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <img src={logoImage} alt="Logo-habits" className="w-32"/>
      <NewTodoPopover data={data} />
    </div>
  );
}
