import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RideSharingComponent } from './ride-sharing.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { RideSharingRoutingModule } from './ride-sharing-routing.module';
import { RideActionComponent } from './ride-action/ride-action.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [RideSharingComponent, RideActionComponent, MenuComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    LeafletModule,
    RideSharingRoutingModule
  ],
  entryComponents: [RideActionComponent, MenuComponent, DashboardComponent]
})
export class RideSharingModule {}
