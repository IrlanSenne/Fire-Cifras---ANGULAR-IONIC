import { Component, OnInit } from '@angular/core';

import { GetMusicsService } from '../get-musics.service';
import { delay } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'corinhos',
  templateUrl: './corinhos.component.html',
  styleUrls: ['./corinhos.component.scss'],
})
export class CorinhosComponent implements OnInit {

  mostra: boolean = true
  bandas: any[]= []
  textoBuscar:any = '' 
  titulo: string 
  constructor(  private getMusics : GetMusicsService,
                private route: ActivatedRoute) { }

         
  ngOnInit() {
        
    var p = this.route.snapshot.params['teste']
    this.titulo = p

    if(p == 'Isaías Saad'){this.getMusics.isaiasSaad().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Morada'){this.getMusics.morada().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Gabriela Rocha'){this.getMusics.gabrielaRocha().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Corinhos Evangélicos'){this.getMusics.corinhos().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Diante do Trono'){this.getMusics.dt().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Casa Worship'){this.getMusics.casaWorship().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Zoe'){this.getMusics.zoe().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Raiz Coral'){this.getMusics.raizcoral().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministerio Voz de Muitas Águas'){this.getMusics.vozdemuitasaguas().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Novo Som'){this.getMusics.novosom().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Alda Célia'){this.getMusics.aldacelia().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Cristina Mel'){this.getMusics.cristinamel().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'João Alexandre'){this.getMusics.joaoalexandre().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Banda Dom'){this.getMusics.bandadom().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ana Paula Valadão'){this.getMusics.anapaulavaladao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Bola de Neve'){this.getMusics.boladeneve().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'André e Felipe'){this.getMusics.andreefelipe().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Armando Filho'){this.getMusics.armandofilho().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Marcos Góes'){this.getMusics.marcosgoes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Judson Oliveira'){this.getMusics.judsonoliveira().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Chris Durán'){this.getMusics.chrisduran().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Fruto Sagrado'){this.getMusics.frutosagrado().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ozéias de Paula'){this.getMusics.ozeiasdepaula().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Jesus Culture'){this.getMusics.jesusculture().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Fonte da Vida'){this.getMusics.fontedavida().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Clamor Pelas Nações'){this.getMusics.clamorpelasnacoes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Santa Geração'){this.getMusics.santageracao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Daniel Ludtke'){this.getMusics.danielludtke().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ronaldo Bezerra'){this.getMusics.ronaldobezerra().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ouvir e Crer'){this.getMusics.ouvirecrer().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Marcela Taís'){this.getMusics.marcelatais().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Kelly Patrícia'){this.getMusics.kellypatricia().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Skillet'){this.getMusics.skillet().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Hillsong Music Australia'){this.getMusics.hilsonmusicaustralia().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Grupo Logos'){this.getMusics.grupologos().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Cristo Vivo'){this.getMusics.cristovivo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Davi Fernandes'){this.getMusics.davifernandes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Comunidade Evangélica de Maringá'){this.getMusics.cominidademaringa().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Elaine Martins'){this.getMusics.elainemartins().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Elaine de Jesus'){this.getMusics.elainedejesus().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Bethel Church'){this.getMusics.bethelchurch().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Além do Véu'){this.getMusics.alemdoveu().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ao Cubo'){this.getMusics.aocubo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Katsbarnea'){this.getMusics.katsbarnea().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Hillsong Worship'){this.getMusics.hilsonworship().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Casting Crowns'){this.getMusics.castingcrowns().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Coral Resgate'){this.getMusics.coralresgate().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Denise Cerqueira'){this.getMusics.denisecerqueira().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Kadoshi'){this.getMusics.kadoshi().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Apocalipse 16'){this.getMusics.apocalipse16().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Atmosfera De Adoração'){this.getMusics.atmosferadaadoracao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Pregador Luo'){this.getMusics.pregadorluo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Grupo Elo'){this.getMusics.grupoelo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Dany Grace'){this.getMusics.danygrace().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Fernanda Lara'){this.getMusics.fernandalara().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Igreja Bíblica da Paz'){this.getMusics.igrejabiblicadapaz().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Brother Simion'){this.getMusics.brothersimion().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Brás Adoração'){this.getMusics.brasadoracao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Altos Louvores'){this.getMusics.altoslouvores().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'R.R. Soares'){this.getMusics.rrsoares().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Hebrom'){this.getMusics.hebrom().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Rodolfo Abrantes'){this.getMusics.rodolfoabrantes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Antônio Cirilo'){this.getMusics.cirilo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Nívea Soares'){this.getMusics.niveasoares().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Preto No Branco'){this.getMusics.pretonobranco().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Isadora Pompeo'){this.getMusics.isadorapompeo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Midian Lima'){this.getMusics.midianlima().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Laura Souguellis'){this.getMusics.laurasouguellis().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Fernandinho'){this.getMusics.fernandinho().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Anderson Freire'){this.getMusics.andersonfreire().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Gabriel Guedes'){this.getMusics.gabrielguedes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Alessandro Vilas Boas'){this.getMusics.alessandrovilasboas().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Kemuel'){this.getMusics.kemuel().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Apascentar de Louvor (Toque No Altar)'){this.getMusics.toquenoaltar().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Rosa de Saron'){this.getMusics.rosadesaron().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Fernanda Brum'){this.getMusics.fernandabrum().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Davi Sacer'){this.getMusics.davisacer().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Eli Soares'){this.getMusics.elisoares().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Luma Elpidio'){this.getMusics.lumaepidio().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Soraya Moraes'){this.getMusics.sorayamoraes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Kleber Lucas'){this.getMusics.kleberlucas().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'David Quinlan'){this.getMusics.davidquinlan().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Leonardo Gonçalves'){this.getMusics.leonardogoncalves().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Bruna Karla'){this.getMusics.brunakarla().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Paulo César Baruk'){this.getMusics.paulocesarbaruk().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Avivah'){this.getMusics.ministerioavivah().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Adhemar de Campos'){this.getMusics.adhemardecampos().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Renascer Praise'){this.getMusics.renascerpraise().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Oficina G3'){this.getMusics.oficinag3().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Israel Subirá'){this.getMusics.israelsubira().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Trazendo a Arca'){this.getMusics.trazendoaarca().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Quatro Por Um'){this.getMusics.quatroporum().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Eyshila'){this.getMusics.eyshila().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Gerson Rufino'){this.getMusics.gersonrufino().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Delino Marçal'){this.getMusics.delinomarcal().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Livres Para Adorar'){this.getMusics.livresparaadorar().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Priscilla Alcantara'){this.getMusics.priscillaalcantara().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Heloísa Rosa'){this.getMusics.heloisarosa().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Shirley Carvalhaes'){this.getMusics.shirleycarvalhaes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Catedral'){this.getMusics.catedral().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Anjos de Resgate'){this.getMusics.anjosderesgate().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Samuel Mariano'){this.getMusics.samuelmariano().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Vineyard'){this.getMusics.vineyard().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Irmão Lázaro'){this.getMusics.irmaolazaro().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Sérgio Lopes'){this.getMusics.sergiolopes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Hillsong United'){this.getMusics.hilsongunited().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Walmir Alencar'){this.getMusics.walmiralencar().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Padre Zezinho'){this.getMusics.padrezezinho().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'André Valadão'){this.getMusics.andrevaladao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Cassiane'){this.getMusics.cassiane().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Voz da Verdade'){this.getMusics.vozdaverdade().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Frei Gilson'){this.getMusics.freigilson().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Pedras Vivas'){this.getMusics.pedrasvivas().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Sarah Farias'){this.getMusics.sarahfarias().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Damares'){this.getMusics.damares().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Vida Reluz'){this.getMusics.vidareluz().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Eliana Ribeiro'){this.getMusics.elianaribeiro().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Pr. Lucas'){this.getMusics.prlucas().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Regis Danese'){this.getMusics.regisdanese().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'André Aquino'){this.getMusics.andreaquino().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ludmila Ferber'){this.getMusics.ludmilaferber().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Asaph Borba'){this.getMusics.asaphborba().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Lauriete'){this.getMusics.lauriete().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Missionário Shalom'){this.getMusics.missionarioshalom().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Leandro Borges'){this.getMusics.leandroborges().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Marquinhos Gomes'){this.getMusics.marquinhosgomes().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'PG'){this.getMusics.pg().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Jotta A'){this.getMusics.jottaa().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Marcos Antonio'){this.getMusics.marcosantonio().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Mara Lima'){this.getMusics.maralima().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Discopraise'){this.getMusics.discopraise().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Comunidade de Nilópolis'){this.getMusics.comunidadedenilopolis().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Mariana Valadão'){this.getMusics.marianavaladao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Deigma Marques'){this.getMusics.deigmamarques().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Rose Nascimento'){this.getMusics.rosenascimento().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministerio Amor e Adoração'){this.getMusics.amoreadoracao().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Ipiranga'){this.getMusics.ipiranga().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Padre Zeca'){this.getMusics.padrezeca().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Khorus'){this.getMusics.khorus().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Igreja Cristã Maranata'){this.getMusics.igrejacristamaranata().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Sarando a Terra Ferida'){this.getMusics.sarandoaterraferida().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Daniela Araújo'){this.getMusics.danielaaraujo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Jamily'){this.getMusics.jamily().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Celina Borges'){this.getMusics.celinaborges().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Casa de Davi'){this.getMusics.casadedavi().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Mattos Nascimento'){this.getMusics.mattosnascimento().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ministério Jovem'){this.getMusics.jovem().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Ana Nóbrega'){this.getMusics.ananobrega().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Giselli Cristina'){this.getMusics.gisellicristina().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'J. Neto'){this.getMusics.jneto().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )} 
    else if(p == 'Vencedores Por Cristo'){this.getMusics.vencedoresporcristo().pipe(delay(500)).subscribe((data:any[]) => {this.bandas = data; this.mostra = false}   )}    
  }

  getItems(event){
    const texto = event.target.value;
    this.textoBuscar =  texto;
  }  

  
}