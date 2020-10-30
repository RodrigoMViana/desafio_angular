import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './users/update/update.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { CombustivelComponent } from './combustivel/combustivel.component';
import { DadosAgrupadosPorDataColetaComponent } from './combustivel/dados-agrupados-por-data-coleta/dados-agrupados-por-data-coleta.component';
import { DadosAgrupadosPorDistribuidoraComponent } from './combustivel/dados-agrupados-por-distribuidora/dados-agrupados-por-distribuidora.component';
import { DadosPorSiglaComponent } from './combustivel/dados-por-sigla/dados-por-sigla.component';
import { MediaDePrecoComponent } from './combustivel/media-de-preco/media-de-preco.component';
import { ValorMediaCompraVendaBandeiraComponent } from './combustivel/valor-media-compra-venda-bandeira/valor-media-compra-venda-bandeira.component';
import { ValorMediaCompraVendaMunicipioComponent } from './combustivel/valor-media-compra-venda-municipio/valor-media-compra-venda-municipio.component'


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CreateUserComponent,
    UpdateComponent,
    DeleteUserComponent,
    CombustivelComponent,
    DadosAgrupadosPorDataColetaComponent,
    DadosAgrupadosPorDistribuidoraComponent,
    DadosPorSiglaComponent,
    MediaDePrecoComponent,
    ValorMediaCompraVendaBandeiraComponent,
    ValorMediaCompraVendaMunicipioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
