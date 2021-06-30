import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) {}

    login (email: string, password: string) {
        return this.http.post<User>('/api/login', {email, password})
            .pipe(shareReplay())
    }
}
