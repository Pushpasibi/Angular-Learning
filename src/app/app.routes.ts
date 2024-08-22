import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { NewCompenentComponent } from './new-compenent/new-compenent.component';

export const routes: Routes = [
    {path:'',component:BindingComponent},
    {path:'new', component:NewCompenentComponent}
];



