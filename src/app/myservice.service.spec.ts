import { TestBed } from '@angular/core/testing';

import { MyserviceService } from './myservice.service';

describe('MyserviceService', () => {

  // let ob = TestBed.inject(MyserviceService)
  // let ob = new MyserviceService();

  it("Testing divide method", () =>{
    let ob = TestBed.inject(MyserviceService)
    var result = ob.divide(20,10);
    expect(result).toBe(2)
  })
});
