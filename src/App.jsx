export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="text-center py-20 bg-linear-to-r from-purple-700 to-cyan-600">
        <h1 className="text-5xl font-bold">C.M. Deegalla</h1>
        <p className="mt-4 text-lg">
          Computer Networks Undergraduate | Networking & Security Enthusiast
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="https://github.com/CMDeegalla" className="bg-white text-black px-5 py-2 rounded-xl">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/man630" className="border px-5 py-2 rounded-xl">
            LinkedIn
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="mt-4 text-gray-300">
          I am a Computer Networks undergraduate focusing on routing, switching,
          network security, and enterprise network design using Cisco Packet Tracer,
          Wireshark, and Linux.
        </p>
      </section>

      {/* SKILLS */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {["TCP/IP","Subnetting","VLAN","OSPF","RIP","ACL","Firewall","Wireshark","Linux"].map(skill => (
            <span key={skill} className="bg-slate-800 px-3 py-1 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="p-10 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold">Projects</h2>

        <div className="mt-6 grid gap-4">
          <div className="bg-slate-800 p-5 rounded-xl">
            <h3 className="font-bold">3-Tier Campus Network</h3>
            <p className="text-gray-300">Core, Distribution, Access design with VLAN segmentation.</p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h3 className="font-bold">Routing Topology</h3>
            <p className="text-gray-300">Multi-network communication using RIP routing.</p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h3 className="font-bold">ASA Firewall</h3>
            <p className="text-gray-300">Firewall + ACL traffic filtering.</p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h3 className="font-bold">Wireless Network</h3>
            <p className="text-gray-300">WiFi + ISP connectivity simulation.</p>
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            <h3 className="font-bold">Campus Network (VoIP + VLAN)</h3>
            <p className="text-gray-300">Enterprise network with VoIP and segmentation.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p>© 2026 C.M. Deegalla</p>
      </footer>

    </div>
  );
}