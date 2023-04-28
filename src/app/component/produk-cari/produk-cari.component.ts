import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProdukService } from 'src/app/service/produk.service';

@Component({
  selector: 'app-produk-cari',
  templateUrl: './produk-cari.component.html',
  styleUrls: ['./produk-cari.component.css']
})
export class ProdukCariComponent {
  constructor(private activatedRoute:ActivatedRoute,private produkService: ProdukService){}
  response: any[] = [];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      console.log(params.get('q')!)
      this.produkService.getProdukCari(params.get('q')!).subscribe(
        (results:any)=>{
          this.response=results.products
          console.log(results)

        }
      )
    })
  }
}
