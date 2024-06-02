import { atom, selector } from "recoil"; // Importing atom and selector from Recoil

// Defining an atom to hold the count state
export const countAtom = atom({
    key: "countAtom", // unique ID for this atom
    default: 0 // initial value of the atom
});

// Defining a selector to compute if the count is even
export const isEvenSelector = selector({
    key: 'isEvenSelector', // unique ID for this selector
    get: ({ get }) => {
        const count = get(countAtom); // getting the current value of countAtom
        return count % 2 === 0; // returning true if count is even, false otherwise
    }
});
