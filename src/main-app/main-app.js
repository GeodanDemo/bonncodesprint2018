import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import './style-element.js';

/**
 * @customElement
 * @polymer
 */
class MainApp extends PolymerElement {
  static get template() {
    return html`
      <style include="style-element">
        /* Additional styles can go here */
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
      </style>
      <paper-toolbar>
      <div slot="middle" class="title">Geodan op de osgeo codesprint</div>
      <div slot="bottom" class="title">Bonn, 2018</div>
      </paper-toolbar>
      <p>
      Bij geodan maken we veel gebruik van open-source GIS software. Je hebt vast wel eens gewerkt met <a href="https://qgis.org">QGIS</a> en de meesten van ons hebben ook wel gehoord van geoserver, postgis, gdal en nog een hele lijst van pakketten.
      Maar wie zijn eigenlijk de mensen die die software maken? Zijn het bedrijven? Werken ze samen? Waarom doen ze het eigenlijk?
      </p>
      <p>
        Bijna alle open source GIS software is bij elkaar is gebracht onder een paraplu die OSGEO heet. Je kent het vast ook van de bijeenkomsten die ze organiseren, zoals de FOSS4GNL op 11 juli in Almere of het grotere FOSS4G dat elk jaar op een andere plek in de wereld plaatsvindt.
      </p>
      <p>
        Minder bekend zijn de code-sprints die elk jaar worden georganiseerd. En dit zijn juist hele interessante bijeenkomsten omdat hier de ontwikkelaars bij elkaar zitten om samen te werken en nieuwe ideeën uit te werken. Het is niet alleen een goede plek om te horen welke nieuwe technieken ontwikkeld worden maar ook om zelf nieuwe ideeën aan te dragen. Op die manier heb je directe invloed op wat er in jouw favoriete software pakket komt te zitten.
      </p>
      <img src="./images/codesprint.png"/>
      <p>
      Omdat het wel wordt gewaardeerd als je zelf ook wat werk inbrengt hebben Chris en ik ons beste been voorgezet en zijn we met een rugzak vol concepten naar de osgeo-codesprint in Bonn vertrokken, in de hoop dat we wat konden bijdragen maar ook om een beetje invloed te hebben op enkele van onze favoriete projecten
      </p>
      <p>
      Chris heeft zich daarbij met veel succes gestort op Potree, de snelste pointcloud viewer die er op het web beschikbaar is en op PDAL, een pakket waarmee je puntenwolken kunt verwerken.  Tom is bezig geweest met opslag van puntenwolken in postgis en het uitdenken van een natuurbrandmodule met het GRASS team.  Hieronder beschrijven we allebei onze ervaringen.
      </p>
      <h3>
      Potree - device orientation controls <sup>(Chris)</sup>
      </h3>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'main-app'
      }
    };
  }
}

window.customElements.define('main-app', MainApp);
