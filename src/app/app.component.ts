import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  clearing(){
    (<HTMLFormElement>document.getElementById("cari")).reset();
   }
  onSearch(name: any) {
     this.router.navigate(['/produkCari', name])
  }
}
