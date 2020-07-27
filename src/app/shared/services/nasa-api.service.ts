import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Apod } from '../model/apod';
import { Observable, ObservableLike } from 'rxjs';


const APOD_URL='https://api.nasa.gov/planetary/apod';
const MARS_URL='https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000';
const API_KEY='MMTQQY25GWjri9utr4RxcChkPx5iPOART84Ao1dS';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  //Dependecy Inhection HttpClient
  constructor(private httpClient:HttpClient) { }

  getApod():Observable<Apod>{
    //return this.httpClient.get<any>(APOD_URL + '?api_key=' + API_KEY)
    //Template literals
    return this.httpClient.get<Apod>(`${APOD_URL}?api_key=${API_KEY}`);
  }

  getMarsImages(camara):Observable<any>{
    return this.httpClient.get(`${MARS_URL}&camera=${camara}&api_key=${API_KEY}`);
  }
} 
   