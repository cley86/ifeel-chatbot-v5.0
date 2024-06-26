import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { RegisterComponent } from './componentes/register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'chat', component: ChatComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
