/* ==========================================================
   EDIT THIS FILE TO UPDATE YOUR WHOLE PORTFOLIO
   - Replace the placeholder values in `profile`
   - Add skills in `skills`
   - Add projects in `projects` (copy an existing block)
   Only write things that are true: no invented projects,
   certifications or experience.
   ========================================================== */

window.PORTFOLIO = {

  /* ---------------- PROFILE ---------------- */
  profile: {
    name: "ANOUAR CHRINAT",                       // TODO: your full name
    role: "Networks & Security Student",
    school: "EST (École Supérieure de Technologie), Morocco",
    tagline:
      "I am building a solid foundation in computer networking and cybersecurity through hands-on labs and simulations.",
    about: [
      "I am a student at EST in Morocco, specializing in Networks and Security.",
      "I learn by building: I design network topologies, configure devices and verify that everything works with real tests (ping, nslookup, HTTP access).",
      "I am looking for opportunities to keep learning and to grow in network administration and cybersecurity."
    ],
    // Facts shown in the About card. Add / remove lines freely (only true facts).
    facts: [
      { label: "Field",     value: "Networks & Security" },
      { label: "School",    value: "EST, Morocco" },
      { label: "Status",    value: "Student" },
      { label: "Languages", value: "Add yours here (e.g. Arabic, French, English)" }
    ],
    linkedin: "https://www.linkedin.com/in/anouar-chrinat-6b05b6400",   // TODO
    github:   "https://github.com/anouarchrinat25-alt",           // TODO
    email:    "anouar.chrinat25@ump.ac.ma"                                            // optional, e.g. "you@example.com"
  },

  /* ---------------- SKILLS ----------------
     level: "beginner" | "intermediate" | "advanced"
     Levels below are starting points based only on the first project.
     Adjust them honestly as you grow.                                  */
  skills: [
    {
      category: "Networking",
      items: [
        { name: "IPv4 addressing & subnet masks", level: "beginner" },
        { name: "Network topology design",        level: "beginner" },
        { name: "Router configuration (Cisco IOS)", level: "beginner" },
        { name: "Switching basics",               level: "beginner" }
      ]
    },
    {
      category: "Services",
      items: [
        { name: "DNS (A records)",        level: "beginner" },
        { name: "HTTP / web server",      level: "beginner" }
      ]
    },
    {
      category: "Troubleshooting",
      items: [
        { name: "ping (connectivity tests)", level: "beginner" },
        { name: "nslookup (DNS tests)",      level: "beginner" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Cisco Packet Tracer", level: "beginner" }
      ]
    }
  ],

  /* ---------------- PROJECTS ----------------
     To add a project: copy one block, give it a unique `id`,
     create the folder assets/projects/<id>/ and drop your images in.
     status: "completed" | "in-progress" | "planned"            */
  projects: [
    {
      id: "enterprise-network-dns-web",
      title: "Enterprise Network Simulation with DNS and Web Server",
      status: "completed",
      date: "",                                   // optional, e.g. "October 2026"
      summary:
        "A small enterprise LAN in Cisco Packet Tracer with a router, switch, client PC, DNS server and web server.",
      description: [
        "Designed a network topology with a router, a switch, a client PC, a DNS server and a web server, all in the 192.168.1.0/24 network.",
        "Configured IPv4 addressing on every device and set the router interface G0/0 as the default gateway (192.168.1.1).",
        "Created a DNS A record so that web.insto.ma resolves to 192.168.1.3, the web server."
      ],
      goals: [
        "Build a working LAN from scratch",
        "Resolve a domain name through an internal DNS server",
        "Serve a web page and reach it from the client by name"
      ],
      results: [
        "Ping from PC1 to the router, DNS server and web server: 4/4 replies, 0% loss.",
        "nslookup web.insto.ma returns 192.168.1.3 from DNS server 192.168.1.2.",
        "The page at http://web.insto.ma loads in the PC1 web browser."
      ],
      tools: ["Cisco Packet Tracer", "Cisco 2911 router", "Catalyst 2960 switch"],
      skills: [
        "IPv4 addressing",
        "Router interface configuration",
        "DNS A record resolution",
        "HTTP web server",
        "Connectivity testing with ping",
        "DNS testing with nslookup"
      ],
      addressing: [   // optional table, remove if you don't need it
        { device: "R1 (2911) G0/0", ip: "192.168.1.1",  role: "Default gateway" },
        { device: "DNS1",           ip: "192.168.1.2",  role: "DNS server" },
        { device: "WEB1",           ip: "192.168.1.3",  role: "Web server (web.insto.ma)" },
        { device: "PC1",            ip: "192.168.1.10", role: "Client" }
      ],
      // Images go in assets/projects/<id>/ . Missing files show a placeholder.
      screenshots: [
        { file: "./topology.png",       caption: "Network topology (192.168.1.0/24)" },
        { file: "./pc1-ip-config.png",  caption: "PC1 static IP configuration" },
        { file: "./dns1-ip-config.png", caption: "DNS1 static IP configuration" },
        { file: "./web1-ip-config.png", caption: "WEB1 static IP configuration" },
        { file: "./router-config.png",  caption: "Router R1 interface G0/0 configuration" },
        { file: "./ping-test.png",      caption: "Ping tests from PC1 to R1, DNS1 and WEB1" },
        { file: "./nslookup.png",       caption: "nslookup web.insto.ma resolves to 192.168.1.3" },
        { file: "./web-access.png",     caption: "HTTP access to http://web.insto.ma" }
      ],
      links: [
        // { label: "Source files on GitHub", url: "https://github.com/..." }
      ]
    }
  ]
};
