import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {
  candidatos: FirebaseListObservable<any[]>;

  breadcrumb: string = "candidatos";
  stage: string = '';

  nome: string;
  endereco: string;
  cidade: string;
  telefone: string;

  constructor(private authService: AuthService, public af: AngularFireDatabase, private router: Router) {
    this.listar();
   }

  ngOnInit() {

  }

  listar() {
    this.stage = "lista";
    this.candidatos = this.af.list('/org/candidatos', {
      query: {
        limitToLast: 50
      }
    });
  }


  incluir() {
    this.stage = "novo";
    this.breadcrumb = "candidatos > novo"
  }

  salvar() {
    this.candidatos.push({ 
      nome: this.nome, 
      endereco: this.endereco, 
      cidade: this.cidade,
      telefone: this.telefone
      });
    this.listar();
  }
  
  apagar(id) {
    this.af.object('/org/candidatos/' + id).remove();
  }

  voltarMenu() {
    this.router.navigate(['']);
  }

}
