import { Injectable } from '@angular/core';
import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  private cars: Car[] = [
    {
      id: 1,
      name: 'BMW X5',
      releaseYear: 2020,
      color: 'black',
      number: 'YUYUDLKLKAPD505540',
      imageUrl: 'https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/bmw-x5-my22-index-1.png',
    },
    {
      id: 2,
      name: 'Audi Q5',
      releaseYear: 2021,
      color: 'grey',
      number:' YUOIPIASDDAS505440',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/2017_Audi_Q5_%28FY%29_TDI_Sport_quattro_ultra_wagon_%282018-09-17%29_01.jpg',
    },
    {
      id: 3,
      name: 'Mercedes-Benz GLC',
      releaseYear: 2022,
      color: 'grey',
      number: 'MMRECCERESAD450780',
      imageUrl: 'https://www.mercedes-benz.ro/passengercars/mercedes-benz-cars/models/glc/coupe-c253/mercedes-amg/highlights/_jcr_content/contentgallerycontainer/par/contentgallery/par/contentgallerytile/image.MQ6.8.20210727100908.jpeg',
    }
  ]

  getCars() {
    return this.cars;
  }
}
