import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Users, ShieldCheck, CalendarDays, Trophy, ChevronRight, MapPin, Phone, Mail, Menu } from "lucide-react";

const teachers = [
  {name:"Dr. Samuel K. Mwangi", subject:"Mathematics · Physics", role:"Head of Academics", initials:"SM", color:"blue"},
  {name:"Ms. Neema J. Mushi", subject:"English · Literature", role:"Senior Teacher", initials:"NM", color:"peach"},
  {name:"Mr. Peter N. Msemo", subject:"Biology · Chemistry", role:"Science Department", initials:"PM", color:"green"},
];
const news = [
  {date:"12 OCT", tag:"ACADEMICS", title:"Term assessment timetable published", desc:"Families can review key dates for the upcoming assessments."},
  {date:"08 OCT", tag:"ANNOUNCEMENT", title:"Parent consultation day", desc:"Meet teachers and discuss your child’s learning progress."},
  {date:"02 OCT", tag:"SCHOOL LIFE", title:"Inter-house sports week", desc:"A week celebrating teamwork, discipline and school spirit."},
];
export default function Home() {
  return <main>
    <div className="topbar"><div className="container topbarInner"><span>Welcome to Green Valley School</span><div><span><Phone size={13}/> +255 700 123 456</span><span><Mail size={13}/> info@greenvalley.demo</span></div></div></div>
    <header className="nav"><div className="container navInner">
      <Link href="/" className="brand"><span className="brandMark"><GraduationCap size={25}/></span><span><b>GREEN VALLEY</b><small>EDUCATION IS  THE KEY OF LIFE</small></span></Link>
      <nav className="navLinks"><a href="#about">About</a><a href="#academics">Academics</a><a href="#teachers">Our Teachers</a><a href="#news">News</a><a href="#contact">Contact</a></nav>
      <div className="navActions"><Link className="btn btn-outline btn-small" href="/parent">Parent Portal</Link><Link className="btn btn-primary btn-small" href="/staff">Staff Portal <ArrowRight size={15}/></Link></div>
      <button className="mobileMenu" aria-label="Menu"><Menu/></button>
    </div></header>
    <section className="hero">
      <div className="heroImage"></div><div className="heroShade"></div>
      <div className="container heroContent">
        <div className="eyebrow"><span></span> A PLACE TO GROW</div>
        <h1>Building a brighter<br/><em>future together.</em></h1>
        <p>Quality education, dedicated teachers and a supportive community — helping every learner discover their potential.</p>
        <div className="heroButtons"><a className="btn btn-gold" href="#about">Discover our school <ArrowRight size={17}/></a><Link className="btn btn-glass" href="/parent">Access Parent Portal</Link></div>
        <div className="heroTrust"><div className="avatarStack"><span>JM</span><span>AN</span><span>PK</span></div><div><b>Growing confident learners</b><small>Knowledge · Discipline · Success</small></div></div>
      </div>
      <div className="heroNote"><span className="noteIcon"><BookOpen size={18}/></span><span><b>Admissions open</b><small>Enquire for the 2027 academic year</small></span><ChevronRight size={18}/></div>
      <div className="heroDots"><i className="active"></i><i></i><i></i><span>01 / 03</span></div>
    </section>
    <section className="statsWrap"><div className="container stats">
      <div className="stat"><span className="statIcon blue"><Users/></span><div><b>512</b><small>Students enrolled</small></div></div>
      <div className="stat"><span className="statIcon gold"><GraduationCap/></span><div><b>48</b><small>Qualified teachers</small></div></div>
      <div className="stat"><span className="statIcon green"><Trophy/></span><div><b>92%</b><small>Pass rate · demo data</small></div></div>
      <div className="stat"><span className="statIcon violet"><CalendarDays/></span><div><b>18+</b><small>Years of learning</small></div></div>
    </div></section>
    <section className="section container" id="about"><div className="aboutGrid">
      <div className="aboutVisual"><img src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=85" alt="Modern school campus"/><div className="experience"><b>18+</b><span>years nurturing<br/>future leaders</span></div></div>
      <div className="aboutText"><div className="eyebrow dark">WELCOME TO GREEN VALLEY</div><h2>Education that opens<br/>doors to <em>possibility.</em></h2><p className="muted">We believe every learner deserves the opportunity to build knowledge, character and confidence. Our school brings together committed educators, an engaging learning environment and a community that cares.</p>
        <div className="featureList"><div><span><ShieldCheck/></span><p><b>A safe, supportive environment</b><small>Every learner is seen, supported and encouraged.</small></p></div><div><span><BookOpen/></span><p><b>Learning for real life</b><small>Strong foundations, curiosity and critical thinking.</small></p></div></div>
        <a href="#academics" className="textLink">Learn more about our approach <ArrowRight size={16}/></a>
      </div>
    </div></section>
    <section className="section sectionTint" id="academics"><div className="container"><div className="sectionHead"><div><div className="eyebrow dark">LEARNING AT GREEN VALLEY</div><h2>Find your path to <em>greatness.</em></h2></div><p className="muted">A balanced academic experience that helps students grow in knowledge, confidence and character.</p></div>
      <div className="academicGrid"><article className="academicCard"><img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" alt="Students learning in classroom"/><div className="cardBody"><span className="roundIcon"><BookOpen/></span><h3>Academic Excellence</h3><p>Structured learning, thoughtful assessment and support for every student's progress.</p><a href="#contact">Explore academics <ArrowRight size={15}/></a></div></article>
      <article className="academicCard"><img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=800&q=80" alt="Students working together"/><div className="cardBody"><span className="roundIcon"><Users/></span><h3>Student Development</h3><p>Clubs, sports and shared experiences that build teamwork and leadership.</p><a href="#contact">Student life <ArrowRight size={15}/></a></div></article>
      <article className="academicCard"><img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80" alt="Teacher helping students"/><div className="cardBody"><span className="roundIcon"><GraduationCap/></span><h3>Dedicated Teachers</h3><p>Experienced educators focused on guiding, challenging and inspiring learners.</p><a href="#teachers">Meet our teachers <ArrowRight size={15}/></a></div></article></div>
    </div></section>
    <section className="section container" id="teachers"><div className="sectionHead"><div><div className="eyebrow dark">THE PEOPLE WHO INSPIRE</div><h2>Meet our <em>teachers.</em></h2></div><a className="textLink" href="#contact">Meet the whole team <ArrowRight size={16}/></a></div>
      <div className="teacherGrid">{teachers.map((t)=><article className="teacherCard" key={t.name}><div className={"teacherAvatar "+t.color}>{t.initials}</div><div><span className="teacherRole">{t.role}</span><h3>{t.name}</h3><p>{t.subject}</p></div><span className="teacherArrow"><ArrowRight size={17}/></span></article>)}</div>
    </section>
    <section className="portalBand"><div className="container portalInner"><div className="portalIcon"><ShieldCheck size={30}/></div><div><div className="eyebrow">CONNECTED SCHOOL COMMUNITY</div><h2>Stay connected to your child's journey.</h2><p>Securely access school updates, results, attendance and fee information in one convenient place.</p></div><Link href="/parent" className="btn btn-white">Open Parent Portal <ArrowRight size={17}/></Link></div></section>
    <section className="section sectionTint" id="news"><div className="container"><div className="sectionHead"><div><div className="eyebrow dark">WHAT'S HAPPENING</div><h2>News & <em>announcements.</em></h2></div><a className="textLink" href="#contact">View all updates <ArrowRight size={16}/></a></div><div className="newsGrid">{news.map(n=><article className="newsCard" key={n.title}><div className="newsDate"><b>{n.date.split(" ")[0]}</b><small>{n.date.split(" ")[1]}</small></div><div><span className="newsTag">{n.tag}</span><h3>{n.title}</h3><p>{n.desc}</p><a href="#contact">Read update <ArrowRight size={14}/></a></div></article>)}</div></div></section>
    <section className="section container" id="contact"><div className="admissionBox"><div><div className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to join the <em>Valley?</em></h2><p>Talk to our admissions team to learn more about the school and the application process.</p></div><a href="mailto:admissions@greenvalley.demo" className="btn btn-gold">Enquire about admission <ArrowRight size={17}/></a></div></section>
    <footer className="footer"><div className="container footerGrid"><div className="brand footerBrand"><span className="brandMark"><GraduationCap size={25}/></span><span><b>GREEN VALLEY</b><small>LEARN · LEAD · THRIVE</small></span></div><p>A school community committed to knowledge, discipline and success. <b>Demo content for presentation purposes.</b></p><div className="footerContact"><span><MapPin size={15}/> Morogoro, Tanzania</span><span><Phone size={15}/> +255 700 123 456</span><span><Mail size={15}/> info@greenvalley.demo</span></div></div><div className="container footerBottom"><span>© 2026 Green Valley School · Demo project</span><span><Link href="/parent">Parent Portal</Link><Link href="/staff">Staff Portal</Link></span></div></footer>
  </main>;
}