import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { MaterialModule } from '@app/material.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { SocketIoService } from './socket-io.service';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    ChartsModule,
    MatFormFieldModule,
    MatInputModule,
    MaterialFileInputModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [HomeService, SocketIoService]
})
export class HomeModule {}
