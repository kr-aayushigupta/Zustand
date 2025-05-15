import {create} from 'zustand'; // "create" is used to create global state store

type bearStore={
    bears: number;
    increase:()=> void;
  
    reset:()=> void;
    decrease:()=> void;
};


export const usebearStore=create<bearStore> ((set)=>({
    bears:0,
    increase:()=>set((state)=>({bears:state.bears +1})),
    reset:()=>set({bears:0}),
    decrease:()=>set((state)=>({bears:state.bears-1}))
}))