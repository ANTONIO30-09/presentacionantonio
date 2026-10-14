import { Component, HostListener, signal } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  templateUrl: "./header.html",
  styleUrl: "./header.scss",
})
export class Header {
  isScrolled = signal(false);
  mobileNavOpen = signal(false);

  @HostListener("window:scroll", [])
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 100);
  }

  toggleMobileNav(): void {
    this.mobileNavOpen.update((v) => !v);
  }
}
