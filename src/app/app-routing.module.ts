import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LembrancinhasComponent } from './pages/lembrancinhas/lembrancinhas.component';
import { CardapioPascoaComponent } from './components/cardapio-pascoa/cardapio-pascoa.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: CardapioPascoaComponent },
  { path: 'lembrancinhas', component: LembrancinhasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
