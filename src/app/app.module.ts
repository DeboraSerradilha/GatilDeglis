import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { HomeComponent } from './pages/home/home.component';
import { UtilsService } from './services/utils.service';



// Módulos do Angular Material; BIBLIOTECAS
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [                             //paginas
    AppComponent,
    HeaderComponent,
    ContatosComponent,
    HomeComponent,
  ],
  imports: [                                //bibliotecas
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    ToastrModule.forRoot()
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    UtilsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
