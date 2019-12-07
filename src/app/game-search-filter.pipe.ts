import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameSearchFilter',
  pure: false
})
export class GameSearchFilterPipe implements PipeTransform {

  transform(list: any[], filter: String): any {
    if (!list || !filter){
      return list;
    }

    return list.filter(game => game.title.toLowerCase().includes(filter.toLowerCase()))
  }

}
