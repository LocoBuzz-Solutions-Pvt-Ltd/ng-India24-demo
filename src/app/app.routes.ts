import { Routes } from '@angular/router';
import { SignalsDemoComponent } from './components/signals-demo/signals-demo.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DirectivesDemoComponent } from './components/directives-demo/directives-demo.component';
import { DeferDemoComponent } from './components/defer-demo/defer-demo.component';
import { HeaderComponent } from './components/schematics-demo/header/header.component';
import { SchematicsComponent } from './components/schematics-demo/schematics/schematics.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'signal',
    component: SignalsDemoComponent,
  },
  {
    path: 'directive',
    component: DirectivesDemoComponent,
  },
  {
    path: 'defer',
    component: DeferDemoComponent,
  },
  {
    path: 'schematics',
    component: SchematicsComponent
  }
];
