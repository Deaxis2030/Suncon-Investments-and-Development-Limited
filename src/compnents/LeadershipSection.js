import React from 'react';

// Leadership team data. 
// Images will be added later by you into the organized folder: public/images/team/
// Example future paths: /images/team/noel-malcolm.jpg etc.
// For now, we show clean profile cards without photos.

const leaders = [
  {
    name: "Noel Malcolm",
    role: "Chief Executive Officer",
    bio: "Strong philosophical mindset grounded in logical reasoning. Brings seven years of experience co-founding and leading start-ups. Leads with collective team wisdom and a clear long-term vision for sustainable development."
  },
  {
    name: "Kingsley Titer",
    role: "Director & Co-Founder",
    bio: "Pioneering the SunCity Project with over 40 years of expertise in construction and development. Passionate about empowering the next generation of industry leaders and creating lasting opportunities."
  },
  {
    name: "Willeslie Turner",
    role: "Chief Operations Officer",
    bio: "Results-driven leader with mortgage advisory, project management, and operational experience. Excels at driving growth, optimizing operations, and building strong investor relationships."
  },
  {
    name: "Broderick McBean",
    role: "Project Manager",
    bio: "Founder of McBean's Project Management. Specializes in helping clients (especially diaspora) navigate property acquisition, construction, and maintenance. Mission: Turn dream projects into reality."
  },
  {
    name: "Dr. Sefton Cummings, DBA, FCCA, FCA, JP",
    role: "Chief Financial Officer",
    bio: "18+ years senior finance leadership in credit unions. Doctorate in Business Administration. Expert in financial strategy, compliance, risk management, and driving sustainable organizational growth."
  },
  {
    name: "Lorraine Givans",
    role: "Secretary",
    bio: "Certified Business & Life Coach and NLP Practitioner with over 25 years supporting teams and individuals. Passionate about helping people align with their true vision and prioritize mental well-being and personal growth."
  },
  {
    name: "Errol Malcolm",
    role: "Acting Chief Financial Officer",
    bio: "Seasoned finance, legal & operations executive. Proven track record turning organizations from loss trajectories to strong profitability. Expertise in financial management, compliance, turnaround strategy, and governance."
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
          {leaders.map((leader, index) => {
            // Generate initials for the placeholder (e.g. "NM" for Noel Malcolm)
            const initials = leader.name
              .split(' ')
              .map(word => word[0])
              .join('')
              .toUpperCase();

            return (
              <div key={index} className="profile-card">
                {/* Placeholder until real photos are added to public/images/team/ */}
                <div 
                  className="profile-image-placeholder"
                  style={{
                    height: '220px',
                    background: 'linear-gradient(135deg, #0D1B2A 0%, #162A43 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '4px solid var(--gold)',
                    position: 'relative'
                  }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div 
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        background: 'rgba(201, 162, 39, 0.12)',
                        border: '2px solid var(--gold)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.5rem'
                      }}
                    >
                      <span style={{ 
                        fontSize: '1.65rem', 
                        fontWeight: 700, 
                        color: 'var(--gold)',
                        letterSpacing: '1px'
                      }}>
                        {initials}
                      </span>
                    </div>
                    <div style={{ 
                      fontSize: '0.7rem', 
                      color: 'var(--muted-text)', 
                      letterSpacing: '0.5px',
                      opacity: 0.7 
                    }}>
                      PHOTO
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <div className="name">{leader.name}</div>
                  <div className="role">{leader.role}</div>
                  <div className="bio">{leader.bio}</div>
                </div>
              </div>
            );
          })}
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