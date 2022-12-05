import {Component, Input, OnInit} from '@angular/core';
import {Trip} from "../../Trip";
import {TripsDataService} from "../../trips-data.service";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'app-trip-card',
    templateUrl: './trip-card.component.html',
    styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
    @Input() trip: Trip | null = null;
    @Input() color: string = 'black';
    stars: number = 3;

    constructor(public tripsDataService: TripsDataService) {
    }

    ngOnInit() {
        if (this.trip === null) return;
        this.stars = this.trip.starRating;
    }

    updateRating(newRating: number): void {
        if (this.trip === null) return;
        this.trip.starRating = (this.trip.starRating * this.trip.numberOfReviews + newRating) / (this.trip.numberOfReviews + 1)
        this.trip.numberOfReviews++;
    }
}
