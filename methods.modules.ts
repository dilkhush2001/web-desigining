import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './introduction/introduction.component';
import { RouterModule } from '@angular/router';
import { EvenoddmethodComponent } from './evenoddmethod/evenoddmethod.component';
import { ExampleComponent } from './example/example.component';
import { MethodoverloadingComponent } from './methodoverloading/methodoverloading.component';
import { PalindromemethodComponent } from './palindromemethod/palindromemethod.component';
import { RevnumbermethodComponent } from './revnumbermethod/revnumbermethod.component';
import { SharedModule } from 'src/app/shared-module/shared.module';



@NgModule({
  declarations: [
    IntroductionComponent,
    ExampleComponent,
    EvenoddmethodComponent,
    RevnumbermethodComponent,
    PalindromemethodComponent,
    MethodoverloadingComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot([
        { path: 'core-java/methods/introduction', component: IntroductionComponent },
        { path: 'core-java/methods/example', component: ExampleComponent },
        { path: 'core-java/methods/evenoddmethod', component: EvenoddmethodComponent },
        { path: 'core-java/methods/revnumbermethod', component: RevnumbermethodComponent },
        { path: 'core-java/methods/palindromemethod', component: PalindromemethodComponent },
        { path: 'core-java/methods/methodoverloading', component: MethodoverloadingComponent },
    ])
  ]
})
export class MethodsModules { }
