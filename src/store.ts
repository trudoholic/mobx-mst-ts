import { getSnapshot, Instance, types } from "mobx-state-tree";
import { uid } from "uid/single";
import { Todo, User } from "./models";

export const RootStore = types
    .model({
        users: types.map(User),
        todos: types.optional(types.map(Todo), {})
    })
    .actions((self) => ({
        addTodo(id: string, name: string) {
            self.todos.set(id, Todo.create({ id, name }));
        }
    }));

export type RootStoreModel = Instance<typeof RootStore>;

const id = uid();
export const store: RootStoreModel = RootStore.create({
    users: {}
});

store.addTodo(id, "Eat a cake");
store.todos.get(id)?.toggle();
console.log(getSnapshot(store));