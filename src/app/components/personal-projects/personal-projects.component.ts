import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatTooltipModule],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.scss',
})
export class PersonalProjectsComponent {
  // Icons
  faGithub = faGithub;

  // Class
  projects: any[];

  constructor() {
    this.projects = [
      {
        label: 'Star Wars Library',
        link: 'https://starwarslibrary.jeffapotamous.com/',
        githubLink: 'https://github.com/buehlerj/star-wars-reviews',
        technologies: [
          { label: 'Angular', icon: 'tech/angular.png' },
          { label: 'Express JS 5', icon: 'tech/expressjs.png' },
          { label: 'MySQL', icon: 'tech/mysql.png' },
        ],
        descriptions: [
          {
            text: `This is a project that I've been working on for a few years now. It
            started as a Google Sheet for me to keep track of all the Star Wars
            Canon books that I was reading. The goal was to be able to read
            every new, Canon book and have a place to write out my thoughts and
            ratings to share with my friends. The Sheet worked great, but I
            wanted something that was easier to read and something I would want
            to share with others as well.`,
            image: '/SWLib/SWLibPhase1.png',
          },
          {
            text: `Using my experience as an Angular dev, I created a website with the
            main goals being 1) A place to store my Star Wars Book Reviews and
            2) To look really nice. I had been developing using Angular for a
            few years now so I tried to flex my understanding of colors, UI, and
            legibility. Another big focus was to create code that was easy to
            maintain since this would end up being a fairly dynamic site. Using
            Github Pages, I hosted it for my friends to access.`,
          },
          {
            text: `The project expanded to include other rankings that I had made,
            including ranking all 134 episodes of The Clone Wars, 74 episodes of
            Rebels, a Chronological breakdown of each Clone Wars episode, and a
            link to a video editing project that blended together the events of
            Revenge of the Sith and the final 4 episodes of the Clone Wars
            together. This was a fairly large amount of data, and it was
            difficult to maintian. I had looked into online Databases but found
            nothing that would suit my needs for free, so I mocked up a database
            using Typescript and Json. It was neat, but still required code
            changes any time I wanted to modify the data.`,
            image: '/SWLib/SWLibPhase3.png',
          },
          {
            text: `I went about 2 years without updating any of my rankings due to how
            arduous it was to make any modifications. Having set up a home
            server environment, I was able to create a Database using MySQL and
            an API using Express.JS. I migrated the data to the database and set
            up the website to read from that API. Now that the data is much
            easier to maintain, I have been keeping my book rankings and
            recommendations updated. This is also when I started hosting the
            site on my own domain.`,
            image: '/SWLib/SWLibPhase4.png',
          },
        ],
      },
      {
        label: 'Star Wars Library API',
        githubLink: 'https://github.com/buehlerj/star-wars-library-api',
        technologies: [{ label: 'Express JS 5', icon: 'tech/expressjs.png' }],
        descriptions: [
          {
            text: `As mentioned above, I created this ExpressJS API to access the data
              I was using for the Star Wars Library. I am still in the process of making
              endpoints and databases to store all of the data that was once stored
              in .json files.`,
            image: '/SWLib/API.png',
          },
        ],
      },
      {
        label: 'NOCO Custom PCs',
        link: 'https://nococustompcs.com/',
        githubLink: 'https://github.com/buehlerj/noco-custom-pcs',
        technologies: [{ label: 'React', icon: 'tech/react.png' }],
        descriptions: [
          {
            text: `I have been building computers since before I was in college, and
              I've been working on computers since I was able to walk. My father
              was a network technician and he taught me how to work on computers
              at a very young age. It's been a hobby, and one that I've had the
              pleasure of helping others with. One of my favorite things to do is
              sit down with a friend and plan out a computer build, going into as
              much detail as they'd let me. So it's been my dream to have my own
              business building computers for others. This is still in the works,
              but I hope to get this off the ground as soon as possible.`,
            image: '/companies/noco_custom_pcs.png',
          },
        ],
      },
      {
        label: 'Pie Calculator',
        githubLink: 'https://github.com/buehlerj/pie-calculator',
        technologies: [{ label: 'Ionic', icon: 'tech/ionic.png' }],
        descriptions: [
          {
            text: `A silly idea that my old roomate's father in law pitched to me on
              the night of his daughter's wedding. This would be a mobile app
              that allowed the user to enter pizza dimensions and cost and tell
              you if it was a good deal or not. Eventually I wanted to integrate
              public APIs to test other chain's pizza offerings to make the process
              easier on the user.`,
          },
        ],
      },
    ];
  }
}
