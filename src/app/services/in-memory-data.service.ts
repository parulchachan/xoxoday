import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { RegistrationDetails } from '../authFolder/models/RegistrationDetails';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const registrationDetails:RegistrationDetails[] = [
      {id:1,firstname: 'parul', email: 'parul.chachan@gmail.com',lastname:'',domain:'',password:'',teamIds:[''] },
      {id:1,firstname: 'parul', email: 'parul.chachan@gmail.com',lastname:'',domain:'',password:'',teamIds:[''] },
    ];
    
    return {registrationDetails};
  }
  constructor() { }

  genId(registrationDetails:RegistrationDetails[]): number {
    return registrationDetails.length > 0 ? Math.max(...registrationDetails.map(data => data.id)) + 1 : 1;
  }
}
