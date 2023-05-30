import '@vaadin/button';
import '@vaadin/notification';
import { Notification } from '@vaadin/notification';
import '@vaadin/crud';
import '@vaadin/date-time-picker';
import * as HelloWorldEndpoint from 'Frontend/generated/HelloWorldEndpoint.js';
import {html, PropertyValues} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { View } from '../../views/view.js';
import TestObj from "Frontend/generated/com/example/application/endpoints/helloworld/TestObj";
import {getTestObjects} from "Frontend/generated/HelloWorldEndpoint.js";

@customElement('hello-world-view')
export class HelloWorldView extends View {
  name = '';

  @state()
  items: TestObj[] = [];

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('flex', 'p-m', 'gap-m', 'items-end');
  }

  protected async firstUpdated(_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties);
    this.items = await getTestObjects();
    console.log('Locale', window.navigator.language, Intl.NumberFormat().resolvedOptions().locale);
  }

  render() {
    return html`
      <vaadin-crud
       .items="${this.items}">
        <vaadin-form-layout slot="form">
          <vaadin-checkbox label="Enabled" path="enabled"></vaadin-checkbox>
          <vaadin-date-time-picker label="Timestamp" path="timestamp"></vaadin-date-time-picker>
          <vaadin-text-field label="Name" path="name"></vaadin-text-field>
        </vaadin-form-layout>
      </vaadin-crud>
    `;
  }
}
