import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'; // importar get,post,delete,update
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';

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
    funCrear(@Body() datos: CreateProductoDto ){
        return this.prodService.guardar(datos);
    }

    @Get(":id")
    funMostrar(@Param('id') id:number ){
        return this.prodService.mostrar(id);
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
