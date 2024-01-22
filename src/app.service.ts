import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  calcAvg(){
    const arr = [ 1 ,2, 3, 4, 5 ,6 ] 


    let sum = 0 
    for (let el of arr) {
      sum += el 
    }
    
    return sum / arr.length;
  }
}
