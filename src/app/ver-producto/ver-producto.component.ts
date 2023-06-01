import { Component, OnInit } from '@angular/core';
import { PlatillosService } from '../servicios/platillos.service';
@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.css']
})
export class VerProductoComponent implements OnInit {
  platillos!: any[];

  constructor(private platillosService: PlatillosService) { }

  ngOnInit() {
    this.obtenerPlatillos();
  }

  obtenerPlatillos() {
    this.platillosService.get().subscribe(
      (data) => {
        this.platillos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminarPlatillo(platilloId: number) {
    // Lógica para eliminar el platillo con el ID proporcionado
  }

  editarPlatillo(platilloId: number) {
    // Lógica para editar el platillo con el ID proporcionado
  }

}
