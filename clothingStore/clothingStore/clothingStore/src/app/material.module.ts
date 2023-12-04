import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import {MatIconModule} from '@angular/material/icon'
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    imports:[
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        HttpClientModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDialogModule
    ],
    exports:[
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        HttpClientModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatDialogModule
    ]
})

export class MaterialModule{

}