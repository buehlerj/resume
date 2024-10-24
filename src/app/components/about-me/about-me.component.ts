import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  public aboutMePoints: any[];

  private currentSectionIndex = 0;

  constructor() {
    this.aboutMePoints = [
      {
        id: 'mountains',
        label: 'I Love the Mountains ⛰️',
        image: 'mountains.jpg',
        description: `Warm or cold weather, I'm going to try to spend as much time as possible in the mountains. It's my place to unwind and relax. Hiking, camping, snowboarding, tubing, everything; if there's mountain air and water then I'll have a great time!`,
      },
      {
        id: 'family',
        label: 'I Love my Familiy',
        image: 'family.jpg',
        description: `I have the privelege of living close enough to my family that I get to see them whenever I need. At this point, I'm an uncle to many incredible nieces and nephews that I get to spend time with!`,
      },
      {
        id: 'gym',
        label: 'I Love Working Out 💪',
        image: 'gym.jpg',
        description: `The gym has been an important part of my life for a very long time now. I make it a habbit to go at least 3 times if not 5 a week. I enjoy staying fit and healthy, and personally love doing the research into better technique and nutrition.`,
      },
      { id: 'gamer', label: `I'm a Gamer`, image: 'computer.jpg', description: `Anything with a good story, I'm all in! I am a PC Gamer which means I nitpick (probably too much) the minor details and graphics. I've built several computers over the past decade, this one being my most recent. I wanted to showcase AMD's Zen 2 architecture so I went with a fully custom liquid cooled hardline loop. Please ask questions if you have any, it was an incredible experience!` },
      {
        id: 'nerd',
        label: `I'm a Nerd`,
        image: 'comiccon.jpg',
        description: `Extra points if you can name this character. A lot of my free time is spent enjoying the many incredible worlds of fantasy through many different mediums. I love Star Wars, The Witcher, Lord of the Rings, etc. I've read nearly every book in these universes and like to consider myself an expert in some. Ask me anything about Star Wars and I'll prove to you I am the biggest encyclopedia of knowledge you've ever met!`,
      },
    ];
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const sections = this.aboutMePoints.map(
      (aboutMePoint: any) => `about-me-${aboutMePoint.id}`
    );
    console.log(sections);
    const nextSectionIndex = this.currentSectionIndex + 1;
    if (nextSectionIndex < sections.length) {
      // document.getElementById(sections[nextSectionIndex])?.scrollIntoView({ behavior: 'smooth' });
      this.currentSectionIndex = nextSectionIndex;
    }
  }
}
