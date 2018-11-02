import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // ViewChild dekorator digunakan untuk  mendaptkan akses ke komponen anak,
  // yang ditemukan di template, sehingga Anda dapat mengakses properti dan methodnya
  @ViewChild('nameInput') nameref:ElementRef;
  @ViewChild('amountInput') amountRef:ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

onAddItem(){
    const ingName=this.nameref.nativeElement.value;
    const ingAmount=this.amountRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }  
}
