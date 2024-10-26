import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/auth/services/storage/storage.service';


const BASIC_URL = ["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  postCar(carDto: any):Observable<any>{
    return this.http.post(BASIC_URL + "/api/admin/car",carDto,{headers:this.createAuthorizationHeader()});
  }

  getAllCar():Observable<any>{
    return this.http.get(BASIC_URL + "/api/admin/allCar",{headers:this.createAuthorizationHeader()});

  }

  deleteCar(id: number):Observable<any>{
    return this.http.delete(BASIC_URL + "/api/admin/cars/"+id,{headers:this.createAuthorizationHeader()});
  }

  getCarById(id:number):Observable<any>{
    return this.http.get(BASIC_URL +"/api/admin/car/"+id,{headers:this.createAuthorizationHeader()});
  }

  updateCar(carId:number,carDto: any):Observable<any>{
    return this.http.put(BASIC_URL+"/api/admin/car/"+ carId,carDto,{headers:this.createAuthorizationHeader()});
  }

  getCarBookings():Observable<any>{
    return this.http.get(BASIC_URL+"/api/admin/car/bookings",{headers:this.createAuthorizationHeader()});
  }

  changeBookingsStatus(bookingId:number,status: string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/car/booking/${bookingId}/${status}`,{headers:this.createAuthorizationHeader()});
  }

  searchCar(searchCarDto: any):Observable<any>{
    return this.http.post(BASIC_URL+"/api/admin/car/search",searchCarDto,{headers:this.createAuthorizationHeader()});
  }

  getAllComment():Observable<any>{
    return this.http.get(BASIC_URL + '/api/admin/all-comment',{headers:this.createAuthorizationHeader()});
  }

  changeCarStatus(carId:number,status:string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/car/${carId}/${status}`,{headers:this.createAuthorizationHeader()});
  }

  getAllCarFix():Observable<any>{
    return this.http.get(BASIC_URL + '/api/admin/carFix',{headers:this.createAuthorizationHeader()});
  }


  changeStatusCarFix(carFixId:number,status:string):Observable<any>{
    return this.http.get(BASIC_URL + `/api/admin/carFix/${carFixId}/${status}`,{headers:this.createAuthorizationHeader()});
  }

postContent(contentDto:any):Observable<any>{
  return this.http.post(BASIC_URL + `/api/admin/content/${StorageService.getUserId()}`,contentDto,{headers:this.createAuthorizationHeader()});
}

getCarFixById(carFixId:number):Observable<any>{
  return this.http.get(BASIC_URL + `/api/admin/carFix/${carFixId}`,{headers:this.createAuthorizationHeader()});
}

postCarFix(carFixId:number,paymentCarFixDto:any):Observable<any>{
  paymentCarFixDto.userId = StorageService.getUserId();
  return this.http.post(BASIC_URL + `/api/admin/payment/${carFixId}`,paymentCarFixDto,{headers:this.createAuthorizationHeader()});
}


  createAuthorizationHeader():HttpHeaders{
    let authHeaders : HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }
}