import { stats } from "../../data/site";
import { IconUsers, IconSubject, IconExam, IconQuestion } from "../Icons";

const icons = {
  students: IconUsers,
  subject: IconSubject,
  exam: IconExam,
  question: IconQuestion,
};

export default function Stats() {
  return (
    <div className="panel">
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <div key={stat.label} className="stat-card">
              <span className="stat-icon">
                <Icon size={24} />
              </span>
              <div>
                <div className="stat-num">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
