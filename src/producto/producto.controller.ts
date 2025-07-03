import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'; // importar get,post,delete,update
import { ProductoService } from './producto.service';

// ruta base 'producto'
@Controller('producto')
export class ProductoController {

    // constructor que llama al servicio producto y a sus funciones
    constructor(private readonly prodService:ProductoService){

    }

    // aqui van las funciones

    // funcion que retorna el tipo de dato
    @Get()
    funListar():any{
        // llama al servicio -> entity
        return this.prodService.listar();
    }

    @Post()
    funCrear():string{
        return this.prodService.guardar({nombre: "teclado"});
    }

    @Get(":id")
    funMostrar(){
        return this.prodService.mostrar(1);
    }

    @Patch(":id")
    funModificar(){
        return this.prodService.modificar(1,{});
    }

    @Delete(":id")
    funEliminar(){
        return this.prodService.eliminar(1);
    }
}
