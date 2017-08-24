import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { AuthService } from './providers/auth.service';
import { CandidatoComponent } from './candidato/candidato.component';
import { MenuComponent } from './menu/menu.component';
import { NgxDynamicTemplateModule } from 'ngx-dynamic-template';


export const firebaseConfig = {
    apiKey: "",
    authDomain: "talentos-aece4.firebaseapp.com",
    databaseURL: "https://talentos-aece4.firebaseio.com",
    projectId: "talentos-aece4",
    storageBucket: "talentos-aece4.appspot.com",
    messagingSenderId: "388631869681"
};

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'candidato', component: CandidatoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidatoComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    NgxDynamicTemplateModule.forRoot({ routes: routes })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
