import "./intro.css";

interface IntroProps {
  icon: React.ReactNode;
  tag: string;
  title: React.ReactNode;
  text: string;
}

export function Intro({ icon, tag, title, text }: IntroProps) {
  return (
    <div className="intro">
      <div className="pre-text">
        <div className="icon">{icon}</div>
        {tag}
        <div className="linha"></div>
      </div>
      <p className="title">{title}</p>
      <p className="text">{text}</p>
    </div>
  );
}
