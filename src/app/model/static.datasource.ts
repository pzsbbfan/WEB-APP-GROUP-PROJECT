import {Injectable} from '@angular/core';
import { Survey } from './survey.model';
import {Observable,from} from 'rxjs';


@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey('Lucas','T OR F', new Date(2012,0O4,0O3),new Date(2012,10,20),'fan',['ashdkjashdkashkdashkjdhaskjdhkjashdkjsa','456','789','sadsa','dsadsad','asdsads']),
        new Survey('zhikun','MC', new Date(2012,0O4,0O3),new Date(2012,10,20),'fan',['123','456']),
        new Survey('evelyn','MC', new Date(2012,0O6,0O6),new Date(2012,10,20),'dsadas',['123','456'])

    ]


    getSurveys():Observable<Survey[]>
    {
        return from([this.surveys]);
    }

}
