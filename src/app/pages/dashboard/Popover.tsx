import { Cross2Icon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { Plus } from "phosphor-react";
import React, { useCallback, useState } from "react";
import { ApiException } from "../../shared/services/api/ApiException";
import {
  ITask,
  TasksService,
} from "../../shared/services/api/tarefas/TasksService";
import "../../styles/popover.css";

export const NewTodoPopover = (prop: any) => {
  const [list, setList] = useState<ITask[]>([]);
  const { data } = prop;
  console.log('data', data);
  
  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;

          const value = e.currentTarget.value;

          e.currentTarget.value = "";

          if (list.some((ListItem) => ListItem.title === value)) return;

          TasksService.create({ title: value, isCompleted: false }).then(
            (result) => {
              if (result instanceof ApiException) {
                alert(result.message);
              } else {
                setList((oldList) => [...oldList, result]);
              }
            }
          );
        }
      },
      [list]
    );

  return (
    <Popover.Root>
      <Popover.Trigger>
        <Button />
      </Popover.Trigger>

      <Popover.Content
        className="PopoverContent shadow-sm shadow-blue-700 bg-zinc-900"
        sideOffset={5}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <p className="Text" style={{ marginBottom: 10 }}>
            New task - 02/02/2023
          </p>
          <fieldset className="Fieldset">
            <input
              type="text"
              onKeyDown={handleInputKeyDown}
              className="Input bg-zinc-300 text-black"
              id="width"
              placeholder="Compras, exercícios, etc..."
            />
          </fieldset>
        </div>

        <Popover.Close className="PopoverClose" aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow className="fill-zinc-900" />
      </Popover.Content>
    </Popover.Root>
  );
};

const Button = () => {
  return (
    <button
      type="button"
      className="border border-blue-700 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-blue-500 hover:plus-blue-500 bg-zinc-900"
    >
      Create task
      <Plus id="plus" size={20} className="text-blue-700 " />
    </button>
  );
};
