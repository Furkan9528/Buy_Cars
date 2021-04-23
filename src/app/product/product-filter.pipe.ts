import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText?filterText.toLocaleUpperCase():null
    //"?" if işareti demek var mı  
    //":" else
    // ? if (filtertext){
    //  filtertext.toLocalUpperCase()
    // }
    // :  else{
    //   null
    // }

    return filterText?value.filter((p:Product)=>p.name
    .toLocaleUpperCase().indexOf(filterText)!==-1):value;
  }

}
