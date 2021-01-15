import { environment as env } from '../../../environments/environment';

export interface Feature {
  name: string;
  version?: string;
  description: string;
  github?: string;
  documentation: string;
  medium?: string;
  routeLink: string;
}

export const features: Feature[] = [
  {
    name: 'Snake',
    version: env.versions.angular,
    description: 'projectx.features.angular',
    github: 'https://github.com/angular/angular',
    documentation: 'https://angular.io/docs/ts/latest/',
    routeLink: 'snake'
  }
];
