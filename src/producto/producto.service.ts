import { Injectable, NotFoundException } from '@nestjs/common';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
    // en servicio se importa entity
    // servicio que sera usado en el controlador

    // atributo productos es de tipo producto Entity
    private productos: Producto[] = [
        {id: 1, nombre: "teclado", precio: 45.9, estado: true},
        {id: 2, nombre: "camara", precio: 300.9, estado: true}
    ];

    private  id = 3;

    // returna un array de productos 
    listar():Producto[]{
        return this.productos;
    }

    // any recibe cualquier tipo de dato y retorna un tipo de dato Producto
    guardar(datos: any):Producto{

        const nuevoProducto: Producto = {
            id: this.id++,
            ...datos
        }

        this.productos.push(nuevoProducto);

        return nuevoProducto;
    }

    mostrar(id:number):Producto{
        const prod = this.productos.find(p => p.id == id)
        if(!prod){
            throw new NotFoundException('producto no encontrado..');
        }
        return prod;
    }

    modificar(id:number, datos:any):string{
        return "modifical prod de Servicios..."+id;
    }

    eliminar(id:number):string{
        return "eliminar prod de Servicios..."+id;
    }
}
