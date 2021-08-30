import { ErrorHandler, Injectable, NgZone } from "@angular/core";

@Injectable()
export class MyErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(error: Error) {
        alert(JSON.stringify(error.message));
    }
}