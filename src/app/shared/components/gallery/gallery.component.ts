import { Component, HostListener } from '@angular/core';
import { NgStyle, NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgStyle, NgIf, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  currentIndex: number = 0;
  width: number = 750; // Same as the width set in the HTML
  frames = [
    {
      title: 'The Tiger',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81eJpEEQwYL._AC_SL1500_.jpg',
      description: '(Panthera tigris) is the largest extant cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange-brown fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar.'
    },
    {
      title: 'The Lion',
      image: 'https://image.freepik.com/free-vector/cute-lion-cartoon_160606-353.jpg',
      description: 'The lion is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions have a prominent mane.'
    },
    {
      title: 'The Rat',
      image: 'https://i.pinimg.com/originals/07/1d/d0/071dd09d7b36e49139fe2cf08ff728a8.jpg',
      description: 'Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus.'
    },
    {
      title: 'The Owl',
      image: 'https://image.freepik.com/free-vector/cartoon-owl-tree-branch_194935-43.jpg',
      description: 'Owls are birds from the order Strigiformes, which includes over 200 species of mostly solitary and nocturnal birds of prey typified by an upright stance, a large, broad head, binocular vision, binaural hearing, sharp talons, and feathers adapted for silent flight.'
    }
  ];

  next() {
    if (this.currentIndex < this.frames.length - 1) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  goto(index: number) {
    if (index >= 0 && index < this.frames.length) {
      this.currentIndex = index;
    }
  }

  @HostListener('window:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'ArrowLeft') {
      this.prev();
    }
  }
}
