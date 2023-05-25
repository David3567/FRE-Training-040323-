import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiBackend = 'http://localhost:4231'

    constructor(private http: HttpClient) { }

    signIn(storeData: FormGroup) : Observable<any> {
        const user = {
            "email": storeData.value.email,
            "password": storeData.value.password,
        }
        return this.http.post(`${this.apiBackend}/auth/signin`, user);
    }

    checkEmail(email: string) : Observable<any> {
        const temp = { "email": email }
        return this.http.post(`${this.apiBackend}/auth/check-email`, temp)
    }
}