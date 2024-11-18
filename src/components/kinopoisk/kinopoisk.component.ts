import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import {Router} from '@angular/router';

interface moviesInterface {
  title: string,
  movies: movieInterface[]
}

interface movieInterface {
  title: string,
  image: string
}

interface kinopoiskMovieInterface {
  name: string,
  poster: {
    url: string,
    previewUrl: string
  }
}

@Component({
  selector: 'app-kinopoisk',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './kinopoisk.component.html',
  styleUrls: ['./kinopoisk.component.scss']
})
export class KinopoiskComponent implements OnInit {
  private movies: moviesInterface[] = [
      {
        "title": "драма",
        "movies": [
          {
            "title": "Артур, ты король",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/orig"
          },
          {
            "title": "Одна жизнь",
            "image": "https://image.openmoviedb.com/kinopoisk-images/9784475/4564801f-fe39-4493-b042-98038357d242/orig"
          },
          {
            "title": "Бронкская история",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4483445/a97b1c64-8726-4ec8-be0e-87a12ef717b8/orig"
          },
          {
            "title": "Землетрясение",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4774061/42571afc-b3f9-4f95-915d-00acd154e6b4/orig"
          },
          {
            "title": "Пожары",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4303601/40b4b961-07ab-4ce3-892f-63d6bd1fabc6/orig"
          },
          {
            "title": "Белая птица: Новое чудо",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10671298/4d35113c-a287-415e-82b6-e16c6e19107e/orig"
          },
          {
            "title": "Билли Эллиот",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10671298/9d509077-7025-4875-88f0-f9c3e7e4cca7/orig"
          },
          {
            "title": "Мой Хатико",
            "image": "https://image.openmoviedb.com/kinopoisk-images/9784475/50e2559d-c29c-494b-b729-3961352e20bc/orig"
          },
          {
            "title": "Страсти Христовы",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10835644/1b7bc6cf-055e-43e3-b321-359e7a6db0f5/orig"
          },
          {
            "title": "Вокзал для двоих",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1898899/f2f767fd-3fd1-4319-a95a-902fcd23963d/orig"
          }
        ]
      },
      {
        "title": "боевик",
        "movies": [
          {
            "title": "Апокалипсис сегодня",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10671298/a0d6537e-72ee-47f2-b51f-ef776b1b9cdf/orig"
          },
          {
            "title": "Холодное лето пятьдесят третьего...",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1704946/845206fa-315f-4955-8246-cd2ef3301dce/orig"
          },
          {
            "title": "Война",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1704946/7a06c242-ede9-4c91-a865-6a0f0b9c66eb/orig"
          },
          {
            "title": "Небо",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10893610/c4433b46-1517-4b27-a991-e73e3b159fa3/orig"
          },
          {
            "title": "Отель Мумбаи: Противостояние",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1599028/7192c98b-570d-4787-8a65-dbe373c404a1/orig"
          },
          {
            "title": "Брестская крепость",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1900788/b7f7bf0b-103b-47ed-998d-30e3eb9f2b1c/orig"
          },
          {
            "title": "Подольские курсанты",
            "image": "https://image.openmoviedb.com/kinopoisk-images/6201401/de10de1e-aada-4445-9e65-ec764022600a/orig"
          },
          {
            "title": "В августе 44-го",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4303601/afb8b5d1-6afd-4087-8bbe-abb79e39f328/orig"
          },
          {
            "title": "Брат 2",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1704946/80eab631-346c-4c29-b14d-1fa1438158f9/orig"
          },
          {
            "title": "Белое солнце пустыни",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4774061/d048a6d1-16a9-445e-821d-fce1742d6309/orig"
          }
        ]
      },
      {
        "title": "комедия",
        "movies": [
          {
            "title": "Покровские ворота",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4303601/62aa468b-fada-44c5-b7e6-9748a552f391/orig"
          },
          {
            "title": "Тот самый Мюнхгаузен",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1629390/15c9a24e-8f3b-4a09-9440-5d5c16d0ce7d/orig"
          },
          {
            "title": "Как прогулять школу с пользой",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1599028/8381e8bb-11b9-4380-8a05-597ef99030b1/orig"
          },
          {
            "title": "День выборов",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1946459/b824eb2a-1f6b-4149-852c-8360358349cd/orig"
          },
          {
            "title": "Курьер",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10893610/b61f7025-8f50-4d74-83d5-fc14f93952d9/orig"
          },
          {
            "title": "Не может быть!",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1629390/62f8ff65-2a90-49c1-aeda-c7fa511ff409/orig"
          },
          {
            "title": "Мимино",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4486454/a0a82a7d-4354-4aae-baef-3acbe0c0a487/orig"
          },
          {
            "title": "Семьянин",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4716873/b19fcaf1-a71d-4685-9ec9-5f049a112425/orig"
          },
          {
            "title": "Приключения Паддингтона 2",
            "image": "https://image.openmoviedb.com/kinopoisk-images/6201401/cd9d3979-bf12-4e73-9ebc-0ba2f1474aa4/orig"
          },
          {
            "title": "Особенности национальной охоты",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1777765/95329b41-326d-4e1a-a2d3-8f2298a08743/orig"
          }
        ]
      },
      {
        "title": "фантастика",
        "movies": [
          {
            "title": "Двухсотлетний человек",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1629390/8b171b14-74a3-4880-835b-2b21b8481e9a/orig"
          },
          {
            "title": "Сталкер",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1946459/811f668e-e54d-468c-9279-d45599e35b35/orig"
          },
          {
            "title": "Планета Ка-Пэкс",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10893610/711a1449-e6bb-467c-b01b-1846c9f87476/orig"
          },
          {
            "title": "Кин-дза-дза!",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1629390/4495b850-219d-4ca3-a2d8-ada7c8c2824f/orig"
          },
          {
            "title": "Иван Васильевич меняет профессию",
            "image": "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/orig"
          },
          {
            "title": "Собачье сердце",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1599028/a477f092-e2ed-4a9d-a5f1-001438e88ab5/orig"
          },
          {
            "title": "Терминатор 2: Судный день",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1704946/ade65029-952f-488d-87b2-20c676970151/orig"
          },
          {
            "title": "Люди в чёрном",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1773646/8daa2569-b300-47f9-b8e7-83f09a7af1a0/orig"
          },
          {
            "title": "Области тьмы",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1629390/d3bfd32d-41b4-48ad-9584-b3fc1f5669d4/orig"
          },
          {
            "title": "Дюна: Часть вторая",
            "image": "https://image.openmoviedb.com/kinopoisk-images/9784475/0c67265b-6631-4e25-b89c-3ddf4e5a1ee7/orig"
          }
        ]
      },
      {
        "title": "приключения",
        "movies": [
          {
            "title": "Артур, ты король",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10809116/02f5c9fa-8ed2-455b-9861-1a01252d73f4/orig"
          },
          {
            "title": "Приключения Реми",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1599028/3bb8ef0f-0230-4eeb-acb0-e2b44329de37/orig"
          },
          {
            "title": "Белая птица: Новое чудо",
            "image": "https://image.openmoviedb.com/kinopoisk-images/10671298/4d35113c-a287-415e-82b6-e16c6e19107e/orig"
          },
          {
            "title": "Сталкер",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1946459/811f668e-e54d-468c-9279-d45599e35b35/orig"
          },
          {
            "title": "Мотылёк",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1600647/8e08470b-0241-47f4-9ee6-32406da24df5/orig"
          },
          {
            "title": "Белое солнце пустыни",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4774061/d048a6d1-16a9-445e-821d-fce1742d6309/orig"
          },
          {
            "title": "Лекарь: Ученик Авиценны",
            "image": "https://image.openmoviedb.com/kinopoisk-images/1900788/4236cf68-84e6-42b8-9ea8-b2a12ea58cef/orig"
          },
          {
            "title": "Кавказская пленница, или Новые приключения Шурика",
            "image": "https://image.openmoviedb.com/kinopoisk-images/4483445/d681bcf8-0fc2-4f2e-a772-0a01920e62b3/orig"
          },
          {
            "title": "Апокалипсис",
            "image": "https://image.openmoviedb.com/kinopoisk-images/9784475/0ea65db5-0eb3-4c04-b8c6-22aa6fb6a302/orig"
          },
          {
            "title": "Иван Васильевич меняет профессию",
            "image": "https://image.openmoviedb.com/kinopoisk-images/6201401/a7ef44b8-1983-4992-a889-da6f87a3f559/orig"
          }
        ]
      }
  ];
  public movieSearch: string = '';
  private genres:string[] = ["комедия", "драма", "боевик", "приключения", "фантастика"]

  constructor(private movieService: MovieService,private router: Router) {}

  public navigateToDetail(id: string) {
    this.router.navigate(['/kinopoisk', id]);
  }

  // private async genreSearch() {
  //   await this.genres.map(genre => {
  //     this.movieService.getByGenre(genre).subscribe((data) => {
  //       const moviesArr = data.docs.map((el: kinopoiskMovieInterface) => {return{title: el.name, image: el.poster.url}})
  //       this.movies.push({title: genre, movies: moviesArr});
  //       console.log(this.movies);
  //     });
  //   })
  // }

  public findMovies() {
    this.movieService.getMovies(this.movieSearch).subscribe(
      (data) => {
        this.movies = data.docs;
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }

  ngOnInit() {
    // this.genreSearch()
    console.log(this.movies)
  }
}
