import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class GroupsService {
  constructor(private http: Http) {}
}
