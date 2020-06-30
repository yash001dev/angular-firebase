import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UxproductsService } from '../uxproducts.service';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit {


  constructor(private _uxProduct: UxproductsService) { }
  loading = false;
  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;

  editMode: boolean = false;
  editIndex: number;
  peoducts = []
  onAddProduct(id, name, price) {
    if (this.editMode) {
      this.peoducts[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value,
      }
      this.editMode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }
    else {
      this.peoducts.push({
        id: id.value,
        name: name.value,
        price: price.value,
      })
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }
    this.onSaveProduct()
  }
  onSaveProduct() {
    this._uxProduct.saveProduct(this.peoducts)
      .subscribe(
        (Response) => console.log(Response),
        (error) => console.log(error)
      )

  }
  onFetchProduct() {
    this.loading = true;

    this._uxProduct.fetchProduct()
      .pipe(
      map((responseData:any)=>{
        const PostArray:Post[]=[];
        for(const in responseData){
          if(responseData.hasOwnProperty(key)){
            PostArray.push({..responseData[key],id:key});
          }
        }
        return postArray;
      })
      )
      .subscribe(
      (posts) => {
        console.log(posts);
//         const data = JSON.stringify(Response);
        this.peoducts = posts;
        this.loading = false;
      },
      (err) => console.log(err)

    )
  }

  onEditProduct(index: number) {
    this.editMode = true;
    this.editIndex = index;
    console.log(this.peoducts[index])
    this.id.nativeElement.value = this.peoducts[index].id;
    this.name.nativeElement.value = this.peoducts[index].name;
    this.price.nativeElement.value = this.peoducts[index].price;
  }
  onDeleteProduct(id: number) {
    if (confirm('do you sure you wanna delete this..')) {
      this.peoducts.splice(id, 1);
      this.onSaveProduct();
    }
  }

  ngOnInit() {
    this.onFetchProduct();
  }

}
