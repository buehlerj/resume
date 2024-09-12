import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DateDifferencePipe } from '../../pipes/date-difference.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    CommonModule,
    ClipboardModule,
    FontAwesomeModule,
    MatTooltipModule,
    DateDifferencePipe,
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  public workExperience: any[];
  public techExperience: any[];
  faChevronDown = faChevronDown;

  textToCopy: string = '';

  private constructor() {
    this.workExperience = [
      {
        title: 'Apollo Enterprise Imaging Corp',
        logo: 'companies/apollo-logo.png',
        position: 'Lead Software Developer',
        startDate: new Date(2017, 9, 25),
        endDate: 'PRESENT',
        description:
          'Project management for full stack development of clinical viewer. Worked from Database to API to web interface. Communicated directly with doctors to deliver features that helped with their day to day workflow. Also worked directly with our interns to teach them the technologies and methods we use.',
        email: '',
        phone: '',
        address: '2625 Redwing Rd Suite 250, Fort Collins, CO 80526',
        backgroundColor: '#6d4a06',
        website: 'https://apolloei.com/',
        technologies: [
          { label: 'Angular', icon: 'tech/angular.png' },
          { label: 'Visual Studio', icon: 'tech/visualstudio.png' },
          { label: 'SQL Server', icon: 'tech/sqlserver.png' },
          { label: 'GitHub', icon: 'tech/github.png' },
        ],
        references: [
          {
            person: 'Benjamin Wilfong',
            role: 'Lead Software Developer',
            phoneNumber: '(970) 689-8619',
            email: 'ben.wilfong@gmail.com',
          },
          {
            person: 'Rick Fry',
            role: 'Product Manger',
            phoneNumber: '(318) 446-7181',
            email: 'bendigoTX@gmail.com',
          },
          {
            person: 'Jeff Mabus',
            role: 'CTO',
            phoneNumber: '',
            email: '',
          },
        ],
      },
      {
        title: 'Encompass Technologies Development, Inc.',
        logo: 'companies/encompass-logo.png',
        position: 'Software Developer Intern',
        startDate: new Date(2017, 6, 5),
        endDate: new Date(2017, 10, 6),
        description:
          'Responsible for completing bug fixes and feature requests, specifically around EDI, coupon and deal management, and invoicing. Interacted with most of the departments including sales, finances, customer support, and IT.',
        email: '',
        phone: '',
        address: '420 Linden St. #200 Fort Collins, Co 80524',
        backgroundColor: '#073d87',
        website: 'https://www.encompasstech.com/',
        technologies: [
          { label: 'SVN', icon: 'tech/svn.png' },
          { label: 'SQL', icon: 'tech/sql.png' },
        ],
      },
      {
        title: 'Hewlett Packard/Hewlett Packard Enterprise',
        logo: 'companies/hewlett-packad-enterprise-logo.png',
        position: 'Software Developer Intern',
        startDate: new Date(2015, 6, 15),
        endDate: new Date(2017, 5, 30),
        description:
          'Worked in a fully agile environment. Websites that I developed were used by my internal organization of ~150 employees. Learned Docker imaging for deployment.',
        email: '',
        phone: '',
        address: '3404 E Harmony Rd, Fort Collins, Co 80528',
        backgroundColor: '#03614b',
        website: 'https://www.hpe.com/us/en/home.html',
        technologies: [
          { label: 'Ruby on Rails', icon: 'tech/rubyonrails.png' },
          { label: 'Docker', icon: 'tech/docker.png' },
        ],
      },
    ];

    this.techExperience = [
      { title: 'Git' },
      { title: 'Teams' },
      { title: 'Visual Studio Code' },
      { title: 'Git' },
      { title: 'Git' },
    ];
  }
}
