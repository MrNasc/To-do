import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import React, { useCallback, useEffect, useState, Dispatch, SetStateAction } from "react";
import { ApiException } from "../../shared/services/api/ApiException";
import {
  ITask,
  TasksService,
} from "../../shared/services/api/tarefas/TasksService";
import { InputDate } from "./InputDate";

interface Prop {
    setData: Dispatch<SetStateAction<string>>;
}

export const Dashboard = React.forwardRef<HTMLInputElement, Prop>((props) => {
  const [list, setList] = useState<ITask[]>([]);
  const [date, setDate] = useState("");


  useEffect(() => {
    TasksService.getAll().then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList(result);
      }
    });
  }, []);

  useEffect(() => {
    props.setData(date)
  }, [date])

  const handleToggleComplete = useCallback(
    (id: number) => {
      const taskToUpdate = list.find((task) => task.id === id);
      if (!taskToUpdate) return;

      TasksService.updateById(id, {
        ...taskToUpdate,
        isCompleted: !taskToUpdate.isCompleted,
      }).then((result) => {
        if (result instanceof ApiException) {
          alert(result.message);
        } else {
          setList((oldList) => {
            return oldList.map((oldListItem) => {
              if (oldListItem.id === id) return result;
              return oldListItem;
            });
          });
        }
      });
    },
    []
  );

  const handleDelete = useCallback((id: number) => {
    TasksService.deleteById(id).then((result) => {
      if (result instanceof ApiException) {
        alert(result.message);
      } else {
        setList((oldList) => {
          return oldList.filter((oldListItem) => oldListItem.id !== id);
        });
      }
    });
  }, []);

  const input = document.getElementById("date-input") as HTMLInputElement;
  if (input) {
    input.valueAsDate = new Date();
    const date = dayjs(input.valueAsDate).format("DD/MM/YYYY");
    input.value = date;
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form action="" className="grid flex-col gap-5">
        <div>
          <p>Date</p>
          <InputDate
            value={date}
            onChange={(newValue) => setDate(newValue)}
            type="date"
          />
        </div>
      </form>

      <p className="mt-10">
        Completed tasks on this day:{" "}
        {list.filter((ListItem) => ListItem.isCompleted).length} out of{" "}
        {list.map((ListItem) => ListItem).length}
      </p>

      <div className="pr-5 overflow-auto max-h-96 h-96">
        <div className="h-full">
          {list.map((ListItem) => {
            return (
              <div className="w-full max-w-3xl my-5 flex gap-3 justify-between items-center pb-2 border-b-2">
                <Checkbox.Root
                  key={ListItem.id}
                  checked={ListItem.isCompleted}
                  onCheckedChange={() => handleToggleComplete(ListItem.id)}
                  className="flex items-center gap-3 group focus:outline-none"
                >
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-50 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
                    <Checkbox.Indicator>
                      <Check size={20} className="text-white" />
                    </Checkbox.Indicator>
                  </div>

                  <span className="">{ListItem.title}</span>
                </Checkbox.Root>

                <button
                  className="col-span-2"
                  onClick={() => handleDelete(ListItem.id)}
                >
                  {" "}
                  Delete{" "}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
  });
