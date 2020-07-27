import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { File } from '@ionic-native/file/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  private conn: SQLiteObject;

  constructor(private sqlite: SQLite, private file: File) {
    this.conn = null;
  }

  public initDB(){
    this.sqlite.create({
      name: environment.dbConnection.name,
      location: this.file.externalDataDirectory,
      key: environment.dbConnection.key
    }).then((db: SQLiteObject) => {
      this.conn = db;
      this.createTables();
      console.log('base de datos creada');
    }).catch( e => {
      this.conn = null;
      console.log('Error al crear la base de datos::', e);
    });
  }

  public createTables(){
    this.conn.executeSql('create table if not exists comida(id number, id_unidad number, id_categoria number, cantidad number, nombre varchar(?), descripcion varchar(?))', [environment.name, environment.description]).then(data=>{console.log('tabla creada')}).catch(error =>{console.log('error al crear tabla')});
    this.conn.executeSql('create table if not exists categoria_comida(id number, nombre varchar(?), descirpcion varchar(?))', [environment.name, environment.description]).then(data=>{console.log('tabla creada')}).catch(error =>{console.log('error al crear tabla')});
    this.conn.executeSql('create table if not exists unidad_medida(id number, nombre varchar(?))', [environment.name]).then(data=>{console.log('tabla creada')}).catch(error =>{console.log('error al crear tabla')});
  }

  public insert(tableName: string, values: any[]){
    //this.conn.executeSql('insert into ? values()', [tableName])
  }
}
