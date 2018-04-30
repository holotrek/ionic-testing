import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { UserSearchResponse } from '../../models/user-search-response';

/*
  Generated class for the GithubUsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubUsersProvider {
    githubApiUrl = 'https://api.github.com';

    constructor(public http: HttpClient) {
    }

    load(): Promise<User[]> {
        return this.http.get<User[]>(`${this.githubApiUrl}/users`).toPromise();
    }

    loadDetails(login: string): Promise<User> {
        return this.http.get<User>(`${this.githubApiUrl}/users/${login}`).toPromise();
    }

    searchUsers(search: string): Promise<UserSearchResponse> {
        return this.http.get<UserSearchResponse>(`${this.githubApiUrl}/search/users?q=${search}`).toPromise();
    }
}
