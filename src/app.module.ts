import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  // importa los modulos creados 
  imports: [ProductoModule, UsuarioModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
