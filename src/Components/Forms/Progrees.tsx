

const ProgressCircle = ({ size = 100, progress = 10, strokeWidth = 8 }) => {
  // Calculate the radius of the circle
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate the stroke dash offset based on progress
  const offset = ((100 - progress) / 100) * circumference;

  return (
    <svg className="toggle_dates_time"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle (Track) */}
      <circle className="toggle_dates_time"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="transparent" // Track color
        strokeWidth={strokeWidth}
      />

      {/* Progress Circle */}
      <circle className="toggle_dates_time relative"
      style={{}}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#da0b59" // Progress color
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`} // Start from the top
      />
      <circle className="toggle_dates_time absolute"
      style={{backgroundImage:'linear-gradient(180deg, #d5d5d5 0%, #ffffff 83.75%)'}}
        cx={175}
        cy={38}
        // cx={size / 2}
        // cy={size / 2}
        r={3}
        fill="none"
        stroke="white" // Track color
        strokeWidth={38}
        />
    </svg>
  );
};

export default ProgressCircle;