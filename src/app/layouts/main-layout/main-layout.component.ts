import { Component, OnInit, OnDestroy, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  sidenavMode:MatDrawerMode='push';
  isSidenavOpen: boolean = true;

  constructor(private router: Router) { }

  /**
  * Gets current side nav mode for page refresh, if any.
  * Sidenav mode is stored in localStorage for later use.
  */
  private wasSidenavOpen(): boolean {
    let savedState = localStorage.getItem("sidenavOpen");

    if (savedState) {
      return JSON.parse(savedState);
    }

    return true;
  }

  /**
  * Sets correct sidenav mode based on window size.
  */
  private setSidenavMode() {
    if (window.innerWidth < 768) {
      this.sidenavMode = 'over';
      this.isSidenavOpen = false;

      this.sidenav?.close();
    }
    else {
      this.sidenavMode = 'side';
      this.isSidenavOpen = this.wasSidenavOpen();
      if (this.isSidenavOpen)
        this.sidenav?.open();
    }
  }


  /**
  * Handes window resilze.
  *
  * @param event Event args.
  */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setSidenavMode();
  }

  /**
  * Method executed on component initialization.
  */
  ngOnInit() {
    this.setSidenavMode();
  }


  /**
  * Toggles sidenav based on current sidenav settings.
  */
  toggleSidenav() {
    if (this.sidenavMode === 'side') {
      this.sidenav?.toggle();
      this.isSidenavOpen = !this.isSidenavOpen;

      // Keep open state for desktops only
      localStorage.setItem("sidenavOpen", JSON.stringify(this.isSidenavOpen));
    }
    else {
      this.sidenav?.open();
    }
  }
}
