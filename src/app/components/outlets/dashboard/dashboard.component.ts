import {
    Component
} from '@angular/core';
import {
    Router
} from '@angular/router';
import {
    AuthService
} from '../../../shared/services/auth.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    constructor(
        private _router: Router,
        public _auth: AuthService
    ) {}

    public navigateTo(route: string): void {
        this._router.navigate([route]);
    }

}
