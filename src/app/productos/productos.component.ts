import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: false,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  onClick() {
    console.log("¡Botón clickeado!");

}
detallesVisibles: boolean = false; // Asegúrate de definir la propiedad

  mostrarDetalles() {
    this.detallesVisibles = true;
  }

  cerrarDetalles() {
    this.detallesVisibles = false;
  }
}
