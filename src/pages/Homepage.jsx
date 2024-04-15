import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      {/* <a href="/pricing">Pricing</a> triggers a reload from server */}
    </div>
  );
}

export default Homepage;
