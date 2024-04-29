import { Injectable } from '@angular/core';
import { PostSkeleton } from './post-skeleton';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsList: PostSkeleton[] = [
    {
      id: 0,
      title: 'Lorem',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec magna dignissim, lacinia metus sit amet, feugiat turpis. Nulla quam massa, rutrum vel sodales convallis, maximus non felis. Duis nec commodo sapien, tincidunt accumsan lectus.',
      thumbnailUrl: 'http//',

      date: '12/4/2024',
      tags: ['lorem'],
    },
    {
      id: 1,
      title: 'Ipsum',
      body: 'ut commodo. Aenean ornare ipsum quis faucibus suscipit. Pellentesque tincidunt efficitur ex, varius vestibulum libero condimentum eu. Nulla imperdiet semper turpis et rutrum. Ut sed lacus sed dui pellentesque efficitur. Donec vitae lorem id metus pulvinar venenatis quis id leo. ',
      thumbnailUrl: 'http//',
      date: '11/4/2024',
      tags: ['lorem', 'ipsum'],
    },
    {
      id: 2,
      title: 'Bapsum',
      body: 'Sed feugiat diam nec ante mattis vestibulum. Suspendisse semper malesuada leo, non rhoncus lacus posuere faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae',
      thumbnailUrl: 'http//',
      date: '10/4/2024',
      tags: ['tempus', 'ipsum', 'lorem'],
    },
  ];

  getAllPosts(): PostSkeleton[] {
    return this.postsList;
  }

  getFeaturedPost(): PostSkeleton | undefined {
    return this.postsList.at(0);
  }

  getPostById(id: number): PostSkeleton | undefined {
    console.log('id in service', id);
    // console.log(this.postsList.find(0)?.id);

    console.log(this.postsList.find((PostSkeleton) => PostSkeleton?.id === id));
    console.log(this.postsList.find((PostSkeleton) => PostSkeleton.id == id));
    // WHY == and not ===  ????????
    return this.postsList.find((PostSkeleton) => PostSkeleton.id == id);
  }

  constructor() {}
}
