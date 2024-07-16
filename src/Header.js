function Header() {
    return (
      <header>
        <div class="container">
          <a href="#">
            <img src={`${process.env.PUBLIC_URL}/assets/airbnb 1.png`} alt="" />
          </a>
        </div>
      </header>
    );
  }
  export default Header;