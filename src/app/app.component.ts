import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'cv';
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    /**
     * The addSvgIcon registers the icon by taking-in 2 arguments, the first one being the icon label which is of type string.
     * The second argument is the relative URL path pointing to the location of the icon.
     * This is of type SafeResourceUrl.
     * To parse the url path string into SafeResourceUrl, we can make use of the DomSanitizer provided by Angular.
     */
    this.matIconRegistry.addSvgIcon(
      'html',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/html.svg')
    );
  }
}
