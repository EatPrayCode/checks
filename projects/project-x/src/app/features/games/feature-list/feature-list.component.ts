import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTE_ANIMATIONS_ELEMENTS } from '../../../core/core.module';

import { Feature, features } from '../feature-list.data';

@Component({
  selector: 'projectx-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  features: Feature[] = features;

  constructor(private router: Router) { }

  ngOnInit() { }

  openLink(link: string) {
    window.open(link, '_blank');
  }

  goTo(feature) {
    this.router.navigateByUrl(feature.routeLink);
  }

}
