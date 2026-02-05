import React from 'react';
import './App.css';

export default function ProjectHub() {
  const projects = [
    {
      name: "SecureVault",
      description: "Post-quantum file encryption tool with hybrid cryptography",
      status: "Live",
      statusColor: "bg-green-400",
      link: "/securevault",
      tech: ["Python", "ML-KEM-768", "CustomTkinter"]
    },
    // Add future projects here
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">

      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <img
            src="/blob-06d7ac6.png"   
            alt="Megane Alexis Logo"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-xl font-medium text-white">Megane Alexis</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-16">
        <div className="max-w-4xl mx-auto">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
              Welcome to the Lab
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A collection of cybersecurity tools and projects built to solve real problems.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                className="block bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                     <img src="../public/securevault-final-v1-512.png" alt="Logo" className="h-8 w-8 object-contain"></img>
                    <h3 className="text-xl text-white font-medium mb-2 group-hover:text-gray-100">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 bg-gray-900 px-3 py-1 rounded-full">
                    <div
                      className={`w-2 h-2 ${project.statusColor} rounded-full`}
                    ></div>
                    <span className="text-sm text-gray-300 font-medium">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-900 text-gray-400 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Footer Links */}
          <div className="mt-16 text-center space-y-4">
            <div className="flex justify-center gap-6 text-sm">

              <a
                href="https://meganealexis.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Portfolio
              </a>

              <span className="text-gray-600">•</span>

              <a
                href="https://linkedin.com/in/megane-alexis"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>

              <span className="text-gray-600">•</span>

              <a
                href="https://github.com/megane18"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>

            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
          © 2025 Megane Alexis. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
