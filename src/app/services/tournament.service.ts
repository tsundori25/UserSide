import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getDetailTournament(id: string) {
    return this.http.get(`${baseUrl}tournament/detail/${id}`).pipe(
      map((body: any) => {
        return body.resultDetailTournament.data;
      })
    );
  }
  getIndexTournament() {
    return this.http.get(`${baseUrl}tournament?page=1`).pipe(
      map(
        (body: any) => {
          return body.resultIndex.data;
        },
        (catchError) => {
          console.log(catchError);
        }
      )
    );
  }

  registerTournamentSolo(userId: string, tournamentId: string) {
    return this.http
      .patch(`${baseUrl}${tournamentId}/register/${userId}`, null)
      .subscribe((sucess: any) => {
        window.alert(sucess.notification);
      });
  }

  registerTournamentTeam(userId: string, tournamentId: string) {
    return this.http
      .patch(`${baseUrl}${tournamentId}/register/${userId}`, null)
      .subscribe((sucess: any) => {
        window.alert(sucess.notification);
      });
  }
  getTurnament() {
    return this.http.get(
      `https://s1mple-tours-be.herokuapp.com/tournament?page=1`
    );
  }
}
