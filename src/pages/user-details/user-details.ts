import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-details',
    templateUrl: 'user-details.html',
})
export class UserDetailsPage {
    login: string;
    user: User;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private githubUsers: GithubUsersProvider
    ) {
    }

    ionViewDidLoad() {
        this.login = this.navParams.get('login');
        this.githubUsers.loadDetails(this.login).then(user => this.user = user);
    }

}
