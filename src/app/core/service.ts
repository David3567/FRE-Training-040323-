import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {
    private idSource = new BehaviorSubject<string>('');
    private apiUrl = 'https://api.themoviedb.org/3/movie';
    private apiKey = 'b62014b892ccd0ded1db780fb3737613';

    constructor(private http: HttpClient) { }

    id$ = this.idSource.asObservable();
    setId(id: string) {
        this.idSource.next(id);
    }

    getdata() {
        return this.http.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_watch_monetization_types=flatrate`);
    }

    getMedia(id: number) {
        return this.http.get(`${this.apiUrl}/${id}?api_key=${this.apiKey}&language=en-US`);
    }

    getVideo(id: number) {
        return this.http.get(`${this.apiUrl}/${id}/videos?api_key=${this.apiKey}&language=en-US`);
    }

    getImages(id: number) {
        return this.http.get(`${this.apiUrl}/${id}/images?api_key=${this.apiKey}&language=en-US&include_image_language=en`);
    }

    getCredits(id: number) {
        return this.http.get(`${this.apiUrl}/${id}/credits?api_key=${this.apiKey}&language=en-US`);
    }
}