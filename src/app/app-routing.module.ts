import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { ProfileComponent } from './profile/profile.component';
//The following import is to prevent people to see the profile data unless they are logged in, provided by Angular SDK
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
},
{
  path: 'profile',
  component: ProfileComponent,
  canActivate: [AuthGuard]

},
{
  path: 'external-api',
  component: ExternalApiComponent,
  canActivate: [AuthGuard]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
