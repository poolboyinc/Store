import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { FeedComponent } from "./feed/feed.component";
import { ProfileComponent } from "./auth/profile/profile.component";
import { CartComponent } from "./cart/cart.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
    {path: '',component: WelcomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'cart', component: CartComponent},
    {path: 'history', component: HistoryComponent}
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class RoutingModule{

}