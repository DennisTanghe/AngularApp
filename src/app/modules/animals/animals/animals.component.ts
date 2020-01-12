import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from 'src/app/core/data-loader.service';
import { Animal } from '../shared/animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  public animalData: Animal[] = null;

  constructor(private dataLoader: DataLoaderService) { 
    this.dataLoader.getData("http://localhost:4200/assets/animals.json").subscribe(
      (data: Animal[]) => this.animalData = data,
      (error: any) => {
        alert("Problem!");
        console.error("Could not load the animals.json file!", error);
      }
    );
  }

  ngOnInit() {

  }

}
