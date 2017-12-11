import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Status} from "../classes/status";
import {Observable} from "rxjs";
import "rxjs/add/observable/from";
import "rxjs/add/operator/switchMap";
import 'rxjs/add/observable/of';

@Component({
	templateUrl: "./templates/home.html"
})

export class HomeComponent implements OnInit {

	// empty array of lat/long points
	public positions: any = [];

	constructor() {}

	ngOnInit() : void {

		// OnInit, make call to populate positions array thru the Observable
		this.showMarkersFromObservable();
	}

	// This is a dummy example. This just creates random points for the map.
	// Your points will come from your Hub Service
	getRandomMarkers() : any {
		let randomLat: number, randomLng: number;

		let positions = [];
		for (let i = 0 ; i < 9; i++) {
			randomLat = Math.random() * (43.7399 - 43.7300) + 43.7300;
			randomLng = Math.random() * (-79.7600 - -79.7699) + -79.7699;
			positions.push([randomLat, randomLng]);
		}
		return positions;
	}

	// this is an example that uses an Observable - much like
	// the call to your service. This works, and is called OnInit,
	// and when the button is pushed too.
	showMarkersFromObservable() {
		Observable.of(this.getRandomMarkers()) // Think this as http call
			.subscribe( positions => {
				this.positions = positions;
			});
	}

}
