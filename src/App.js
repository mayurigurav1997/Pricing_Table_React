
import './App.css';
import Card from './Card';
import data from './Data.js';

function App() {
  return (

    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (

              <Card
                id={item.id}
                title={item.title}
                price={item.price}
                users={item.users}
                storage={item.storage}
                public_projects={item.public_projects}
                access={item.access}
                private_projects={item.private_projects}
                phone_support={item.phone_support}
                subdomain={item.subdomain}
                status_report={item.status_report} />
                
            );
          })}

        </div>
      </div>
    </section>

  );
}

export default App;
