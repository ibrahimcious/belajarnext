export const Navbar = () => {
  return (
    <div className="justify-between">
      <div className="flex">
        <div className="flex">
          <img
            src="https://cdn.prod.website-files.com/636496d3f0ebfdaba9784655/67085e706eec80d4d64e4385_untitled-ui-palantir.svg"
            alt=""
          />
          <h1>Untitled UI</h1>
        </div>
        <div className="flex">
          <p>Products</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>Resources</p>
          <p>About</p>
        </div>
      </div>
      <div className="flex">
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </div>
  );
};
