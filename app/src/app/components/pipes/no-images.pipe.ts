import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImages'
})
export class NoImagesPipe implements PipeTransform {

  transform(imagenes: any[]): unknown {

    //si no hay imagenes le enseñamos la ruta de la imagen
    return imagenes === undefined  ? '../../assets/noimage.png': imagenes
  }

}
