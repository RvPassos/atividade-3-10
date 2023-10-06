export class Livros {
    id!: number
    titulo!: string
    autor!: string

    constructor(id:number, autor:string, titulo:string){
        this.id = id;
        this.autor = autor;
        this.titulo = titulo;
    }
}