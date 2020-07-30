import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  constructor() {
  }

  public initDB(){
    
  }

  public createTables(){
    
  }

  public insert(tableName: string, values: any[]){
    //this.conn.executeSql('insert into ? values()', [tableName])
  }
}
