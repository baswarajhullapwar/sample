import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetflixHeaderComponent } from './netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './netflix/netflix-register/netflix-register.component';
import { NetflixIndexComponent } from './netflix/netflix-index/netflix-index.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataComponent } from './data/data.component';
import { Databinding2Component } from './databinding2/databinding2.component';
import { Databinding3Component } from './databinding3/databinding3.component';
import { IfdemoComponent } from './ifdemo/ifdemo.component';
import { Ifdemo2Component } from './ifdemo2/ifdemo2.component';
import { AwitchdemoComponent } from './awitchdemo/awitchdemo.component';
import { JavaComponent } from './java/java.component';
import { Fordemo2Component } from './fordemo2/fordemo2.component';
import { NasaComponent } from './nasa/nasa.component';
import { IndexdemoComponent } from './indexdemo/indexdemo.component';
import { TruckbyComponent } from './truckby/truckby.component';
import { TrackdemoComponent } from './trackdemo/trackdemo.component';
import { MousemoveComponent } from './mousemove/mousemove.component';
import { KeyeventsComponent } from './keyevents/keyevents.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './products/products.component';
import { FilterComponent } from './filter/filter.component';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { MaterialdemoComponent } from './materialdemo/materialdemo.component';
import { AnimationdemoComponent } from './animationdemo/animationdemo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultriggerComponent } from './multrigger/multrigger.component';
import { SentensecasepipePipe } from './pipes/sentensecasepipe.pipe';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SortingPipe } from './sorting.pipe';
import { FakestoreComponent } from './fakestore/fakestore.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateformComponent } from './templateform/templateform.component';
import { ValidationComponent } from './validation/validation.component';
import { CustomeventComponent } from './customevent/customevent.component';
import { ModelformComponent } from './modelform/modelform.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { ControlarrayComponent } from './controlarray/controlarray.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HtmlComponent } from './html/html.component';
import { HullappaComponent } from './hullappa/hullappa.component';

@NgModule({
  declarations: [
    AppComponent,
    NetflixHeaderComponent,
    NetflixMainComponent,
    NetflixRegisterComponent,
    NetflixIndexComponent,
    DatabindingComponent,
    DataComponent,
    Databinding2Component,
    Databinding3Component,
    IfdemoComponent,
    Ifdemo2Component,
    AwitchdemoComponent,
    JavaComponent,
    Fordemo2Component,
    NasaComponent,
    IndexdemoComponent,
    TruckbyComponent,
    TrackdemoComponent,
    MousemoveComponent,
    KeyeventsComponent,
    ShoppingcartComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    FilterComponent,
    Parent1Component,
    Child1Component,
    MaterialdemoComponent,
    AnimationdemoComponent,
    MultriggerComponent,
    SentensecasepipePipe,
    PipedemoComponent,
    SortingPipe,
    FakestoreComponent,
    TemplateformComponent,
    ValidationComponent,
    CustomeventComponent,
    ModelformComponent,
    FormbuilderComponent,
    ControlarrayComponent,
    HomeComponent,
    CategoriesComponent,
    NotfoundComponent,
    HtmlComponent,
    HullappaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
