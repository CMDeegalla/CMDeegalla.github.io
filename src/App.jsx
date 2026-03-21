export default function NetforgePortfolioUI() {
  const projects = [
    {
      title: "3-Tier Campus Network Design",
      stack: "Cisco Packet Tracer · RIP · Layer 2/3 Switching",
      desc: "Designed a hierarchical campus network with core, distribution, and access layers for scalable enterprise communication.",
      outcome: "Focus: enterprise design, routing, segmentation",
      link: "https://github.com/CMDeegalla/netforge-cisco-networks-labs",
    },
    {
      title: "Advanced Routing Topology",
      stack: "Cisco 2811 · RIP · Subnetting",
      desc: "Built a multi-subnet routing lab demonstrating dynamic routing, address planning, and end-to-end connectivity verification.",
      outcome: "Focus: routing logic, troubleshooting, verification",
      link: "https://github.com/CMDeegalla/netforge-cisco-networks-labs",
    },
    {
      title: "ASA Firewall Configuration",
      stack: "Cisco ASA 5505 · ACL · Security",
      desc: "Implemented traffic filtering and access control between internal and external network segments using firewall policies.",
      outcome: "Focus: security controls, ACLs, policy enforcement",
      link: "https://github.com/CMDeegalla/netforge-cisco-networks-labs",
    },
    {
      title: "Wireless Network with ISP",
      stack: "WiFi · DHCP · Access Point",
      desc: "Configured a small office style network integrating wired and wireless clients with internet connectivity simulation.",
      outcome: "Focus: practical infrastructure, access, connectivity",
      link: "https://github.com/CMDeegalla/netforge-cisco-networks-labs",
    },
    {
      title: "Cyber-Resilient Campus Network",
      stack: "VLAN · VoIP · Servers",
      desc: "Integrated segmented user groups, VoIP devices, and service servers in an enterprise-style campus topology.",
      outcome: "Focus: resilience, service integration, VLAN design",
      link: "https://github.com/CMDeegalla/netforge-cisco-networks-labs",
    },
  ];

  const skills = [
    "TCP/IP",
    "Subnetting",
    "VLAN",
    "Inter-VLAN Routing",
    "OSPF",
    "RIP",
    "ACL",
    "Cisco ASA",
    "Wireshark",
    "Linux CLI",
    "Packet Tracer",
    "Troubleshooting",
  ];

  const stats = [
    { label: "Networking Focus", value: "Enterprise Labs" },
    { label: "Project Area", value: "Routing & Security" },
    { label: "Current Goal", value: "Internship Ready" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_28%),radial-gradient(circle_at_top_right,rgba(6,182,212,0.4),transparent_30%),linear-gradient(135deg,#020617,#0f172a_45%,#082f49)]">
        <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-size-[40px_40px]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-1 text-sm text-sky-200 shadow-sm backdrop-blur">
                Computer Networks Undergraduate · Internship Seeking
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                C.M. Deegalla
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                Building a practical networking portfolio through hands-on labs in
                routing, switching, security, wireless infrastructure, and
                enterprise campus network design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://github.com/CMDeegalla"
                  className="rounded-2xl bg-white px-5 py-3 font-medium text-slate-900 shadow-xl transition hover:-translate-y-0.5"
                >
                  View GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/man630"
                  className="rounded-2xl border border-white/20 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
                <a
                  href="https://CMDeegalla.github.io"
                  className="rounded-2xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 font-medium text-sky-200 transition hover:bg-sky-400/15"
                >
                  Portfolio
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Career Focus</p>
                <p className="mt-3 text-xl font-semibold">Networking · NOC · Infrastructure · Security</p>
                <p className="mt-3 leading-7 text-slate-300">
                  Actively preparing for internship opportunities through project-based
                  learning and technical documentation.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{item.label}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-100">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-semibold">Professional Profile</h2>
            <p className="mt-4 leading-8 text-slate-300">
              I am pursuing a BSc (Hons) in Computer Networks at NSBM Green University.
              My portfolio focuses on verifiable technical work using Cisco Packet Tracer,
              Wireshark, Linux, and structured README documentation to demonstrate
              real-world networking capability.
            </p>

            <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="text-lg font-semibold">Core Technical Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Featured Projects</h2>
                <p className="mt-2 text-slate-400">Practical labs aligned with internship-ready networking skills.</p>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {projects.map((project) => (
                <div key={project.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition hover:border-sky-400/30 hover:bg-slate-900/90">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <p className="mt-1 text-sm text-sky-300">{project.stack}</p>
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex rounded-xl border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:border-sky-400/40 hover:text-white"
                    >
                      View Project
                    </a>
                  </div>
                  <p className="mt-4 leading-7 text-slate-300">{project.desc}</p>
                  <div className="mt-4 inline-flex rounded-full bg-sky-400/10 px-3 py-1 text-sm text-sky-200 border border-sky-400/20">
                    {project.outcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
}
