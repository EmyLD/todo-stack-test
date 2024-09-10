import { Model } from "objection";

class Todo extends Model {
  static tableName = "todos";

  id!: number;
  title!: string;
  completed!: boolean;
}

export default Todo;
