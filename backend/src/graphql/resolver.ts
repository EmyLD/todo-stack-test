import Todo from "../models/Todo";

const resolvers = {
  todos: async () => {
    return await Todo.query();
  },
  createTodo: async ({ title }: { title: string }) => {
    return await Todo.query().insert({ title, completed: false });
  },
  updateTodo: async ({ id, completed }: { id: number; completed: boolean }) => {
    return await Todo.query().patchAndFetchById(id, { completed });
  },
  deleteTodo: async ({ id }: { id: number }) => {
    const numDeleted = await Todo.query().deleteById(id);
    return numDeleted > 0;
  },
};

export default resolvers;
