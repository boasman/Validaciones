import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxButtonModule } from 'devextreme-angular';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DxButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Validaciones';

  helloWorld() {
    alert('Hello world!');
}
}
