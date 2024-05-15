class Pessoa {

    constructor (Nome,DataNasc,cpf,Sexo,Estado_civ,Email,Telefone) {
        this.id = null;
        this.nome = Nome;
        this.cpf = cpf;
        this.dataNasc = DataNasc;
        this.email = Email;
        this.estado_civ = Estado_civ
        this.sexo = Sexo;
        this.telefone = Telefone
        
    }
    get getNome(){
        return this.nome;
    }
    get getCpf(){
        return this.cpf;
    }
    get getDataNasc(){
        return this.dataNasc;
    }
    get getEmail(){
        return this.email;
    }
    get getEstado_civ(){
        return this.estado_civ;
    }
    get getSexo(){
        return this.sexo;
    }
    get getTelefone(){
        return this.telefone;
    }
    set setNome(Nome){
        this.nome = Nome;
    }
    set setCpf(Cpf){
        this.cpf = Cpf;
    }
    set setDataNasc(DataNasc){
        this.dataNasc = DataNasc;
    }
    set setEmail(Email){
        this.email = Email;
    }
    set setEstado_civ(Estado_civ){
        this.estado_civ = Estado_civ;
    }
    set setSexo(Sexo){
        this.sexo = Sexo;
    }
    set setTelefone(Telefone){
        this.telefone = Telefone;
    }

    // validarCPF(strCPF) {
    //     var Soma;
    //     var Resto;
    //     Soma = 0;
    //     if (strCPF == "00000000000") 
    //     return "CPF Incompleto";
    
    //     for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    //     Resto = (Soma * 10) % 11;
    
    //     if ((Resto == 10) || (Resto == 11)) Resto = 0;
    //     if (Resto != parseInt(strCPF.substring(9, 10))) return "CPF Invalido!";
    
    //     Soma = 0;
    //     for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    //     Resto = (Soma * 10) % 11;
    
    //     if ((Resto == 10) || (Resto == 11)) Resto = 0;
    //     if (Resto != parseInt(strCPF.substring(10, 11))) 
        
    //     return "Seu CPF está Invalido!";
    
    //     return strCPF;
    // }


    


}



module.exports = Pessoa