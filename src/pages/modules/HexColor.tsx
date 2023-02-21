//  Declare Hexcolor Class with Constructor

import { isHexColor } from "class-validator";


export class HexColor {
    color: string;
   
    constructor(message: string) {
      if (isValidColor(message)){
      this.color = message;
      }else{
        throw new Error("Not a valid Hexcolor");
      }
    }
  }

  function isValidColor(color: string){
    return isHexColor(color);
}