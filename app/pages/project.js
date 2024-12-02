export async function getServerSideProps() {
    const res = await fetch("https://api.example.com/projects");
    const data = await res.json();
  
    return {
      props: { projects: data },
    };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>My Projects</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  