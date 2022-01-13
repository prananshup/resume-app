import Header from './Header';
import MainContent from './MainContent';
import Navigation from './Navigation'
  
const ResumeApp = () => {
  const resume = {
    "name": "Prananshu Palandurkar",
    "role": "Full Stack Developer",
    "sections": [
        { "title": "About me", "description": "I am Prananshu" },
      {
        "title": "Skills", "skills": [{ "name": "React.js", "score": "80" }, { "name": "Java", "score": "80" }
          , { "name": "Node.js", "score": "70" }, { "name": "Redux", "score": "60" }, { "name": "HTML", "score": "80" }, { "name": "CSS", "score": "60" },
          {"name":"Javascript", "score":"70"}
        ]
      },
        {
            "title": "Work Experience",
            "experience": [
                { "timeline": "2015 – now", "company": "Perfi", "designation": "Senior TC" },
                {"timeline": "2012 - 2015", "company":"Capgemini", "designation":"SE"}
            ]
        },
        {
            "title": "Projects",
            "projects": [
                { "name": "cat", "desc": "AEM cat...", "role": "SD", "responsibilities": ["coding", "review"] },
                { "name": "texas", "desc": "AEM texas...", "role": "SD", "responsibilities": ["coding", "review"] },
                { "name": "gmf", "desc": "AEM gmf...", "role": "SD", "responsibilities": ["coding", "review"] }
            ]
        }
    ]
  };
  
  return (
    <div className="ResumeApp">
      <Header/>
      <Navigation sections = { resume.sections } />
      <MainContent resume = { resume } />
    </div>
  );
}

export default ResumeApp;
