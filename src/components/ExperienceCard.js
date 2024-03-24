export const ExperienceCard = ({ startDate, endDate, location, bulletPoints }) => (
    <div>
      <p>{startDate} - {endDate} | {location}</p>
      <ul>
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );