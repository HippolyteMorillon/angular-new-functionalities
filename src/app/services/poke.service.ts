import { Injectable, WritableSignal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:8080/';
  private readonly trainers: WritableSignal<any[]> = signal([]);
  private readonly trainer: WritableSignal<any> = signal({});
  constructor(private readonly http: HttpClient) {}
  // Method to call the API
  fetchTrainers(): void {
    this.http
      .get<any[]>(this.apiUrl + 'poke/trainers')
      .pipe(
        // Catch errors and return an empty array if the call fails
        catchError((error) => {
          console.error('Error fetching posts:', error);
          return of([]);
        })
      )
      .subscribe((trainers) => {
        // Set the signal's value when data is received
        this.trainers.set(trainers);
      });
  }

  fetchTrainer(trainerId: string): void {
    this.http
      .get<any[]>(this.apiUrl + 'poke/trainer/' + trainerId, {
        withCredentials: true,
      })
      .pipe(
        // Catch errors and return an empty array if the call fails
        catchError((error) => {
          console.error('Error fetching posts:', error);
          return of([]);
        })
      )
      .subscribe((trainer) => {
        // Set the signal's value when data is received
        this.trainer.set(trainer);
      });
  }

  createTrainer(trainer: any): void {
    this.http
      .post<any[]>(this.apiUrl + 'poke/trainer', trainer, {
        withCredentials: true,
      })
      .pipe(
        // Catch errors and return an empty array if the call fails
        catchError((error) => {
          console.error('Error creating :', error);
          return of({});
        })
      )
      .subscribe((trainer) => {
        // Set the signal's value when data is received
        this.trainer.set(trainer);
      });
  }

  get trainersSignal() {
    return this.trainers.asReadonly();
  }

  get trainerSignal() {
    return this.trainer.asReadonly();
  }

  login(form: any) {
    console.log('ici');
    return this.http
      .post<any>(this.apiUrl + 'login', form)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
