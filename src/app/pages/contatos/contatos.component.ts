import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from '../../services/utils.service';
import { producerUpdatesAllowed } from '@angular/core/primitives/signals';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})

export class ContatosComponent {                              // Lógica do componente
  title = 'gatilDeglis';
  cidades: any;
  teste: any;


  form: FormGroup; // 🔹 Declara a propriedade

    constructor(private serviceUtils: UtilsService, private toastr: ToastrService) {
    // 🔹 Inicializa o formGroup com os campos necessários
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10,11}$/)]), // Aceita 10 ou 11 dígitos
      cidade: new FormControl(3550308, Validators.required),
      mensagem: new FormControl('', Validators.required),
      raca: new FormControl('', Validators.required)
    });
  }


  ngOnInit(): void {              // Sempre que o site carregar, vai rodar ( Assim que o componente é carregado, a lista de cidades é preenchida.)
    this.serviceUtils.getCidades().subscribe(data => {
      this.cidades = data.map((cidade: any) => cidade.nome);
    });

  }


  get fields() {
    return{
      nome: this.form.get('nome'),
      email: this.form.get('email'),
      telefone: this.form.get('telefone'),
      cidade: this.form.get('cidade'),
      mensagem: this.form.get('mensagem'),
      raca: this.form.get('raca'),
    };
  }
  



  showSuccess() {              // exibir uma notificação com Toastr,
    if(this.form.valid) {
      alert('Você enviou suas informações de contato, obrigado!')
      this.toastr.success('Você preencheu o formulário!', 'SUCESSO!', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    } else {
      this.toastr.error('Formulário inválido!', 'ERRO!', {
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
    }
  }


} 





  // ! ESTUDOS !

  // ngOnInit(): void {
  //   this.fazerLigacao();
  // }



  // fazerLigacao(){
    

    // let numero = this.pegarNumero();

    // console.log(numero)
    
    // console.log("seu telefone é: ", this.telefone)
  // }


  // pegarNumero(){
  //   let numero = 12345;

  //   return numero;
  // }


  // fazerPedido(){
  //   console.log("seu telefone é: ", this.telefone)
  // }



