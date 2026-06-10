import React from 'react';

// Leadership team data matching the official Leadership Profile PDF
// TODO: Replace placeholder image URLs with actual high-quality professional headshots
// (extract from your Leadership Profile PDF or upload your own to public/ folder)
// Recommended: Add gold border treatment via CSS (already prepared in index.css .profile-card img)

const leaders = [
  {
    name: "Noel Malcolm",
    role: "Chief Executive Officer",
    bio: "Strong philosophical mindset grounded in logical reasoning. Brings seven years of experience co-founding and leading start-ups. Leads with collective team wisdom and a clear long-term vision for sustainable development.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face", // Placeholder - replace with actual
    highlight: true
  },
  {
    name: "Kingsley Titer",
    role: "Director & Co-Founder",
    bio: "Pioneering the SunCity Project with over 40 years of expertise in construction and development. Passionate about empowering the next generation of industry leaders and creating lasting opportunities.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Willeslie Turner",
    role: "Chief Operations Officer",
    bio: "Results-driven leader with mortgage advisory, project management, and operational experience. Excels at driving growth, optimizing operations, and building strong investor relationships.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Broderick McBean",
    role: "Project Manager",
    bio: "Founder of McBean's Project Management. Specializes in helping clients (especially diaspora) navigate property acquisition, construction, and maintenance. Mission: Turn dream projects into reality.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119c3e677?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Dr. Sefton Cummings, DBA, FCCA, FCA, JP",
    role: "Chief Financial Officer",
    bio: "18+ years senior finance leadership in credit unions. Doctorate in Business Administration. Expert in financial strategy, compliance, risk management, and driving sustainable organizational growth.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
  },
  {
    name: "Lorraine Givans",
    role: "Secretary",
    bio: "Certified Business & Life Coach and NLP Practitioner with over 25 years supporting teams and individuals. Passionate about helping people align with their true vision and prioritize mental well-being and personal growth.",
    image: "https://images.unsplash.com/photo-1573496359142-bf2ef3c1c2a8?w=400&h=400&fit=crop&crop=face"
  }
];

function LeadershipSection() {
  return (
    <section id="leadership" style={{ marginTop: '1rem' }}>
      <div className="container">
        <div className="section-header">
          <div className="company-name" style={{ marginBottom: '0.35rem' }}>
            SUNCON INVESTMENTS & DEVELOPMENT LTD
          </div>
          <h2 className="section-title">Meet Our Leadership Team</h2>
          <p className="section-subtitle">
            A dedicated group of professionals committed to excellence and Jamaica's progress.
          </p>
        </div>

        <div className="card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {leaders.map((leader, index) => (
            <div key={index} className="profile-card">
              <img 
                src={leader.image} 
                alt={`${leader.name} - ${leader.role}`} 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x220/162A43/C9A227?text=Photo'; }}
              />
              <div className="card-body">
                <div className="name">{leader.name}</div>
                <div className="role">{leader.role}</div>
                <div className="bio">{leader.bio}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '2.5rem', 
          color: 'var(--muted-text)', 
          fontSize: '0.95rem' 
        }}>
          <em>"Taking Responsibility for the Future"</em>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;