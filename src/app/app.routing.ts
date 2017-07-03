import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { BuitindirComponent } from './buitindir/buitindir.component';
import { BuiltinpipeComponent } from './builtinpipe/builtinpipe.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
    { path: '', component: DatabindingComponent },
    { path: 'dir', component: BuitindirComponent },
    { path: 'about/:id', component: AboutComponent },
    { path: 'pipe', component: BuiltinpipeComponent },
    { path: '**', redirectTo: 'notfound' },
    { path: 'notfound', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [DatabindingComponent, BuiltinpipeComponent, BuitindirComponent, AboutComponent, NotfoundComponent];