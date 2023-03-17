import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarcodeScannerLivestreamRouteComponent } from './barcode-scanner-livestream';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/livestream',
    pathMatch: 'full',
  },
  {
    path: 'livestream',
    component: BarcodeScannerLivestreamRouteComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
