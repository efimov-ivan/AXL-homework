import {observable, makeObservable} from "mobx";

class Store{
    text: string = '';
    category: string = '';
    page: number = 1;
  
    constructor(){
      makeObservable(this, {
        text: observable,
        category: observable,
        page: observable,
      });
    }
  
    searchByText(text: string){
      this.text = text;
      this.page = 1;
    }
    
    searchByCategory(category: string){
      this.category = category;
      this.page = 1;
    }

    nextPage(page: number){
      this.page = page;
    }
  }
  
  export const store = new Store();
  