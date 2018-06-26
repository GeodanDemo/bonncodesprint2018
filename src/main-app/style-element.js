/* WORKAROUND FOR REGISTER */
import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
  `<template>
  <style>
  :host {
      display: block;
      --geodan-regular-font: 'Open Sans Regular';
      --geodan-light-font: 'Open Sans',sans-serif;
      --geodan-heading1-fontsize: 36px;
      --geodan-heading2-fontsize: 24px;
      --geodan-heading3-fontsize: 17px;
      --geodan-light-fontweight: 300;
      --geodan-color: #333333;

      --geodan-button-normal: #ED3031;
      --geodan-button-hover:  #D60000;
      --geodan-button-pressed: #BB0C16;
      --geodan-button-disabled: #ECECEC;
      --geodan-button-corner-radius: 4px;

      --geodan-checkbox-unckeched: #E3E2E3;
      --geodan-checkbox-checked: #ED3031;

      --geodan-header-background:  #424242;
      
      color: var(--geodan-color);
  }
  
  h1 {
      font-family: var(--geodan-regular-font);
      font-size: var(--geodan-heading1-fontsize);
  }
  h2 {
      font-family: var(--geodan-regular-font);
      font-size: var(--geodan-heading2-fontsize);
  }
  h3 {
      font-family: var(--geodan-regular-font);
      font-size: var(--geodan-heading3-fontsize);
  }

  .title {
      font-family: var(--geodan-regular-font);
      font-size: var(--geodan-heading1-fontsize);
  }
  paper-button.geodan {
      background:var(--geodan-button-normal);
      color:white;
      border-radius:var(--geodan-button-corner-radius); 
      --paper-button-ink-color: var(--geodan-button-normal);
      --paper-button-disabled: var(--geodan-button-disabled);
  }
  paper-button.geodan:hover {
      background:var(--geodan-button-hover);
  }

  paper-button.geodan a{
      color: white;
  }
  paper-icon-button {
      color: var(--geodan-button-normal);
      --paper-icon-button-ink-color: var(--geodan-button-normal);
  }

  a {
      text-decoration: none;
      color: var(--geodan-color);
  }

  paper-header, app-header {
      height: 80px;
  }

  paper-toolbar, app-toolbar {
      background: var(--geodan-header-background);
      color: white;
      --app-toolbar-font-size: 18px;
      --paper-toolbar-font-size: 18px;
      font-family: var(--geodan-light-font);
      font-weight: var(--geodan-light-fontweight);
      height: 80px;
  }

  paper-tab {
      --paper-tab-ink: var(--geodan-button-normal);
  }

  paper-tabs {
      --paper-tabs-selection-bar-color: var(--geodan-button-normal);

  }

  paper-checkbox {
      --paper-checkbox-unchecked-color: var(--geodan-checkbox-unchecked);
      --paper-checkbox-unchecked-ink-color: var(--geodan-checkbox-checked);
      --paper-checkbox-checked-color: var(--geodan-checkbox-checked);
      --paper-checkbox-checked-ink-color: var(--geodan-checkbox-unchecked);
      --paper-checkbox-checkmark-color: white;
  }
  #notes {
    @apply --layout-vertical;
    height: 90%;
    overflow: auto;
  }

</style>
  </template>`;
styleElement.register('style-element');