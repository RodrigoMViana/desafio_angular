import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { CombustivelComponent } from './combustivel/combustivel.component';
import { DadosAgrupadosPorDataColetaComponent } from './combustivel/dados-agrupados-por-data-coleta/dados-agrupados-por-data-coleta.component';
import { DadosAgrupadosPorDistribuidoraComponent } from './combustivel/dados-agrupados-por-distribuidora/dados-agrupados-por-distribuidora.component';
import { DadosPorSiglaComponent } from './combustivel/dados-por-sigla/dados-por-sigla.component';
import { MediaDePrecoComponent } from './combustivel/media-de-preco/media-de-preco.component';
import { ValorMediaCompraVendaBandeiraComponent } from './combustivel/valor-media-compra-venda-bandeira/valor-media-compra-venda-bandeira.component';
import { ValorMediaCompraVendaMunicipioComponent } from './combustivel/valor-media-compra-venda-municipio/valor-media-compra-venda-municipio.component';



const routes: Routes = [

{path: 'users', component: UsersComponent},
{path: 'users/create', component: CreateUserComponent},
{path: 'users/update/:id', component: UpdateComponent},
{path: 'users/delete/:id', component: DeleteUserComponent},
{path: 'combustivel', component: CombustivelComponent},
{path: 'combustivel/dados-agrupados-por-distribuidora', component: DadosAgrupadosPorDistribuidoraComponent},
{path: 'combustivel/dados-agrupados-por-data-coleta', component: DadosAgrupadosPorDataColetaComponent},
{path: 'combustivel/dados-por-sigla', component: DadosPorSiglaComponent},
{path: 'combustivel/media-de-preco', component: MediaDePrecoComponent},
{path: 'combustivel/valor-media-compra-venda-bandeira', component: ValorMediaCompraVendaBandeiraComponent},
{path: 'combustivel/valor-media-compra-venda-municipio', component: ValorMediaCompraVendaMunicipioComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
