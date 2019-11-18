import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { MaterialModule } from '@app/material.module';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
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
  providers: [HomeService]
})
export class HomeModule {}
