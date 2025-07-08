import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Discover our most dynamic, results-driven workout sessions tailored to ignite fat loss, build muscle, and push your limits.
        </p>
        <img src="/imgimg5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Join our expert-led bootcamps designed to challenge every muscle group, boost endurance, and transform your physique fast.
        </p>

        <div className="bootcamps">
          <div>
            <h4>HIIT Blast</h4>
            <p>
              Short on time? This high-intensity interval bootcamp shreds calories fast while improving your cardiovascular stamina and strength.
            </p>
          </div>
          <div>
            <h4>Strength & Sculpt</h4>
            <p>
              A full-body strength training camp focused on muscle definition, progressive overload, and functional movements using weights and resistance.
            </p>
          </div>
          <div>
            <h4>Core Crusher</h4>
            <p>
              Build rock-solid core strength with targeted bootcamp circuits designed to tone abs, obliques, and lower back stability.
            </p>
          </div>
          <div>
            <h4>Endurance Engine</h4>
            <p>
              Improve stamina, pacing, and mental grit with this endurance-focused bootcamp built on tempo runs, circuits, and cardio bursts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
