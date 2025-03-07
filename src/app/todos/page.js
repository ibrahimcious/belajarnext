import { TodoCreate } from "./_components/todo-create";
import { TodoRead } from "./_components/todo-read";

export default async function Page() {
  return (
    <>
      <main>
        <section>
          <h3>My Todos</h3>
          <p>All my todos</p>
        </section>
        <TodoRead />
        <TodoCreate />
      </main>
    </>
  );
}
