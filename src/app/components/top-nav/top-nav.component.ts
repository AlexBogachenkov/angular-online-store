import { Component } from '@angular/core';
import { MatButton } from "@angular/material/button";
import { MatToolbar } from "@angular/material/toolbar";

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {

}
