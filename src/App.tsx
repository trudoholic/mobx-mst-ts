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
    return (
        <div>
            <button onClick={(e) => store.addTodo(uid(), "New Task")}>
                Add Task
            </button>
            {values(store.todos).map((todo) => (
                // @ts-ignore
                <div key={todo?.id}>
                    {/*{JSON.stringify(todo)}*/}
                    <input
                        type="checkbox"
                        // @ts-ignore
                        checked={todo?.done}
                        // @ts-ignore
                        onChange={(e) => todo?.toggle()}
                    />
                    <input
                        type="text"
                        // @ts-ignore
                        value={todo?.name}
                        // @ts-ignore
                        onChange={(e) => todo?.setName(e.target.value)}
                    />
                </div>
            ))}
        </div>
    );
});

export default App;
