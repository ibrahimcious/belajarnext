import { API_URL } from "@/constants/api-url";

export const TodoDelete = ({ id }) => {
  async function deleteTodoAction(formData) {
    "use server";
    const id = formData.get("todo_id");
    await fetch(API_URL, {
      method: "DELETE",
      body: JSON.stringify([id]),
      headers: {
        "Content-Type": "application/json",
      },
    });

    revalidatePath("/");
  }
  return (
    <form action={deleteTodoAction}>
      <input name="todo_id" defaultValue={id} hidden />
      <button className="text-xs bg-red-600 text-white px-2 py-1">
        Delete
      </button>
    </form>
  );
};
