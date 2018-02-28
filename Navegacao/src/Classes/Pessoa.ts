export class Pessoa {
    private _Codigo: number;
    private _Nome: String;

    constructor(){}

    get nome() : String {
        return this._Nome
    }

    get codigo() : number {
        return this._Codigo
    }

    set nome(nome: String) {
        this._Nome = nome
    }

    set codigo(codigo: number) {
        this._Codigo = codigo
    }
}