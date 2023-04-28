import { Component, OnInit } from '@angular/core';
import { ProdukService} from 'src/app/service/produk.service';

@Component({
  selector: 'app-produk',
  templateUrl: './produk.component.html',
  styleUrls: ['./produk.component.css']
})
export class ProdukComponent implements OnInit {
  constructor(private ProdukService: ProdukService) {}
  
  response: any[] = [];
  ngOnInit(): void {
    this.ProdukService.getProduk(20).subscribe(
      (results:any)=>{
        console.log(results)
        this.response=results.products
      }
    )
  }
}
