import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  products = [
    {
      id: 1,
      category: 'Клавиатура',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium',
      name: 'Ajazz AK820 Pro белый',
      description: 'Крутая клава',
      rating: '⭐ 4.9',
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWJ83gd7sNJ4EuJmJF7ufgJPG_5_ET7V6Bks1iCUh3zKzdM0KL-SVBoCRDoQAvD_BwE'
    },
    {
      id: 2,
      category: 'Клавиатура',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/pfa/p0b/24873063.jpg?format=gallery-medium',
      name: 'Red Square Keyrox TKL',
      description: 'У меня такая клава',
      rating: '⭐ 5.0',
      link: 'https://kaspi.kz/shop/p/red-square-keyrox-tkl-aquarius-rsq-20036-belyi-114082331/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_100k-500k&gclid=CjwKCAiAtsa9BhAKEiwAUZAszWJ83gd7sNJ4EuJmJF7ufgJPG_5_ET7V6Bks1iCUh3zKzdM0KL-SVBoCRDoQAvD_BwE'
    },
    {
      id: 3,
      category: 'Компьютер',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/p06/p44/19867137.png?format=gallery-medium',
      name: 'Системный блок BestGamer',
      description: 'крутой комп',
      rating: '⭐ 4.2',
      link: 'https://kaspi.kz/shop/p/bestgamer-004-i5-12400f-rtx-4060-32gb-ssd-1000-gb-win-11-pro-131774471/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },
    {
      id: 4,
      category: 'Приставка',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      name: 'Sony PlayStation 5 Slim',
      description: 'игровая пристака',
      rating: '⭐ 4.5',
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 5,
      category: 'Приставка',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h06/hc7/64455910653982.jpg?format=gallery-medium',
      name: 'Sony PlayStation 4',
      description: 'игровая приставка, пс 4',
      rating: '⭐ 3.9',
      link: 'https://kaspi.kz/shop/p/sony-playstation-4-slim-500gb-geimpad-ufc4-gta5-fifa23-mortal-igry-v-tsifrovoi-versii--104465180/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 6,
      category: 'Телефон',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      name: ' Apple iPhone 16 Pro Max',
      description: 'ипхон 16',
      rating: '⭐ 5.0',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 7,
      category: 'Телефон',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Apple iPhone 13',
      description: 'ипхон 13',
      rating: '⭐ 4.4',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 8,
      category: 'Телефон',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h50/h0d/64027863875614.jpg?format=gallery-medium',
      name: 'Samsung Odyssey G5',
      description: 'игровой монитор',
      rating: '⭐ 4.6',
      link: 'https://kaspi.kz/shop/p/samsung-odyssey-g5-c34g55twwi-lc34g55twwixci-chernyi-101041173/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 9,
      category: 'Компьютер',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h21/64923072331806.jpg?format=gallery-medium',
      name: 'Монитор LG 34GN850',
      description: 'игровой монитор',
      rating: '⭐ 4.8',
      link: 'https://kaspi.kz/shop/p/lg-34gn850-b-chernyi-104680883/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },    
    {
      id: 10,
      category: 'Телефон',
      likes: 0,
      image : 'https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium',
      name: 'Xiaomi Redmi 13C',
      description: 'бомба телефон',
      rating: '⭐ 3.0',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_computer_cmp_desktops_desktop&gclid=CjwKCAiAtsa9BhAKEiwAUZAszT4fmClsOy1UL_IgChxkH-p_rIK6iiJ4WsqZlaeyrIcCq1vzh9t9WxoCBtYQAvD_BwE'
    },

  ]
  constructor(private route: ActivatedRoute) {}
  
  product: any | null = null;
  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.product = this.products.find(p => p.id == productId) ?? null;
    console.log(this.product);
  }
}
