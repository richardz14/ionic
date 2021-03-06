import { Component, Element, Listen, Prop, State } from '@stencil/core';
import { Config, PlatformConfig } from '../../index';

import {
  DisplayWhen,
  updateTestResults,
} from '../../utils/show-hide-when-utils';

@Component({
  tag: 'ion-show-when',
  styleUrl: './show-when.scss'
})
export class ShowWhen implements DisplayWhen {

  @Element() element: HTMLElement;
  @Prop({ context: 'config' }) config: Config;
  @Prop({ context: 'platforms' }) calculatedPlatforms: PlatformConfig[];

  @Prop() orientation: string;
  @Prop() mediaQuery: string;
  @Prop() size: string;
  @Prop() mode: string;
  @Prop() platform: string;
  @Prop() or = false;

  @State() passesTest = false;

  @Listen('window:resize')
  componentWillLoad() {
    return updateTestResults(this);
  }

  hostData() {
    return {
      class: {
        'show-content': this.passesTest,
        'hide-content': !this.passesTest
      }
    };
  }

}



