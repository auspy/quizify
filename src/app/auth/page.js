export default function page() {
  return (
    <div class="loginbox">
      <h2>
        <br />
        Members Login
      </h2>
      <form className="flex flex-col">
        <input type="email" name="" placeholder="Email ID" />
        <input type="password" name="" placeholder="Password" />
        <button type="button" id="signIn">
          Log In
        </button>
        <button id="signUp">Create new acount? Register Here</button>
      </form>
    </div>
  );
}
