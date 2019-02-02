import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'PeopleFilter',
})
export class FilterPipes implements PipeTransform {
	
	transform(value: any, queryText: string){
		if(queryText!=''){
			queryText = queryText.toString().toLowerCase();
			return value.filter( (item: any) => item.name.toString().toLowerCase().indexOf(queryText) !== -1);
		}
		return value;
	}
}

