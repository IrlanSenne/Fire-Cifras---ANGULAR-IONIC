import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { GetMusicsService } from '../get-musics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cifra-corinhos',
  templateUrl: './cifra-corinhos.component.html',
  styleUrls: ['./cifra-corinhos.component.scss'],
})
export class CifraCorinhosComponent implements OnInit {
 
  ts:string[] = ["C","Am","C#","D","Bm","Eb","E","C#m","F","Dm","F#","G","Em","Ab","A","F#m","Bb","B","G#m"]
  musics: any[] 
  C: string = 'Teste'
  musicaC: any
  musicaA: any
  titulo: string
  banda: string
  original: string
  tom: string
  musica_C: any
  musica_Cs: any
  musica_D: any
  musica_Ds: any
  musica_E: any
  musica_F: any
  musica_Fs: any
  musica_G: any
  musica_Gs: any
  musica_A: any
  musica_As: any
  musica_B: any
  musica_Diferente: any
  musicaAlterada: any
  musicSelecionada : any
  info: boolean = true
  mostra:boolean = true
  a:number=16
  @ViewChild('cifraTop', {static:true}) cifraTop: ElementRef

  diminuiFont(){
    this.a--
    this.cifraTop.nativeElement.style.fontSize = this.a+'px';    
  }

  aumentaFont(){
    this.a++
    this.cifraTop.nativeElement.style.fontSize = this.a+'px';    
  }
  constructor( private crudService: GetMusicsService,
    private route: ActivatedRoute
  ) { } 
 
