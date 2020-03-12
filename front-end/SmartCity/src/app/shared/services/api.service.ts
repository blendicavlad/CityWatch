import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Ride } from '../models/ride';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  firstPathSeq = 'http://blendicavlad';
  randomString = '-fl7d';
  lastPathSeq = '.localhost.run';
  basePath = '';

  public currentUser;

  constructor(private htttp: HttpClient) {
    this.constructBasePath();
  }

  constructBasePath(random?: string) {
    this.basePath = '';
    if (random) {
      this.basePath += this.firstPathSeq + random + this.lastPathSeq;
    } else {
      this.basePath += this.firstPathSeq + this.randomString + this.lastPathSeq;
    }
  }

  public login(user: User): Observable<any> {
    return this.htttp.post(this.basePath + '/auth/login', user);
  }

  public signUp(user: User): Observable<any> {
    return this.htttp.post(this.basePath + '/auth/signup', user);
  }

  public loginGoogle(): Observable<any> {
    return this.htttp.post(
      this.basePath + `/oauth2/authorize/google?redirect_uri=${'http://localhost:4200/'}`,
      {}
    );
  }

  insertRide(ride: Ride): Observable<any> {
    return this.htttp.post(this.basePath + '/ride_share/add', ride);
  }

  getRides(): Observable<any> {
    return this.htttp.get(this.basePath + '/ride_share/list');
  }

  public getAllMarkers(): Observable<any> {
    return this.htttp.get(this.basePath + '/request/list');
  }

  public setMarker(payload): Observable<any> {
    return this.htttp.post(this.basePath + '/request/add', payload);
  }

  public getCurrentUser() {
    this.htttp.get(this.basePath + '/user/me').subscribe(user => {
      this.currentUser = user;
    });
  }

  public updateMarker(payload, id) {
    return this.htttp.post(
      this.basePath + `/request/update/?request_id=${id}`,
      payload
    );
  }

  public getAddress(lat, lng): Observable<any> {
    return this.htttp.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      { responseType: 'text' }
    );
  }
  getTraffic(street: string): Observable<any> {
    return this.htttp.get(this.basePath + '/congestion_data/get?streetName=' + street);
  }
}
