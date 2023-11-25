import { BehaviorSubject } from "rxjs";


    export const state$ = new BehaviorSubject('hyyy');


    export const setState = (data)  => {
        state$.next(data);
    }

    export const getsta = () =>{
        return state$.getValue();
    }
