"use client";
import { useActionState } from "react";
import { createTodoAction } from "../_actions/todo-create";
export const TodoCreate = () => {
  const [state, formAction, pending] = useActionState(createTodoAction, null);
  console.log(state);
  return (
    <section>
      <form className="space-y-2" action={formAction}>
        <input name="title" placeholder="Input your title" />
        <textarea name="content" placeholder="Content..." />
        <button disabled={pending}>Create todo</button>
        {state?.message ? (
          <div className="text-red-600">{state.message}</div>
        ) : null}
      </form>
    </section>
  );
};
