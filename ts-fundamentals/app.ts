import {Movie, Logger, Director, CastMember as Actor} from './modules/interfaces'
import { Performer, Documentary, Musical} from './modules/classes';
import * as Utility from './modules/functions';

let allMovies:Movie[]=Utility.getallMovies();
