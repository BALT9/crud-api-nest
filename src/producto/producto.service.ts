import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductoService {

    // servicio que sera usado en el controlador
    listar():string{
        return "Lista de prod Servicios...";
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
