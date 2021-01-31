import { Injectable } from "@angular/core";

@Injectable({providedIn:'root' })
export class CounterService{
    private _toActive : number = 0;
    private _toInactive : number = 0;

    public get toActive():number{
        return this._toActive;
    }

    public get toInactive():number{
        return this._toInactive;
    }

    incrementToActive(){
        this._toActive++;
        console.log("To Active: ",this._toActive);
    }

    incrementToInactive(){
        this._toInactive++;
        console.log("To Inactive: ",this._toInactive);
    }
}