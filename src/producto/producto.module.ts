import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoService } from './producto.service';

@Module({
    //   importa el controlador   
    controllers: [ProductoController],
    providers: [ProductoService]
})
export class ProductoModule { }
