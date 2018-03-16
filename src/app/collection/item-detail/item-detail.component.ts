import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FurnitureService } from '../../shared/service/furniture.service';
import { Furniture } from '../../shared/model/furniture.model';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  categorySelected;
  itemSelected;

  item: Furniture = new Furniture();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private furnitureSvc: FurnitureService
  ) { }

  ngOnInit() {
    this.categorySelected = this.route.snapshot.params['cat_id'];
    this.itemSelected = this.route.snapshot.params['it_id'];

    const result = this.furnitureSvc.getFurniture(this.itemSelected);

    if(result == undefined){
      this.router.navigate(['/home']);
    } else {
      this.item = result;
    }
  }

  backToCollection(){
    this.router.navigate(['/collection', this.categorySelected, 'furniture']);
  }

}
