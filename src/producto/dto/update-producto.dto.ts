import { PartialType } from "@nestjs/mapped-types";
import { CreateProductoDto } from "./create-producto.dto";

// hereda de create-producto.dto.ts 
export class UpdateProductoDto extends PartialType(CreateProductoDto){
    
}