import {WorkExperience, EducationExperience} from '@/models/resume';

export const workExperiences: WorkExperience[] = [
  {
    id: '1',
    organization: 'Nokia',
    url: 'https://www.nokia.com/',
    startDate: '2014/08/13',
    endDate: '2017/09/21',
    role: 'Software Engineer',
    title: 'Research and Development Engineer',
    markdown: `<p><strong>Research &amp; Development Engineer II (5G Feature Team)</strong></p>
    <p>
      &bull; Led the initiative to re-engineer poorly written modules and project in
      compliance with SOLID principles
    </p>
    <p>
      &bull; Part of feature team responsible for developing 5G Mobile Simulator
    </p>
    <p>
      &bull; Led the overall architecture of Software Component Testing Framework
      for automated module testing
    </p>
    <p>&bull; Created utility web apps to improve team&rsquo;s productivity</p>
    <p>&emsp;o Test Server monitoring tool</p>
    <p>&emsp;o Root Cause Analysis manager</p>
    <br />
    <p>
      <strong>Research &amp; Development Engineer I (BTS Site Manager Team)</strong>
    </p>
    <p>
      &bull; Developed BTS Site Manager, an application used to operate BTS remotely
    </p>
    <p>
      &bull; Worked in an in-house web application used to organize domain-specific
      test cases
    </p>
    <p>
      &bull; Implemented java-based application used to validate BTS configurations
    </p>`,
    category: 'work',
  },
  {
    id: '2',
    organization: 'Capgemini',
    url: 'https://www.capgemini.com/',
    startDate: '2017/09/26',
    endDate: '2018/11/30',
    role: 'Software Engineer',
    title: 'Associate Consultant',
    markdown: `<p>&bull; Led development of CapGenie Web, an internal website used for employee management</p>
    <p>&bull; Part of feature team responsible for developing CapGenie Mobile</p>
    <p>&bull; Refactored poorly written code to improve performance, readability, and maintainability</p>
    <p>&bull; Led the initiative to transition CapGenie Mobile from Cordova to React Native</p>`,
    category: 'work',
  },
  {
    id: '3',
    organization: 'Development Bank of Singapore',
    url: 'https://www.dbs.com.sg',
    startDate: '2019/03/03',
    endDate: '2021/09/16',
    role: 'Software Engineer',
    title: 'UI Java Full Stack Developer',
    markdown: `<p>&bull; ReportX - Using web-based technologies, users can design a template (Similar to Crystal Report), configure a data source (CSV, Excel, database, S3, etc.), and set scheduled generation.</p>
    <p>PDFs will be generated from the template, but different output based on multiple factors.</p>
    <p>&bull; File Browser - In-house simple store solution; Following the bucket model of storing files; Capable of creating a profile for individuals and groups; Capable of whitelisting/blacklisting filetypes and actions to be performed</p>
    <p>&bull; Chatbot - In-house solution to reduce repetitive queries. The Client-side is used by the front office to reduce interaction with the back office regarding redundant queries. Admin side enables the owner to train the bot, provides analytics for users/questions.</p>
    <p>&bull; eDoc - Document repository for Post-trade document; End to end solution to manage and deliver documents to clients via dedicated UI or via email</p>
    <p>&bull; Barclays Blockchain Hackaton 2019 (Overall Winner) - Led UI development for blockchain application</p>`,
    category: 'work',
  },
  {
    id: '4',
    organization: 'NE Digital',
    url: 'https://www.nedigital.sg/',
    startDate: '2021/09/19',
    endDate: '2022/07/31',
    role: 'Software Engineer',
    title: 'Senior Software Engineer',
    markdown: `<p>Part of O2O team responsible for the following:</p>
    <ul>
        <li>&bull; Developing features for the admin web portal of the FairPrice web and mobile applications using React</li>
        <li>&bull; Improving legacy code by adhering to modern React practices</li>
        <li>&bull; Improving the code quality by writing better tests</li>
    </ul>`,
    category: 'work',
  },
  {
    id: '5',
    organization: 'Devoteam Sweden',
    url: 'https://se.devoteam.com',
    startDate: '2022/08/02',
    endDate: '2022/08/02',
    role: 'Software Engineer',
    title: 'Senior Software Engineer',
    markdown: `<p style="text-align: center">I'm just starting to do awesome stuff</p>
    <p style="text-align: center">Connect with me if you have a project in mind</p>`,
    category: 'work',
  },
];

export const educationExperience: EducationExperience[] = [
  {
    id: '1',
    organization: 'AMA Computer College',
    url: 'https://www.ama.edu.ph/',
    startDate: '2010/06/06',
    endDate: '2014/03/30',
    title: 'BS Computer Engineering',
    role: 'College',
    category: 'education',
  },
  {
    id: '2',
    organization: 'Batangas State University',
    url: 'https://batstate-u.edu.ph/',
    startDate: '2007/06/03',
    endDate: '2010/03/04',
    title: 'BS General Engineering',
    role: 'College',
    category: 'education',
  },
  {
    id: '3',
    organization: 'Our Lady of Caysasay Academy',
    url: 'http://www.olca.edu.ph/',
    startDate: '2004/06/06',
    endDate: '2007/03/01',
    title: 'General Education',
    role: 'High School',
    category: 'education',
  },
];
