import { Component } from '@angular/core';
import { OserviceService } from './services/oservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  reponse: any;
  constructor(private oservice: OserviceService) { }

  getToken() {
    this.oservice.getToken().subscribe(rep => {
      this.reponse = rep;
      alert(this.reponse.access_token);
    });
  }
}
