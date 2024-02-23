import { NgModule } from '@angular/core';
import { NbButtonModule, NbCardModule, NbFormFieldModule, NbInputModule, NbMenuModule, NbRouteTabsetModule, NbTabsetModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    Ng2SmartTableModule,
    NbInputModule,
    NbButtonModule,
    NbFormFieldModule
  ],
  declarations: [
    PagesComponent,
    CustomerComponent,
    RegisterComponent,
  ],
})
export class PagesModule {
}
