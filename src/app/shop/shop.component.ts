import { Component, OnInit } from '@angular/core';
import { IProduct } from '../products/product';
import { ProductService } from '../products/product.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  product=[
    {
      "productId": 1048,
      "productName": "Lippie Pencil",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2019",
      "description": "Lippie Pencil A long-wearing and high-intensity lip pencil that glides on easily and prevents feathering. Many of our Lippie Stix have a coordinating Lippie Pencil designed to compliment it perfectly, but feel free to mix and match!",
      "price": 5.99,
      "starRating": 5,
      "imageUrl": "https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"
    },
    {
      "productId": 609,
      "productName": "BADgal lash volumizing mascara",
      "productCode": "TBBGX-0022",
      "releaseDate": "May 15, 2009",
      "description": "volumizing mascara",
      "price": 26.55,
      "starRating": 3.7,
      "imageUrl": "https://kiko-eco-prd-media-hybris.s3.amazonaws.com/sys-master/images/hdf/he8/10522582515742/KM000000011001Bprincipale_900Wx900H#k-zoom"
    },
    {
      "productId": 968,
      "productName": "Cake That! Powder Eyeliner",
      "productCode": "XXTBX-0022",
      "releaseDate": "May 15, 2018",
      "description": "Eyeliner meant to give you cat eyes",
      "price": 11.55,
      "starRating": 3.7,
      "imageUrl": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dwb7f857fa/ProductImages/2017/Eyes/Cake_That_Powder_Eyeliner/cakethatpowdereyeliner_main.jpg?sw=390&sh=390&sm=fit"
    },
    {
      "productId": 937,
      "productName": "Blotting Powder",
      "productCode": "TB-0022",
      "releaseDate": "July 15, 2020",
      "description": "Kissed with the barest hint of pigment Blotting Powder takes down the shine without settling into fine lines polishing skin to satin matte perfection.",
      "price": 12.55,
      "starRating": 3.7,
      "imageUrl": "https://www.nyxcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-cpd-nyxusa-master-catalog/default/dw1f4a57e0/ProductImages/Face/Blotting_Powder/800897822620_blottingpowder_light_main.jpg?sw=390&sh=390&sm=fit"
    },
    {
      "productId": 127,
      "productName": "Essie Mirror Metallics",
      "productCode": "TBOX-0K022",
      "releaseDate": "June 15, 2019",
      "description":  "Get ready to Metal around with colour! Essie's latest collection gives you a brushed steel effect with these high-impact chrome polishes. ",
      "price": 10.55,
      "starRating": 3.7,
      "imageUrl": "https://d3t32hsnjxo7q6.cloudfront.net/i/f9cf806594b794ebb2f10ce217a90adb_ra,w158,h184_pa,w158,h184.jpeg"
    },
    {
      "productId": 524,
      "productName": "MATTE EXPOSURE PALETTE",
      "productCode": "GMG-0042",
      "releaseDate": "October 15, 2018",
      "description":  "This all-matte palette has you covered with its silky, blendable shadows that double as stay-put liners.",
      "price": 35.95,
      "starRating": 4.6,
      "imageUrl": "https://www.smashbox.com/media/images/products/388x396/sbx_sku_74764_388x396_0.jpg"
    }
  ]

  constructor( private productService: ProductService) { }

  ngOnInit(): void {
  }



}
