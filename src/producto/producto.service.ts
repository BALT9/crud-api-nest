import { Injectable } from '@nestjs/common';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
    // en servicio se importa entity
    // servicio que sera usado en el controlador

    // atributo productos es de tipo producto Entity
    private productos: Producto[] = [{id: 1, nombre: "teclado", precio: 45.9, estado: true}];

    // returna un array de productos 
    listar():Producto[]{
        return this.productos;
    }

    // any recibe cualquier tipo de dato 
    guardar(datos:any):string{
        return "Guarda prod de Servicios..."+datos;
    }

    mostrar(id:number):string{
        return "Mostrar prod de Servicios..."+id;
    }

    modificar(id:number, datos:any):string{
        return "modifical prod de Servicios..."+id;
    }

    eliminar(id:number):string{
        return "eliminar prod de Servicios..."+id;
    }
}
