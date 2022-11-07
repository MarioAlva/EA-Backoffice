import { Component, OnInit } from '@angular/core';
import series from '../../data/series';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nextCarrousel(){
	$('.home-carrousel').animate({
		scrollLeft: "+=300px"
	}, "slow");
  }

  backCarrousel(){
	$('.home-carrousel').animate({
		scrollLeft: "-=300px"
	}, "slow");
  }


  series = series;

}
