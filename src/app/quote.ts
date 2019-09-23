export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string,public description: string,public author: string,public fan: string,public completeDate:Date,public vote: string,public votes: string){
      this.showDescription=false;
    }
  }