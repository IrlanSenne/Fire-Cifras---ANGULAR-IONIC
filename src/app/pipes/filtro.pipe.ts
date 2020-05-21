import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(musicas: any[], texto: string) : any[] {
 
    if( texto.length === 0 ){return musicas; }
    
    texto = texto.toLocaleLowerCase();

   return musicas.filter(  musica  => {
      return musica.titulo.toLocaleLowerCase().includes(texto)
          || musica.cifra.toLocaleLowerCase().includes(texto)
          || musica.banda.toLocaleLowerCase().includes(texto)
    });





  }

}
