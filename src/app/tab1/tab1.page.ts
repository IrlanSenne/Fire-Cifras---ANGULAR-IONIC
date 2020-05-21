import { Component, OnInit, Input } from '@angular/core';
import { GetMusicsService } from '../get-musics.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  mostra: boolean = true
  bandas: any[]= []
  @Input() bandas_list:any[] = []
  textoBuscar:any = '' 

  constructor( private getMusics : GetMusicsService) { }

  ngOnInit() {
  
  this.getMusics.corinhos().subscribe(res => {
    for(let i = 0; i< res.length; i++){
    this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
      }

});
this.getMusics.dt().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.gabrielaRocha().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.morada().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.zoe().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.isaiasSaad().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.casaWorship().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.vozdemuitasaguas().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.raizcoral().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.novosom().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.bandadom().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.aldacelia().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cristinamel().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.joaoalexandre().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.anapaulavaladao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.boladeneve().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.andreefelipe().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.armandofilho().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.judsonoliveira().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.marcosgoes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.chrisduran().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.frutosagrado().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ozeiasdepaula().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.jesusculture().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.fontedavida().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.santageracao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.clamorpelasnacoes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.danielludtke().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ouvirecrer().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ronaldobezerra().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.skillet().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.hilsonmusicaustralia().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.marcelatais().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.kellypatricia().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.grupologos().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cristovivo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.elainedejesus().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.elainemartins().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.davifernandes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cominidademaringa().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.bethelchurch().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.alemdoveu().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.castingcrowns().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.katsbarnea().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.aocubo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.hilsonworship().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.coralresgate().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.pregadorluo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.denisecerqueira().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.atmosferadaadoracao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.apocalipse16().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.kadoshi().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.grupoelo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.danygrace().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.igrejabiblicadapaz().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.brothersimion().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.brasadoracao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.fernandalara().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.altoslouvores().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.rrsoares().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.hebrom().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.niveasoares().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cirilo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.rodolfoabrantes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.pretonobranco().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.isadorapompeo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.fernandinho().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.andersonfreire().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.midianlima().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.laurasouguellis().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.gabrielguedes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.alessandrovilasboas().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.kemuel().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.fernandabrum().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.rosadesaron().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.elisoares().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.toquenoaltar().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.kleberlucas().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.lumaepidio().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.sorayamoraes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.davidquinlan().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.leonardogoncalves().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.brunakarla().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.paulocesarbaruk().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.adhemardecampos().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.renascerpraise().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ministerioavivah().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.oficinag3().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.eyshila().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.israelsubira().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.trazendoaarca().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.quatroporum().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.gersonrufino().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.livresparaadorar().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.shirleycarvalhaes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.catedral().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.delinomarcal().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.heloisarosa().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.samuelmariano().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.anjosderesgate().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.vineyard().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.irmaolazaro().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.sergiolopes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.hilsongunited().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.davisacer().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.padrezezinho().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.vozdaverdade().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.andrevaladao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cassiane().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.walmiralencar().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.priscillaalcantara().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.cantorcristao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.damares().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.freigilson().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.elianaribeiro().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.sarahfarias().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.vidareluz().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.prlucas().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.regisdanese().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.pedrasvivas().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.andreaquino().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ludmilaferber().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.asaphborba().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.lauriete().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.missionarioshalom().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.marquinhosgomes().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.leandroborges().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.pg().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.jottaa().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.marcosantonio().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.maralima().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.rosenascimento().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.discopraise().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.deigmamarques().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.comunidadedenilopolis().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.amoreadoracao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.marianavaladao().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.khorus().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ipiranga().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.padrezeca().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.igrejacristamaranata().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.danielaaraujo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.sarandoaterraferida().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.jamily().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.celinaborges().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.jovem().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.mattosnascimento().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.casadedavi().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.vencedoresporcristo().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.ananobrega().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.gisellicristina().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});
this.getMusics.jneto().subscribe(res => {
  for(let i = 0; i< res.length; i++){
  this.bandas_list.push({titulo: res[i].titulo, cifra: res[i].cifra, banda: res[i].banda, id: res[i].id})
}             
});   
}
  getItems(event){
   
    if(event.target.value.length > 3){
      const texto = event.target.value;
      this.textoBuscar =  texto;
      this.mostra = false
    }else{
      this.mostra = true
    } 
   
  } 
}
