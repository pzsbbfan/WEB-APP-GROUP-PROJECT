import {Injectable} from '@angular/core';
import { Survey } from './survey.model';
import {Observable,from} from 'rxjs';


@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey('Lucas','T OR F', "2012-O4-O3","2012-10-20",'fan',['ashdkjashdkashkdashkjdhaskjdhkjashdkjsa','456','789','sadsa','dsadsad','asdsads']),
        new Survey('zhikun','MC', "2012-O4-O3","2012-O4-O3",'fan',['123','456']),
        new Survey('evelyn','MC', "2012-O4-O3","2012-O4-O3",'dsadas',['123','456'])

    ]


    getSurveys():Observable<Survey[]>
    {
        return from([this.surveys]);
    }

}
