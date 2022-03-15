import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { EventComponent } from './event/event.component';
import { SectionComponent } from './section/section.component';
import { HostComponent } from './host/host.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeroComponent,
    EventComponent,
    SectionComponent,
    HostComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[
    HeroComponent,
    EventComponent,
    SectionComponent,
    HostComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent
  ]
})
export class UiModule { }
