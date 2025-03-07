import Link from "next/link";
import { TodoDelete } from "./todo-delete";
import { API_URL } from "@/constants/api-url";

export const TodoRead = async () => {
  const res = await fetch(API_URL);
  const { data } = await res.json();

  return (
    <section>
      {data.map((item) => {
        return (
          <div key={item._id} className="flex gap-2">
            <Link href={`/todos/${item._id}`}> - {item.age}</Link>
            <TodoDelete id={item._id} />
          </div>
        );
      })}
    </section>
  );
};
