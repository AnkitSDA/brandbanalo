import Link from "next/link";

const teamMembers = [
  { img: "20.webp", name: "Manish Pandey", role: "Manager", delay: ".2s" },
  { img: "28.webp", name: "Geet Kaur", role: "Social Media Manager", delay: ".8s" },
  { img: "27.webp", name: "Sanjana", role: "Graphic Designer", delay: ".8s" },
  { img: "24.webp", name: "Himanshu", role: "Video Editor", delay: ".2s" },
  { img: "22.webp", name: "Kajal", role: "Graphic Designer", delay: ".6s" },
  { img: "23.webp", name: "Akansha Verma", role: "Web Developer", delay: ".8s" },
  { img: "26.webp", name: "Navjot Kaur", role: "Content Creator", delay: ".6s" },
  { img: "21.webp", name: "Yash Mishra", role: "Performance Marketing Executive", delay: ".4s" },
  { img: "25.webp", name: "Dhruv Prajapati", role: "Web Developer", delay: ".4s" },
];

export default function TeamGridSection() {
  return (
    <section className="team-sectopn fix section-padding">
      <div className="container">
        <div className="row g-4">
          {teamMembers.map((member) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
              key={`${member.img}-${member.name}`}
            >
              <div className="team-card-items rotate-none mt-0">
                <div className="thumb">
                  <img
                    src={`/assets/img/team/${member.img}`}
                    alt={member.name}
                  />
                </div>
                <div className="content">
                  <h3>
                    <Link href="/team/details">{member.name}</Link>
                  </h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

