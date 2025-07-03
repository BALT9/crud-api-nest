import { Controller, Delete, Get, Patch, Post } from '@nestjs/common'; // importar get,post,delete,update

// ruta base 'producto'
@Controller('producto')
export class ProductoController {
    // aqui van las funciones

    // funcion que retorna el tipo de dato
    @Get()
    funListar():string{
        return "Listar Producto";
    }

    @Post()
    funCrear():string{
        return "Guardar producto..";
    }

    @Get(":id")
    funMostrar(){
        return "Mostrando producto";
    }

    @Patch(":id")
    funModificar(){
        return "Modificar producto";
    }

    @Delete(":id")
    funEliminar(){
        return "Eliminar producto";
    }
}
