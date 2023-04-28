import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdukService } from 'src/app/service/produk.service';

@Component({
  selector: 'app-produk-detail',
  templateUrl: './produk-detail.component.html',
  styleUrls: ['./produk-detail.component.css']
})
export class ProdukDetailComponent {
  constructor(private activatedRoute:ActivatedRoute,private produkService: ProdukService){}
  response: any = {};
  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      this.produkService.getProdukDetail(params.get('id')!).subscribe(
        (res:any)=>{
          console.log(res)
          this.response=res

        }
      )
    })
  }
}
