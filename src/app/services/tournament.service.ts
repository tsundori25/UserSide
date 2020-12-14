import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  constructor(private http: HttpClient) {}

  getIndexTournament(page: any) {
    return this.http.get(`${baseUrl}tournament`).pipe(
      map((response: any) => {
        console.log(response);
        return response.resultIndex;
      })
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
}
