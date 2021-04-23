import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Category List"

  categories : Category[] = [
    {id:1, name:"Diesel"}, 
    {id:2, name:"Essence"}, 
    {id:3, name:"Essence"}, 
    {id:4, name:"Diesel"}, 
    {id:5, name:"Electric"}, 
    {id:6, name:"Electric"}
    
  ]

  ngOnInit(): void {
  }

}
