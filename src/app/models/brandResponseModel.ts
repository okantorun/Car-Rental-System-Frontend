import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponseMode extends ResponseModel{
    data:Brand[];
}