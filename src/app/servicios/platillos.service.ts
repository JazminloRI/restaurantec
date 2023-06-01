import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Platillo {
  id: number;
  nombre: string;
  descripcion: string;
  cantidad: number;
  costo: number;
}


@Injectable({
  providedIn: 'root'
})
export class PlatillosService {

private platillos: Platillo[] = [
  {
    id:0,
    nombre: 'Hamburguesa',
    descripcion: 'Deliciosa hamburguesa con carne jugosa',
    cantidad: 10,
    costo: 8.99
  },
  {
    id:1,
    nombre: 'Pizza',
    descripcion: 'Pizza con queso derretido y diversos ingredientes',
    cantidad: 5,
    costo: 12.99
  },
  {
    id:2,
    nombre: 'Ensalada',
    descripcion: 'Ensalada fresca con verduras y aderezo',
    cantidad: 15,
    costo: 6.99
  }
];
  constructor() { }

  create(platillo: Platillo): Observable<void> {
    this.platillos.push(platillo);
    return of(undefined);
    // Lógica para guardar el platillo en una API externa
    // Ejemplo con HttpClient:
    // return this.http.post('ruta-de-tu-api/platillos', platillo);
  }

  get(): Observable<Platillo[]> {
    return of(this.platillos);
    // Lógica para obtener los platillos de una API externa
    // Ejemplo con HttpClient:
    // return this.http.get<Platillo[]>('ruta-de-tu-api/platillos');
  }


  getPlatilloById(id: number): Observable<Platillo | undefined> {
    const platilloEncontrado = this.platillos.find((platillo) => platillo.id === id);
    return of(platilloEncontrado);
  }




  update(platillo: Platillo): Observable<void> {
    const index = this.platillos.findIndex(p => p.id === platillo.id);
    if (index !== -1) {
      this.platillos[index] = platillo;
    }
    return of(undefined);
    // Lógica para actualizar el platillo en una API externa
    // Ejemplo con HttpClient:
    // return this.http.put(`ruta-de-tu-api/platillos/${platillo.id}`, platillo);
  }

  delete(platillo: Platillo): Observable<void> {
    const index = this.platillos.findIndex(p => p.id === platillo.id);
    if (index !== -1) {
      this.platillos.splice(index, 1);
    }
    return of(undefined);
    // Lógica para eliminar el platillo en una API externa
    // Ejemplo con HttpClient:
    // return this.http.delete(`ruta-de-tu-api/platillos/${platillo.id}`);
  }
}
