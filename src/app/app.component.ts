import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';
import { DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DxButtonModule,
    DxTextBoxModule,
    DxValidatorModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Validaciones';

  login: string = '';

  helloWorld() {
    alert('Hello world!');
}
}