    trocaCifra(tom){
    tom = tom.target.value
      if((tom == 'C') || (tom == 'Am')){
    this.musicaAlterada = this.musica_C
    this.mostra = false
      }else if(tom == 'C#'){
        this.musicaAlterada = this.musica_Cs
        this.mostra = false
      }else if((tom == 'D') || (tom == 'Bm')) {
        this.musicaAlterada = this.musica_D
        this.mostra = false
      }else if(tom == 'Eb'){
        this.musicaAlterada = this.musica_Ds
        this.mostra = false
      }else if((tom == 'E') || (tom == 'C#m')){
        this.musicaAlterada = this.musica_E
        this.mostra = false
      }else if((tom == 'F') || (tom == 'Dm')){
        this.musicaAlterada = this.musica_F
        this.mostra = false
      }else if(tom == 'F#'){
        this.musicaAlterada = this.musica_Fs
        this.mostra = false
      }else if((tom == 'G') || (tom == 'Em')){
        this.musicaAlterada = this.musica_G
        this.mostra = false
      }else if(tom == 'Ab'){
        this.musicaAlterada = this.musica_Gs
        this.mostra = false
      }else if((tom == 'A') || (tom == 'F#m')){
        this.musicaAlterada = this.musica_A
        this.mostra = false
      }else if(tom == 'Bb'){
        this.musicaAlterada = this.musica_As
        this.mostra = false
      }else if((tom == 'B') || (tom == 'G#m')){
        this.musicaAlterada = this.musica_B
        this.mostra = false
      }
    }
  
  
    tom_C(id){
    var cifraC =  this.musics[id].cifra; this.musica_C  = this.crudService.dodo(cifraC) 
  
    var cifraCs =  this.musics[id].cifra; this.musica_Cs  = this.crudService.dodos(cifraCs) 
  
    var cifraD =  this.musics[id].cifra; this.musica_D  = this.crudService.dore(cifraD)    
  
    var cifraDs =  this.musics[id].cifra; this.musica_Ds  = this.crudService.dores(cifraDs)   
  
    var cifraE =  this.musics[id].cifra; this.musica_E  = this.crudService.domi(cifraE)   
  
    var cifraF =  this.musics[id].cifra; this.musica_F  = this.crudService.dofa(cifraF)  
  
    var cifraFs =  this.musics[id].cifra; this.musica_Fs  = this.crudService.dofas(cifraFs)  
  
    var cifraG =  this.musics[id].cifra; this.musica_G  = this.crudService.dosol(cifraG)        
   
    var cifraGs =  this.musics[id].cifra; this.musica_Gs = this.crudService.dosols(cifraGs)    
  
    var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.dola(cifraA)    
  
    var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.dolas(cifraAs)    
  
    var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.dosi(cifraB)        
  
    }
    tom_D(id){
   
    var cifraC =  this.musics[id].cifra;  this.musica_C  = this.crudService.redo(cifraC)  
  
    var cifraCs =  this.musics[id].cifra;  this.musica_Cs  = this.crudService.redos(cifraCs) 
  
    var cifraD =  this.musics[id].cifra;  this.musica_D  = this.crudService.rere(cifraD) 
  
    var cifraDs =  this.musics[id].cifra;  this.musica_Ds  = this.crudService.reres(cifraDs) 
  
    var cifraE =  this.musics[id].cifra;  this.musica_E  = this.crudService.remi(cifraE)  
  
    var cifraF =  this.musics[id].cifra;  this.musica_F  = this.crudService.refa(cifraF) 
  
    var cifraFs =  this.musics[id].cifra;this.musica_Fs  = this.crudService.refas(cifraFs) 
  
    var cifraG =  this.musics[id].cifra; this.musica_G  = this.crudService.resol(cifraG)  
  
    var cifraGs =  this.musics[id].cifra; this.musica_Gs  = this.crudService.resols(cifraGs)  
  
    var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.rela(cifraA)  
  
    var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.relas(cifraAs)
  
    var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.resi(cifraB)
  
    }
    tom_E(id){
      var cifraC =  this.musics[id].cifra ;    this.musica_C  = this.crudService.mido(cifraC)
  
      var cifraCs =  this.musics[id].cifra ;    this.musica_Cs  = this.crudService.midos(cifraCs)    
      
      var cifraD =  this.musics[id].cifra;    this.musica_D  = this.crudService.mire(cifraD)    
      
      var cifraDs =  this.musics[id].cifra; this.musica_Ds  = this.crudService.mires(cifraDs)   
      
      var cifraE =  this.musics[id].cifra;  this.musica_E  = this.crudService.mimi(cifraE)    
      
      var cifraF =  this.musics[id].cifra; this.musica_F  = this.crudService.mifa(cifraF)    
      
      var cifraFs =  this.musics[id].cifra ;this.musica_Fs  = this.crudService.mifas(cifraFs)    
      
      var cifraG =  this.musics[id].cifra ; this.musica_G  = this.crudService.misol(cifraG)   
      
      var cifraGs =  this.musics[id].cifra ; this.musica_Gs  = this.crudService.misols(cifraGs)    
      
      var cifraA =  this.musics[id].cifra; this.musica_A  = this.crudService.mila(cifraA)    
      
      var cifraAs =  this.musics[id].cifra; this.musica_As  = this.crudService.milas(cifraAs)   
      
      var cifraB =  this.musics[id].cifra; this.musica_B  = this.crudService.misi(cifraB)   
      
      }
    tom_F(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.fado(cifraC)
  
    var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.fados(cifraCs)
  
    var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.fare(cifraD)
  
    var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.fares(cifraDs)
  
    var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.fami(cifraE)
  
    var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.fafa(cifraF)
  
    var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.fafas(cifraFs)
  
    var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.fasol(cifraG)
  
    var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.fasols(cifraGs)
  
    var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.fala(cifraA)
  
    var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.falas(cifraAs)
  
    var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.fasi(cifraB)
      
      }
    tom_G(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.soldo(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.soldos(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.solre(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.solres(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.solmi(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.solfa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.solfas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.solsol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.solsols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.solla(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.sollas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.solsi(cifraB)
    }
    tom_A(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.lado(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.lados(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.lare(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.lares(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.lami(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.lafa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.lafas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.lasol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.lasols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.lala(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.lalas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.lasi(cifraB)
    }
    tom_B(id){
      var cifraC =  this.musics[id].cifra;     this.musica_C  = this.crudService.sido(cifraC)
  
      var cifraCs =  this.musics[id].cifra;     this.musica_Cs  = this.crudService.sidos(cifraCs)
  
      var cifraD =  this.musics[id].cifra;     this.musica_D  = this.crudService.sire(cifraD)
  
      var cifraDs =  this.musics[id].cifra;     this.musica_Ds  = this.crudService.sires(cifraDs)
  
      var cifraE =  this.musics[id].cifra;     this.musica_E  = this.crudService.simi(cifraE)
  
      var cifraF =  this.musics[id].cifra;     this.musica_F  = this.crudService.sifa(cifraF)
  
      var cifraFs =  this.musics[id].cifra;     this.musica_Fs  = this.crudService.sifas(cifraFs)
  
      var cifraG =  this.musics[id].cifra;     this.musica_G  = this.crudService.sisol(cifraG)
  
      var cifraGs =  this.musics[id].cifra;     this.musica_Gs  = this.crudService.sisols(cifraGs)
  
      var cifraA =  this.musics[id].cifra;     this.musica_A  = this.crudService.sila(cifraA)
  
      var cifraAs =  this.musics[id].cifra;     this.musica_As  = this.crudService.silas(cifraAs)
  
      var cifraB =  this.musics[id].cifra;     this.musica_B  = this.crudService.sisi(cifraB)
    }

    escolheTom(id){
      if ((this.original == 'C') || (this.original == 'Am')){ this.tom_C(id ); }             
      else if ((this.original == 'D') || (this.original == 'Bm')){ this.tom_D(id ); }
      else if ((this.original == 'E') || (this.original == 'C#m')){ this.tom_E(id ); }
      else if ((this.original == 'F') || (this.original == 'Dm')){ this.tom_F(id ); }
      else if ((this.original == 'G') || (this.original == 'Em')){ this.tom_G(id ); }
      else if ((this.original == 'A') || (this.original == 'F#m')){ this.tom_A(id ); }
      else if ((this.original == 'B') || (this.original == 'G#m')){ this.tom_B(id ); }    
      else { this.info = false}  
    }
    verifyParams(data){
      this.musics = data;
      var id= this.route.snapshot.params['id'] - 1
      this.original = this.musics[id ].tom
      this.titulo = this.musics[id ].titulo
      this.banda = this.musics[id ].banda
      this.musicaAlterada = this.musics[id ].cifra.replace(/<pre>/g, ``).replace(/<\/pre>/g, ``).replace(/<b>/g, "<b><font color='red'>").replace(/<\/b>/g, "</font></b>")
     if(this.musics[id].cifra != null){ this.escolheTom(id)}     
    }
  
    ngOnInit(){
      var p = this.route.snapshot.params['banda']
     if(p == 'Ministério Morada'){this.crudService.morada().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Isaías Saad'){this.crudService.isaiasSaad().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Gabriela Rocha'){this.crudService.gabrielaRocha().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Corinhos Evangélicos'){this.crudService.corinhos().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Zoe'){this.crudService.zoe().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Diante do Trono'){this.crudService.dt().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministerio Voz de Muitas Águas'){this.crudService.vozdemuitasaguas().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Casa Worship'){this.crudService.casaWorship().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Novo Som'){this.crudService.novosom().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'João Alexandre'){this.crudService.joaoalexandre().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Cristina Mel'){this.crudService.cristinamel().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Alda Célia'){this.crudService.aldacelia().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Raiz Coral'){this.crudService.raizcoral().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Banda Dom'){this.crudService.bandadom().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ana Paula Valadão'){this.crudService.anapaulavaladao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Bola de Neve'){this.crudService.boladeneve().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'André e Felipe'){this.crudService.andreefelipe().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Armando Filho'){this.crudService.armandofilho().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Judson Oliveira'){this.crudService.judsonoliveira().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Marcos Góes'){this.crudService.marcosgoes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Chris Durán'){this.crudService.chrisduran().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Fruto Sagrado'){this.crudService.frutosagrado().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ozéias de Paula'){this.crudService.ozeiasdepaula().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Jesus Culture'){this.crudService.jesusculture().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Fonte da Vida'){this.crudService.fontedavida().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Clamor Pelas Nações'){this.crudService.clamorpelasnacoes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Santa Geração'){this.crudService.santageracao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Daniel Ludtke'){this.crudService.danielludtke().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ronaldo Bezerra'){this.crudService.ronaldobezerra().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ouvir e Crer'){this.crudService.ouvirecrer().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Marcela Taís'){this.crudService.marcelatais().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Kelly Patrícia'){this.crudService.kellypatricia().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Skillet'){this.crudService.skillet().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Hillsong Music Australia'){this.crudService.hilsonmusicaustralia().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Grupo Logos'){this.crudService.grupologos().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Cristo Vivo'){this.crudService.cristovivo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Davi Fernandes'){this.crudService.davifernandes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Comunidade Evangélica de Maringá'){this.crudService.cominidademaringa().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Elaine Martins'){this.crudService.elainemartins().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Elaine de Jesus'){this.crudService.elainedejesus().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Bethel Church'){this.crudService.bethelchurch().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Além do Véu'){this.crudService.alemdoveu().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ao Cubo'){this.crudService.aocubo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Katsbarnea'){this.crudService.katsbarnea().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Hillsong Worship'){this.crudService.hilsonworship().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Casting Crowns'){this.crudService.castingcrowns().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Coral Resgate'){this.crudService.coralresgate().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Denise Cerqueira'){this.crudService.denisecerqueira().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Kadoshi'){this.crudService.kadoshi().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Apocalipse 16'){this.crudService.apocalipse16().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Atmosfera De Adoração'){this.crudService.atmosferadaadoracao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Pregador Luo'){this.crudService.pregadorluo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Grupo Elo'){this.crudService.grupoelo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Dany Grace'){this.crudService.danygrace().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Fernanda Lara'){this.crudService.fernandalara().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Igreja Bíblica da Paz'){this.crudService.igrejabiblicadapaz().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Brother Simion'){this.crudService.brothersimion().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Brás Adoração'){this.crudService.brasadoracao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Altos Louvores'){this.crudService.altoslouvores().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'R.R. Soares'){this.crudService.rrsoares().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Hebrom'){this.crudService.hebrom().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Rodolfo Abrantes'){this.crudService.rodolfoabrantes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Antônio Cirilo'){this.crudService.cirilo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Nívea Soares'){this.crudService.niveasoares().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Preto No Branco'){this.crudService.pretonobranco().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Midian Lima'){this.crudService.midianlima().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Isadora Pompeo'){this.crudService.isadorapompeo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Laura Souguellis'){this.crudService.laurasouguellis().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Fernandinho'){this.crudService.fernandinho().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Anderson Freire'){this.crudService.andersonfreire().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Gabriel Guedes'){this.crudService.gabrielguedes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Kemuel'){this.crudService.kemuel().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Alessandro Vilas Boas'){this.crudService.alessandrovilasboas().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Apascentar de Louvor (Toque No Altar)'){this.crudService.toquenoaltar().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Rosa de Saron'){this.crudService.rosadesaron().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Fernanda Brum'){this.crudService.fernandabrum().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Davi Sacer'){this.crudService.davisacer().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Eli Soares'){this.crudService.elisoares().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Luma Elpidio'){this.crudService.lumaepidio().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Soraya Moraes'){this.crudService.sorayamoraes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Kleber Lucas'){this.crudService.kleberlucas().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'David Quinlan'){this.crudService.davidquinlan().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Leonardo Gonçalves'){this.crudService.leonardogoncalves().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Bruna Karla'){this.crudService.brunakarla().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Paulo César Baruk'){this.crudService.paulocesarbaruk().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Avivah'){this.crudService.ministerioavivah().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Adhemar de Campos'){this.crudService.adhemardecampos().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Renascer Praise'){this.crudService.renascerpraise().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Oficina G3'){this.crudService.oficinag3().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Israel Subirá'){this.crudService.israelsubira().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Trazendo a Arca'){this.crudService.trazendoaarca().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Quatro Por Um'){this.crudService.quatroporum().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Eyshila'){this.crudService.eyshila().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Gerson Rufino'){this.crudService.gersonrufino().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Delino Marçal'){this.crudService.delinomarcal().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Livres Para Adorar'){this.crudService.livresparaadorar().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Priscilla Alcantara'){this.crudService.priscillaalcantara().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Heloísa Rosa'){this.crudService.heloisarosa().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Shirley Carvalhaes'){this.crudService.shirleycarvalhaes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Catedral'){this.crudService.catedral().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Anjos de Resgate'){this.crudService.anjosderesgate().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Samuel Mariano'){this.crudService.samuelmariano().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Vineyard'){this.crudService.vineyard().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Irmão Lázaro'){this.crudService.irmaolazaro().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Sérgio Lopes'){this.crudService.sergiolopes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Hillsong United'){this.crudService.hilsongunited().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Walmir Alencar'){this.crudService.walmiralencar().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Padre Zezinho'){this.crudService.padrezezinho().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'André Valadão'){this.crudService.andrevaladao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Cassiane'){this.crudService.cassiane().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Voz da Verdade'){this.crudService.vozdaverdade().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Frei Gilson'){this.crudService.freigilson().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Pedras Vivas'){this.crudService.pedrasvivas().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Sarah Farias'){this.crudService.sarahfarias().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Damares'){this.crudService.damares().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Vida Reluz'){this.crudService.vidareluz().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Eliana Ribeiro'){this.crudService.elianaribeiro().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Pr. Lucas'){this.crudService.prlucas().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Regis Danese'){this.crudService.regisdanese().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'André Aquino'){this.crudService.andreaquino().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ludmila Ferber'){this.crudService.ludmilaferber().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Asaph Borba'){this.crudService.asaphborba().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Lauriete'){this.crudService.lauriete().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Missionário Shalom'){this.crudService.missionarioshalom().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Leandro Borges'){this.crudService.leandroborges().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Marquinhos Gomes'){this.crudService.marquinhosgomes().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'PG'){this.crudService.pg().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Jotta A'){this.crudService.jottaa().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Marcos Antonio'){this.crudService.marcosantonio().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Mara Lima'){this.crudService.maralima().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Discopraise'){this.crudService.discopraise().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Comunidade de Nilópolis'){this.crudService.comunidadedenilopolis().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Mariana Valadão'){this.crudService.marianavaladao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Deigma Marques'){this.crudService.deigmamarques().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Rose Nascimento'){this.crudService.rosenascimento().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministerio Amor e Adoração'){this.crudService.amoreadoracao().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Ipiranga'){this.crudService.ipiranga().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Padre Zeca'){this.crudService.padrezeca().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Khorus'){this.crudService.khorus().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Igreja Cristã Maranata'){this.crudService.igrejacristamaranata().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Jamily'){this.crudService.jamily().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Daniela Araújo'){this.crudService.danielaaraujo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Sarando a Terra Ferida'){this.crudService.sarandoaterraferida().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Casa de Davi'){this.crudService.casadedavi().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Celina Borges'){this.crudService.celinaborges().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Mattos Nascimento'){this.crudService.mattosnascimento().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ministério Jovem'){this.crudService.jovem().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Ana Nóbrega'){this.crudService.ananobrega().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Giselli Cristina'){this.crudService.gisellicristina().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'Vencedores Por Cristo'){this.crudService.vencedoresporcristo().subscribe((data:any[]) => this.verifyParams(data))} 
else if(p == 'J. Neto'){this.crudService.jneto().subscribe((data:any[]) => this.verifyParams(data))}  
    }
}