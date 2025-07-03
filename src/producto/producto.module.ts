import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';

@Module({
//   importa el controlador   
  controllers: [ProductoController]
})
export class ProductoModule {}
