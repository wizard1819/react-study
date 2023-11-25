import { BehaviorSubject } from "rxjs"

export const store = []

export const sub$ = new BehaviorSubject(null);

export const setState=(data)=>{
    sub$.next(data);
}

