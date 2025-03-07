import { TodoUpdate } from "../_components/todo-update";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/M4qsfskhcoi3/${id}`,
  );
  const data = await res.json();
  return (
    <main className="p-6">
      <div className="space-y-2 p-6">
        <h3 className="text-2xl font-semibold tracking-tight">{data.age}</h3>
        <h3>{data.name}</h3>
      </div>
      <TodoUpdate id={data._id} title={data.age} content={data.name} />
    </main>
  );
}
