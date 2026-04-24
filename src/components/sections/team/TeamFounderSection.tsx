import React from 'react';

export default function TeamFounderSection() {
  return (
    <section className="founder-section" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="founder-img-wrapper" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img 
                src="/assets/img/about/founder-section.webp" 
                alt="Founder" 
                style={{ width: '100%', height: 'auto', display: 'block' }} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

