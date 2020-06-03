import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itshareshop';
  constructor (
    private userSrv :UserService,
    private authServ: AuthService ,
    private route :ActivatedRoute,
    router: Router
    ){
      this.authServ.user$.subscribe(user =>{
        if (user){
          this.userSrv.save(user);
          let returUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          router.navigateByUrl(returUrl);

        }
      })
  }
}
