import { Component, OnInit } from '@angular/core';
import { MediaDePrecoService } from './media-de-preco.service';
import { ResponsePreco } from './media-de-preco.model';

@Component({
  selector: 'app-media-de-preco',
  templateUrl: './media-de-preco.component.html',
  styleUrls: ['./media-de-preco.component.css']
})
export class MediaDePrecoComponent implements OnInit {

  responsePreco: ResponsePreco;

  constructor(private mediaDePrecoService: MediaDePrecoService) { }

  ngOnInit(): void {

    this.mediaDePrecoService.getPreco().subscribe(res => this.responsePreco  = res)

  }

}