import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {
    constructor(private _http:HttpClient) {}
    getdata() {
        return this._http.get('https://api.themoviedb.org/3/discover/movie?api_key=b62014b892ccd0ded1db780fb3737613&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
    }
}