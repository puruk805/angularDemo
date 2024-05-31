import { TestBed } from '@angular/core/testing';

import { NewserviceService } from './newservice.service';

describe("Test from new service", () => {
 let ob= new NewserviceService();
 it("Testing add method", () =>{
    var result = ob.add(10,20);
    expect(result).toBe(30)
  })

});
