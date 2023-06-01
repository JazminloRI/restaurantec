import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platillo } from '../servicios/platillos.service';
import { PlatillosService } from '../servicios/platillos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  platillo: Platillo | undefined;
  @Output() platilloActualizado = new EventEmitter<Platillo>();


  constructor(private platillosService: PlatillosService) { }

  ngOnInit(): void {

    const platilloId = 2; // ID del platillo que deseas obtener

    this.platillosService.getPlatilloById(platilloId).subscribe((platillo) => {
      this.platillo = platillo;
    });
  
  }



  guardarCambios() {
    // Lógica para guardar los cambios del platillo
    // Puedes enviar el platillo actualizado al componente padre mediante el evento platilloActualizado.emit()
    this.platilloActualizado.emit(this.platillo);
  }

}
