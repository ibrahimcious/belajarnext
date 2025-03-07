import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
export const TodoUpdate = ({ id, title, content }) => {
  async function updateTodoAction(formData) {
    "use server";
    const id = formData.get("id");
    const title = formData.get("title");
    const content = formData.get("content");
    const res = await fetch(API_URL, {
      method: "PUT",
      body: JSON.stringify({ _id: id, name: title, age: content }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidatePath(`/todos/${id}`);
  }
  return (
    <section>
      <form className="space-y-2" action={updateTodoAction}>
        <input name="id" defaultValue={id} hidden />
        <input
          name="title"
          placeholder="Input your title"
          defaultValue={title}
        />
        <textarea
          name="content"
          placeholder="Content..."
          defaultValue={content}
        />
        <button>Create todo</button>
      </form>
    </section>
  );
};
