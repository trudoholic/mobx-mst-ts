import React from 'react';
import './App.css';

import { observer } from "mobx-react-lite";
import { uid } from "uid/single";
import { values } from "mobx";
import { Instance } from "mobx-state-tree";
import { RootStore } from "./store";

interface IRootStore extends Instance<typeof RootStore> {}

interface Props {
    store: IRootStore;
}

const App: React.FC<Props> = observer(({ store }) => {
    const todosValues = Array.from(store.todos.values());

    return (
        <div>
            <button onClick={(e) => store.addTodo(uid(), "New Task")}>
                Add Task
            </button>
            {todosValues.map((todo) => (
                <div key={todo?.id}>
                    <input
                        type="checkbox"
                        checked={todo?.done}
                        onChange={(e) => todo?.toggle()}
                    />
                    <input
                        type="text"
                        value={todo?.name}
                        onChange={(e) => todo?.setName(e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
});

export default App;
