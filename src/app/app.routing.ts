import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'cursos', component: CursosComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);