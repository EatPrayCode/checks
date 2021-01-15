import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'projectx-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'projectx.examples.menu.todos' },
    { link: 'stock-market', label: 'projectx.examples.menu.stocks' },
    { link: 'theming', label: 'projectx.examples.menu.theming' },
    { link: 'crud', label: 'projectx.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'projectx.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'projectx.examples.menu.form' },
    { link: 'notifications', label: 'projectx.examples.menu.notifications' },
    { link: 'elements', label: 'projectx.examples.menu.elements' },
    { link: 'authenticated', label: 'projectx.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
