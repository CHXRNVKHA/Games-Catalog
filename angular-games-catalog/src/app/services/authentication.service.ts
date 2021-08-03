import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public login (email: string, password: string): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { email, password })
            .pipe(map(user => {
                console.log(JSON.stringify(user));
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    public registry (email:string, password: string, name: string): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/users/registry`, { email, password, name });
    }

    public logout(): void {
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(new User());
    }
}