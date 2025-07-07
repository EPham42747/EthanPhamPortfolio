"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  type Info = "experience" | "education" | "projects";
  const [selected, setSelected] = useState<Info>("experience");

  const buttons = [
    { label: "Experience", info: "experience" },
    { label: "Education", info: "education" },
    { label: "Projects", info: "projects" }
  ];

  const experience = [
    {
      role: "AI Research Assistant",
      company: "Beth Isreal Deaconess Medical Center",
      location: "Boston, MA",
      date: "Jun 2025 - Present",
      details: [
        "Image segmentation on MRI brain scans for 3D model construction and TTField simulations",
        "Data processing pipelines to streamline TTField simulation analysis"
      ],
      skills: [
        "Computer Vision",
        "AI/ML",
        "SWE",
        "Data Engineering",
        "Data Visualization",
      ],
      technologies: [
        ".NET",
      ],
    },
    {
      role: "AI Systems Engineering Intern",
      company: "Takeda Pharmaceuticals",
      location: "Cambridge, MA",
      date: "Jun 2025 - Aug 2025",
      details: [
        "Agentic AI for automatic data onboarding into enterprise master data platform"
      ],
      skills: [
        "AI/ML",
        "SWE",
        "Data Engineering",
        "Databases",
        "IT",
        "Master Data Management",
      ],
      technologies: [
        "Databricks",
        "Apache Spark",
        "LangChain",
        "Pandas",
      ]
    },
    {
      role: "AI Research Assistant",
      company: "University of Massachusetts Amherst",
      location: "Amherst, MA",
      date: "Sep 2024 - May 2025",
      details: [
        "Light detection pipeline for automatic photography-based electrical grid analysis",
        "Hyperparameter tuning and unsupervised domain adaptation to improve performance in novel domain"
      ],
      skills: [
        "Computer Vision",
        "AI/ML",
        "Data Analysis",
      ],
      technologies: [
        "PyTorch",
        "Scikit-learn",
        "Numpy",
        "Matplotlib",
      ]
    },
    {
      role: "Data Engineering Intern",
      company: "Takeda Pharmaceuticals",
      location: "Cambridge, MA",
      date: "May 2024 - Aug 2024",
      details: [
        "Data ingestion and analysis for automatic data examination during application incident resolution",
        "Application recovery after failure, including after Crowdstrike incident"
      ],
      skills: [
        "SWE",
        "Data Engineering",
        "Data Analysis",
        "Databases",
        "IT",
      ],
      technologies: [
        "AppOptics (formerly Librato)",
        ".NET",
      ],
    }
  ];
  const education = [
    {
      school: "University of Massachusetts Amherst",
      degrees: [
        "BS, Computer Science",
        "Minor, Business Administration",
      ],
      years: "Sep 2023 - May 2026"
    }
  ];
  const projects = [
    {
      name: "Mallard | Fullstack Development",
      link: "https://github.com/TheVikJ/project-mallard",
      description: "A notifications-as-a-service platform for insurance company employees, policyholders, and claimants to handle claims and news.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Axios",
        "Prisma ORM",
        "Postman",
        "Git",
        "TypeScript",
        "SQL",
      ],
    },
    {
      name: "Station-Seven | Game Development",
      link: "https://github.com/EPham42747/Station-Seven",
      description: "A civilization-building game on Mars where the goal is to construct a self-sustaining research lab.",
      technologies: [
        "Unity Game Engine",
        "Git",
        ".NET",
      ],
    },
    {
      name: "UMass-BITES | Fullstack Development",
      link: "https://github.com/Ian-Mei/UMass-BITES",
      description: "A nutrition tracking solution tailored for UMass students by scraping school dining data. HackUMass XII submission.",
      technologies: [
        "Next.js",
        "React",
        "Express.js",
        "Tailwind CSS",
        "Zod",
        "Beautiful Soup",
        "Git",
        "TypeScript",
        "NoSQL",
      ],
    },
    {
      name: "LockIn | ML, Computer Vision",
      link: "https://github.com/D-SehKim/LockIn",
      description: "A program using the webcam that detects when the user's attention leaves the screen in front of them. HackUMass XI submission.",
      technologies: [
        "Keras",
        "OpenCV",
        "Python",
      ],
    },
  ];

  return (
    <>
      {/* Landing section */}
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="w-2/3 md:w-fit h-1/2 flex flex-col lg:flex-row items-center gap-10">
          <Image src={`/pfp.png`} alt="" width={300} height={300} className="rounded-md"/>
          <div className="max-w-[450px] text-white text-center lg:text-left">
            <h1>Hi, I&#39;m <span className="text-orange-200">Ethan</span>! &#x1F929;</h1>
            <p>I&#39;m a CS major and business minor at UMass Amherst.</p>
            <p>I&#39;ve been diving into SWE and AI/ML and have been applying my skills to research and internships in health and medicine.</p>
            <p>Thank you for visiting my page! More about me below.</p>
          </div>
        </div>
      </div>

      {/* Info section */}
      <div className="min-h-screen h-fit flex justify-center items-start bg-white">
        <div className="mx-8 my-24 w-full flex flex-col md:flex-row md:justify-center">
          <div className="md:mr-4 mb-8 md:mb-0 flex flex-row md:flex-col justify-center md:justify-start">
            {
              buttons.map((button, i) => (
                <button
                  key={i}
                  onClick={() => setSelected(button.info as Info)}
                  className={`mr-0 px-8 py-2 text-gray-900 bg-gray-100 hover:bg-gray-200 duration-200 ${selected === button.info ? "bg-gray-300" : ""} font-(family-name:--font-outfit) font-medium text-left`}
                >
                  {button.label}
                </button>
              ))
            }
          </div>
          <div className="md:ml-4 w-full md:max-w-[75vw] h-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 auto-rows-fr">
            {
              (() =>
                selected === "experience" ?
                  experience.map((e, i) => 
                    <div key={i} className="p-4 flex flex-col justify-between rounded-md bg-gray-100">
                      <div>
                        <h3>{e.role}</h3>
                        <p className="text-sm font-bold">{e.company}</p>
                        <p className="text-xs italic">{e.location}&nbsp;&nbsp;•&nbsp;&nbsp;{e.date}</p>

                        <ul className="list-disc pl-3 text-sm">
                          { e.details.map((d, i) => <li key={i}>{d}</li>) }
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-bold mt-2 mb-1">Skills</p>
                        <div className="flex flex-row gap-x-2 gap-y-1 flex-wrap">
                          {
                            e.skills.map((s, i) => 
                              <div key={i} className="px-2 rounded-full bg-gray-300">
                                <p className="text-xs">{s}</p>
                              </div>
                            )
                          }
                        </div>

                        <p className="text-xs font-bold my-1">Technologies</p>
                        <div className="flex flex-row gap-x-2 gap-y-1 flex-wrap">
                          {
                            e.technologies.map((t, i) => 
                              <div key={i} className="px-2 rounded-full bg-gray-300">
                                <p className="text-xs">{t}</p>
                              </div>
                            )
                          }
                        </div>
                      </div>
                    </div>
                  ) :
                
                selected === "education" ? 
                  education.map((e, i) => 
                    <div key={i} className="p-4 rounded-md bg-gray-100">
                      <h3>{e.school}</h3>
                      <p className="text-xs italic">{e.years}</p>
                      <ul className="list-disc pl-3 text-sm">
                          { e.degrees.map((d, i) => <li key={i}>{d}</li>) }
                        </ul>
                    </div>
                  ) :
                
                selected === "projects" ?
                  projects.map((p, i) => 
                    <div key={i} className="p-4 flex flex-col justify-between rounded-md bg-gray-100">
                      <div>
                        <h3>{p.name}</h3>
                        <p className="text-sm">{p.description}</p>
                        <a href={p.link} className="text-xs text-blue-600 underline">[link]</a>
                      </div>

                      <div>
                        <p className="text-xs font-bold mt-2 mb-1">Technologies</p>
                          <div className="flex flex-row gap-x-2 gap-y-1 flex-wrap">
                            {
                              p.technologies.map((t, i) => 
                                <div key={i} className="px-2 rounded-full bg-gray-300">
                                  <p className="text-xs">{t}</p>
                                </div>
                              )
                            }
                          </div>
                      </div>
                    </div>
                  ) : <></>
              )()
            }
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <footer className="flex flex-row justify-center items-center bg-gray-900 text-white">
        <div className="mx-4 my-8 flex flex-row items-center">
          <Image src={`/email.png`} alt="" width={24} height={24} />
          <a href="mailto:ethancpham@gmail.com" className="px-2 hover:underline">Email</a>
        </div>
            
        <div  className="mx-4 my-8 flex flex-row items-center">
          <Image src={`/linkedin.png`} alt="" width={24} height={24} />
          <a href="https://linkedin.com/in/ethancpham" className="px-2 hover:underline">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}
