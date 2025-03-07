import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
export const TodoCreate = () => {
  async function createTodoAction(formData) {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");
    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify([{ name: title, age: content }]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath("/");
  }
  return (
    <section>
      <form className="space-y-2" action={createTodoAction}>
        <input name="title" placeholder="Input your title" />
        <textarea name="content" placeholder="Content..." />
        <button>Create todo</button>
      </form>
    </section>
  );
};
