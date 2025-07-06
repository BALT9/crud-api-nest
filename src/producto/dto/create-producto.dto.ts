import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateProductoDto{

    @IsString() //decorador que dice que nombre tiene que ser si o si de tipo string
    nombre: string;

    @IsNumber()
    precio: number;

    @IsBoolean()
    estado: boolean;
}