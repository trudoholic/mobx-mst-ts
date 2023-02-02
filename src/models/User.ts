import { types } from "mobx-state-tree";

export const User = types.model({
    id: types.identifierNumber,
    name: types.string
});