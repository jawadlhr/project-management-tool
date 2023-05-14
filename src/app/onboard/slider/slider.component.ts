import { Component } from '@angular/core';

@Component({
  selector: 'onboard-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  public slides = [
    {
      // image: 'https://placeimg.com/600/900/any',
      overlayColor: '#152238',
      title: '#1 SEO Enabled Content Management System',
      description:
        'Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all',
      // icon1: '',
      subtitle1: 'Build a Site',
      description1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon2: '',
      subtitle2: 'Ignite Visibility',
      description2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon3: '',
      subtitle3: 'Boost Your Rankings',
      description3:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon4: '',
      subtitle4: 'Grow Your Business',
      description4:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      // image: 'https://placeimg.com/600/900/any',
      overlayColor: '#5c162e',
      title: 'Powerful GUI Website Builder',
      description:
        'Discover the platform that gives you the freedom to create, design, manage and develop your web presence exactly the way you want.',
      // icon1: '',
      subtitle1: 'WYSIWYG Website Builder',
      description1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon2: '',
      subtitle2: 'Optimize PageSpeed',
      description2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon3: '',
      subtitle3: 'Responsive to All Devices',
      description3:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon4: '',
      subtitle4: 'Add Advanced Features',
      description4:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      // image: 'https://placeimg.com/600/900/any',
      overlayColor: '#300030',
      title: 'Data-Driven Analytics and Reporting',
      description:
        'Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all',
      // icon1: '',
      subtitle1: 'Get Forecast and Insights',
      description1:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon2: '',
      subtitle2: 'Google Analytics Integration',
      description2:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon3: '',
      subtitle3: 'Keep Track on Website Ranking',
      description3:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      // icon4: '',
      subtitle4: 'State-of-the-art Reporting',
      description4:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];
}
